// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

export const API = 'http://localhost:3010/api/v0.1';

export const API_ADD_CLIENT = `${API}/clients/add`;
export const API_LIST_CLIENT = `${API}/clients/list`;
export const API_FILE_UPLOAD = `${API}/file/upload`;
