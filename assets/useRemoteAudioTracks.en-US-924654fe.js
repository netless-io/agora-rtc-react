import{j as e}from"./jsx-runtime-94f6e698.js";import{M as n,d as s}from"./index-c09d4f32.js";import{u as i}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-846f9ee4.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const a="## useRemoteAudioTracks\n\nThis hook lets you automatically subscribe to and retrieve remote users' audio tracks.\n\n- When the component is unmounted, the hook stops subscribing to the audio tracks of the specified `users`.\n- The hook updates the subscribed audio tracks when the `users` parameter changes.\n\n#### Parameters\n\n| Parameter | Type                                                                                                                                                           | Required | Description                                                                                                                                                                    |\n| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |\n| `users`   | `IAgoraRTCRemoteUser[]` &VerticalLine; `undefined`                                                                                                             | Yes      | The list of remote users.                                                                                                                                                      |\n| `client`  | [`IAgoraRTCClient`](https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/API%20Reference/web_ng/interfaces/iagorartcclient.html) &VerticalLine; `null` | No       | Created using the Web SDK's [`IAgoraRTC.createClient`](https://docportal.shengwang.cn/cn/video-call-4.x/API%20Reference/web_ng/interfaces/iagorartc.html#createclient) method. |\n\n#### Returns\n\nReturns an object containing the following properties:\n\n| Property      | Type                                       | Description                                                                                                                                                                                                             |\n| ------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `audioTracks` | `IRemoteAudioTrack[]`                      | The list of subscribed audio tracks from remote users.                                                                                                                                                                  |\n| `isLoading`   | `boolean`                                  | <li>`true`: The hook is performing operations related to subscribing the tracks.</li><li>`false`: The hook completes operations related to subscribing the tracks, but it does not indicate a successfully result.</li> |\n| `error`       | `AgoraRTCReactError` &VerticalLine; `null` | Returns `null` if the tracks are successfully subscribed, otherwise throws an error. See [`AgoraRTCReactError`](https://doc.shengwang.cn/api-ref/rtc/react/react-sdk/data-types#agorartcreacterror) for details.        |\n\n#### Sample code\n\n```jsx\nimport { useRemoteUsers, useRemoteVideoTracks } from \"agora-rtc-react\";\n\nfunction App() {\n  //get remote user list\n  const remoteUsers = useRemoteUsers();\n  const videoTracks = useRemoteVideoTracks(remoteUsers);\n\n  return <></>;\n}\n```\n";function o(t){return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"hooks/useRemoteAudioTracks"}),`
`,e.jsx(s,{options:{namedCodesToUnicode:{VerticalLine:"|"}},children:a})]})}function k(t={}){const{wrapper:r}=Object.assign({},i(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(o,t)})):o()}export{k as default};
//# sourceMappingURL=useRemoteAudioTracks.en-US-924654fe.js.map