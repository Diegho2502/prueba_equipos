// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


/* A constant that is exported. */
export const environment = {
  production: false,
  prodApiBaseUrl: "",
  devApiBaseUrl:"https://wo-fifa.azurewebsites.net",
  username:"cualquiera",
  password:"cualquiera"
};
 
export const fileSize = {
  flatFile: 10000000,
  multimedia: 20000000,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.