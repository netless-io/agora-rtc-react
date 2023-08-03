import{j as e}from"./jsx-runtime-94f6e698.js";import{M as a,d as r}from"./index-c09d4f32.js";import{u as i}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-846f9ee4.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const c='## useAutoPlayVideoTrack\n\nThis hook lets you automatically play a local or remote video track.\n\n- When the component is mounted, the hook determines whether to automatically play the track according to the `play` parameter.\n- When the component is unmounted, the hook stops playing the `track`.\n\n#### Parameters\n\n| Parameter | Type                                                  | Required | Description                                                                                                                                                                                          |\n| --------- | ----------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `track`   | `IRemoteVideoTrack` &VerticalLine; `ILocalVideoTrack` | Yes      | The local or remote video track.                                                                                                                                                                     |\n| `play`    | `boolean`                                             | No       | <li>`true`: Play the track.</li><li>`false`: Stop playing the track.</li>                                                                                                                            |\n| `div`     | `HTMLElement` &VerticalLine; `null`                   | No       | The HTML element used to render the video track. The video automatically plays within this element only if `play` is `true` and `div` is provided. Otherwise, the video does not play automatically. |\n\n#### Returns\n\nNone.\n\n#### Sample code\n\n```jsx\nimport { useAutoPlayVideoTrack, useLocalCameraTrack } from "agora-rtc-react";\n\nfunction App() {\n  const videoTrack = useLocalCameraTrack();\n  useAutoPlayVideoTrack(track, play, div);\n\n  return <></>;\n}\n```\n';function n(t){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"hooks/useAutoPlayVideoTrack"}),`
`,e.jsx(r,{options:{namedCodesToUnicode:{VerticalLine:"|"}},children:c})]})}function j(t={}){const{wrapper:o}=Object.assign({},i(),t.components);return o?e.jsx(o,Object.assign({},t,{children:e.jsx(n,t)})):n()}export{j as default};
//# sourceMappingURL=useAutoPlayVideoTrack.en-US-2a8dc309.js.map