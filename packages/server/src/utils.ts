const ROOT_DIR = 'bandpol';
export const ROOT_PATH = __dirname.split(ROOT_DIR)[0];

export const prependRootPath = (path: string) => `${ROOT_PATH}${ROOT_DIR}/${path}`;

export const getClientResourcePath = (name: string = '') => prependRootPath(`dist/client/${name}`);
