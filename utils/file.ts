import { existsSync, writeFileSync } from "fs";

const fileExists = (path: string) => {
  return existsSync(path);
};

const createFileFromBase64 = (base64: string, path: string) => {
  const buff = Buffer.from(base64, "base64");
  writeFileSync(path, buff);
};

export { createFileFromBase64, fileExists };
