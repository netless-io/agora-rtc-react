import{j as e}from"./jsx-runtime-1a9d9a93.js";import{M as n,d as r}from"./index-19babe22.js";import{u as i}from"./index-4811e648.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8982a7ce.js";import"../sb-preview/runtime.js";import"./index-a38d0dca.js";import"./index-8c3ac41d.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const l='## useAutoPlayVideoTrack\n\nThis hook lets you automatically play a local or remote video track.\n\n- When the component is mounted, this hook determines whether to automatically play the track according to the `play` parameter.\n- When the component is unmounted, this hook stops playing the `track`.\n\n#### Parameters\n\n| Parameter           | Type                                                  | Required | Description                                                                                                                                                                                                                                                                        |\n| ------------------- | ----------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `track`             | `IRemoteVideoTrack` &VerticalLine; `ILocalVideoTrack` | Yes      | The local or remote video track.                                                                                                                                                                                                                                                   |\n| `play`              | `boolean`                                             | No       | <li>`true`: Play the track.</li><li>`false`: Stop playing the track.</li>                                                                                                                                                                                                          |\n| `videoPlayerConfig` | `VideoPlayerConfig`                                   | No       | Playback configurations for a video track including setting the mirror and display mode. The SDK enables mirror mode for the local video track by default. See [`VideoPlayerConfig`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/videoplayerconfig.html) for details. |\n| `div`               | `HTMLElement` &VerticalLine; `null`                   | No       | The HTML element used to render the video track. The video automatically plays within this element only if `play` is `true` and `div` is provided. Otherwise, the video does not play automatically.                                                                               |\n\n#### Returns\n\nNone.\n\n#### Sample code\n\n```jsx\nimport { useAutoPlayVideoTrack, useLocalCameraTrack } from "agora-rtc-react";\n\nfunction App() {\n  const videoTrack = useLocalCameraTrack();\n  useAutoPlayVideoTrack(track, play, div);\n\n  return <></>;\n}\n```\n';function a(o){return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"hooks/useAutoPlayVideoTrack"}),`
`,e.jsx(r,{options:{namedCodesToUnicode:{VerticalLine:"|"}},children:l})]})}function g(o={}){const{wrapper:t}=Object.assign({},i(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(a,o)})):a()}export{g as default};
