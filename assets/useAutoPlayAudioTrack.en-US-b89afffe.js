import{j as o}from"./jsx-runtime-94f6e698.js";import{M as a,d as r}from"./index-58264126.js";import{u as i}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-75eb7eda.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const c=`## useAutoPlayAudioTrack

This hook lets you automatically play a local or remote audio track.

- When the component is mounted, the hook determines whether to automatically play the track according to the \`play\` parameter.
- When the component is unmounted, the hook stops playing the \`track\`.

#### Parameters

| Parameter | Type                                                   | Required | Description                                                               |
| --------- | ------------------------------------------------------ | -------- | ------------------------------------------------------------------------- |
| \`track\`   | \`IRemoteAudioTrack\` &VerticalLine; \`ILocalAudioTrack>\` | Yes      | The local or remote audio track.                                          |
| \`play\`    | \`boolean\`                                              | No       | <li>\`true\`: Play the track.</li><li>\`false\`: Stop playing the track.</li> |

#### Returns

无。

#### Sample code

\`\`\`jsx
import { useAutoPlayAudioTrack, useLocalMicrophoneTrack } from "agora-rtc-react";

function App() {
  const audioTrack = useLocalMicrophoneTrack();
  useAutoPlayAudioTrack(track, play);

  return <></>;
}
\`\`\`
`;function n(t){return o.jsxs(o.Fragment,{children:[o.jsx(a,{title:"hooks/useAutoPlayAudioTrack"}),`
`,o.jsx(r,{options:{namedCodesToUnicode:{VerticalLine:"|"}},children:c})]})}function j(t={}){const{wrapper:e}=Object.assign({},i(),t.components);return e?o.jsx(e,Object.assign({},t,{children:o.jsx(n,t)})):n()}export{j as default};
//# sourceMappingURL=useAutoPlayAudioTrack.en-US-b89afffe.js.map
