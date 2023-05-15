import type { Mock } from "vitest";
import { describe, test, vi, expect } from "vitest";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import type { ILocalVideoTrack } from "agora-rtc-sdk-ng";
import * as stories from "../src/components/LocalVideoTrack.stories";
const { Enabled, EmptyTrack } = composeStories(stories);
import { LocalVideoTrack, useAutoPlayVideoTrack } from "../src/components";
import { useAwaited } from "../src/hooks";

vi.mock("../src/hooks", () => ({
  useAwaited: vi.fn(),
}));
vi.mock("../src/components/TrackBoundary", () => ({
  useAutoPlayVideoTrack: vi.fn(),
}));
const mockTrack: ILocalVideoTrack = {
  setEnabled: vi.fn().mockReturnValue(Promise.resolve()),
  setMuted: vi.fn().mockReturnValue(Promise.resolve()),
} as unknown as ILocalVideoTrack;
const mockUseAwaited = useAwaited as Mock;
const mockUseAutoPlayVideoTrack = useAutoPlayVideoTrack as Mock;

describe("LocalVideoTrack component", () => {
  test("renders without crashing", () => {
    mockUseAwaited.mockReturnValueOnce(mockTrack);
    mockUseAutoPlayVideoTrack.mockReturnValueOnce(mockTrack);
    const { container } = render(<LocalVideoTrack />);
    expect(container).toBeInTheDocument();
    vi.clearAllMocks();
  });

  test("sets disabled on video track", () => {
    mockUseAwaited.mockReturnValueOnce(mockTrack);
    mockUseAutoPlayVideoTrack.mockReturnValueOnce(mockTrack);
    render(<LocalVideoTrack disabled />);
    expect(mockTrack.setEnabled).toHaveBeenCalledTimes(1);
    expect(mockTrack.setEnabled).toHaveBeenCalledWith(false);
    vi.clearAllMocks();
  });

  test("sets muted on video track", () => {
    mockUseAwaited.mockReturnValueOnce(mockTrack);
    mockUseAutoPlayVideoTrack.mockReturnValueOnce(mockTrack);
    render(<LocalVideoTrack muted />);
    expect(mockTrack.setMuted).toHaveBeenCalledTimes(1);
    expect(mockTrack.setMuted).toHaveBeenCalledWith(true);
    vi.clearAllMocks();
  });
});

describe("LocalVideoTrack component stories", () => {
  test("renders Enabled stories", () => {
    const { container } = render(<Enabled />);
    expect(container).toBeInTheDocument();
  });

  test("renders EmptyTrack stories", () => {
    const { getByText } = render(<EmptyTrack />);
    expect(getByText(/An Empty Local Video Track/i)).toBeInTheDocument();
  });
});
