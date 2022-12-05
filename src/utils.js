import fs from 'fs/promises';
import url from 'url';
import path from 'path';

export const isExist = async (path) => {
  let isExisted;

  try {
    await fs.access(path);
    isExisted = true;
  } catch (error) {
    isExisted = false;
  }

  return isExisted;
}

export const getDirname = (metaUrl) => {
  return path.dirname(url.fileURLToPath(metaUrl));
}
