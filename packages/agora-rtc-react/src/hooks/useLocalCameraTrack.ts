import type { IAgoraRTCClient, IAgoraRTCError, ICameraVideoTrack } from "agora-rtc-sdk-ng";
import AgoraRTC from "agora-rtc-sdk-ng";
import { useState } from "react";

import { AgoraRTCReactError } from "../error";

import { useAsyncEffect, useIsUnmounted } from "./tools";
import { useIsConnected } from "./useIsConnected";

/**
 * a hook can create a local video track, this track will only be created once until Component is destroyed.
 * when you ready to create track, set ready to true.
 * unpublish track on unmount.
 */
export function useLocalCameraTrack(
  ready = true,
  client?: IAgoraRTCClient,
): {
  localCameraTrack: ICameraVideoTrack | null;
  isLoading: boolean;
  error: AgoraRTCReactError | null;
} {
  const isConnected = useIsConnected(client);
  const [track, setTrack] = useState<ICameraVideoTrack | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AgoraRTCReactError | null>(null);
  const isUnmountRef = useIsUnmounted();

  useAsyncEffect(async () => {
    if (!isUnmountRef.current) {
      setIsLoading(false);
      setError(null);
    }

    if (isConnected && ready && !track) {
      try {
        if (!isUnmountRef.current) {
          setIsLoading(true);
        }
        const result = await AgoraRTC.createCameraVideoTrack();
        if (!isUnmountRef.current) {
          setTrack(result);
        }
      } catch (err) {
        console.error(err);
        if (!isUnmountRef.current) {
          setError(
            new AgoraRTCReactError("IAgoraRTC.createCameraVideoTrack", err as IAgoraRTCError),
          );
        }
      }
      if (!isUnmountRef.current) {
        setIsLoading(false);
      }
    }
    if (!isConnected && !isUnmountRef.current) {
      setTrack(null);
    }
  }, [isConnected, ready]);
  return { localCameraTrack: track, isLoading: isLoading, error: error };
}
