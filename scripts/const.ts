import path from "path";

export const docType = ["components", "hooks", "interfaces"];
export const languages = ["", "-en"];
export const languagesFormat = [".zh-CN", ".en-US"];

export const packagePath = path.join(__dirname, "..", "packages", "agora-rtc-react");
export const docsPath = path.join(packagePath, "docs");
export const storiesPath = path.join(packagePath, "src", "stories");
