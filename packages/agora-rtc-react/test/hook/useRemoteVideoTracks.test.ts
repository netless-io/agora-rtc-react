import { act, renderHook, waitFor } from "@testing-library/react";
import type { IAgoraRTCRemoteUser } from "agora-rtc-sdk-ng";
import { FakeRTCClient, dispatchRTCEvent } from "fake-agora-rtc";
import { vi } from "vitest";

import * as clientHook from "../../src/hooks/client";
import { useRemoteVideoTracks } from "../../src/hooks/index";
import { createWrapper } from "../setup";

describe("useRemoteVideoTracks", () => {
  test("should return video tracks", async () => {
    const userList = [{ uid: "1", hasAudio: true, hasVideo: true }];
    const client = FakeRTCClient.create();
    const spy = vi.spyOn(clientHook, "useIsConnected");
    spy.mockReturnValue(true);
    const spy2 = vi.spyOn(client, "subscribe");

    const { result } = renderHook(() => useRemoteVideoTracks(userList, client), {
      wrapper: createWrapper(client),
    });
    await waitFor(() => {
      expect(spy2).toBeCalledTimes(1);
      expect(result.current.length).toBe(userList.length);
    });
    vi.resetAllMocks();
    vi.clearAllMocks();
  });

  test("should return [] when unsubscribe", async () => {
    const userList = [{ uid: "1", hasAudio: true, hasVideo: true }];
    const client = FakeRTCClient.create();
    const spy = vi.spyOn(clientHook, "useIsConnected");
    spy.mockReturnValue(true);
    const spy2 = vi.spyOn(client, "unsubscribe");
    (client.remoteUsers as IAgoraRTCRemoteUser[]) = userList;

    const { result } = renderHook(
      ({ userList, client }) => useRemoteVideoTracks(userList, client),
      {
        initialProps: { userList: userList, client: client },
        wrapper: createWrapper(client),
      },
    );
    await waitFor(() => {
      expect(spy2).toBeCalledTimes(0);
      expect(result.current.length).toBe(userList.length);
      userList[0].uid = result.current[0].getTrackId();
      (client.remoteUsers as IAgoraRTCRemoteUser[]) = userList;
    });
    act(() => {
      dispatchRTCEvent(client, "user-unpublished", userList[0], "video");
    });
    await waitFor(() => {
      expect(spy2).toBeCalledTimes(1);
    });

    vi.resetAllMocks();
    vi.clearAllMocks();
  });

  test("should return [] when change userList to []", async () => {
    const userList = [{ uid: "1", hasAudio: true, hasVideo: true }];
    const client = FakeRTCClient.create();
    const spy = vi.spyOn(clientHook, "useIsConnected");
    client.massUnsubscribe = vi.fn().mockReturnValue(Promise.resolve());
    spy.mockReturnValue(true);
    (client.remoteUsers as IAgoraRTCRemoteUser[]) = userList;

    const { result, rerender } = renderHook(
      ({ userList, client }) => useRemoteVideoTracks(userList, client),
      {
        initialProps: { userList: userList, client: client },
        wrapper: createWrapper(client),
      },
    );
    await waitFor(() => {
      expect(result.current.length).toBe(userList.length);
      userList[0].uid = result.current[0].getUserId().toString();
      (client.remoteUsers as IAgoraRTCRemoteUser[]) = userList;
    });

    rerender({ userList: [], client: client });
    await waitFor(() => {
      expect(client.massUnsubscribe).toBeCalledTimes(1);
      expect(result.current.length).toBe(0);
    });
    vi.resetAllMocks();
    vi.clearAllMocks();
  });
});
