import { AndroidFile, gradleAndManifestFiles } from './gradleAndManifest';
import { resourceFiles } from './resources';
import { kotlinFiles } from './kotlinFiles';

export { type AndroidFile } from './gradleAndManifest';
export { gradleAndManifestFiles } from './gradleAndManifest';
export { resourceFiles } from './resources';
export { kotlinFiles } from './kotlinFiles';

export const allAndroidFiles: AndroidFile[] = [
  ...gradleAndManifestFiles,
  ...resourceFiles,
  ...kotlinFiles
];

export function getFileByPath(path: string): AndroidFile | undefined {
  return allAndroidFiles.find(f => f.path === path);
}
