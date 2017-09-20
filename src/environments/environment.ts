// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAdnd5fBBwdWtdaPE8gl2ebDFIFt9gzVyU',
    authDomain: 'ng4-books.firebaseapp.com',
    databaseURL: 'https://ng4-books.firebaseio.com',
    projectId: 'ng4-books',
    storageBucket: '',
    messagingSenderId: '154030786811'
  }
};
