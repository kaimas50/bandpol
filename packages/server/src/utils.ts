export const ROOT_PATH = __dirname.split('packages')[0];

export const appendRootPath = (path: string) => `${ROOT_PATH}${path}`;
