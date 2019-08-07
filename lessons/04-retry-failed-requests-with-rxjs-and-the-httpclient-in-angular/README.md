# Refined Zac's 04 update notes
Navigate to Angular project folder in terminal

Run `npx ng new temp-project --minimal`
  ?Would you like to add Angular routing?
    Select: NO _(hit enter)_
  ?Which stylesheet format would you like to use?
    Select: CSS _(hit enter)_

`cd` into `temp-project` and `yarn start`
  _Template works_

Delete auto-generated /src folder in `temp-project`

Alt-drag `src` folder to temp project

Update package.json `name` with numbered lesson slug

Update Auto-generated `angular.json` references to project with {numbered-lesson-slug}

**Check for errors - does this run like the lesson?**

Delete contents in original lesson example folder (this is 04-retry-failed-requests-with-rxjs…)

mv contents from temp-project to desired lesson folder (not `node_modules`)

Run in workspace (in actual lesson folder)
_Ran into errors surrounding RxJS imports (this is expected)_

yarn add rxjs-compat

Deal with rxjs import errors
  Reimported RxJS to v6 standard and updated use of rxjs operators

Yarn doesn’t install the right version of TypeScript for the whole workspace - how to fix that?

Try workspace `no hoist`option

# Zac's 04 update notes
Navigate to Angular project folder in terminal

Run `npx ng new temp-project --minimal`

? Would you like to add Angular routing?
Select: NO (hit enter)
? Which stylesheet format would you like to use?
Select: CSS (hit enter)

`cd` into `temp-project` and `yarn start`

*it works

Delete auto-generated /src folder in `temp-project`

Alt-drag src folder to temp project

Update package.json `name` with numbered lesson slug
Update Auto-generated `angular.json` references to project with numbered lesson slug

Check for errors - does this run like the lesson?

-> ERROR in src/app/people.service.ts(22,8): error TS2339: Property 'retryWhen' does not exist on type 'Observable<Object>'.

yarn add rxjs-compat

Expected error (from lesson):
-> ERROR http://localhost:4200/assets/data/unavailable.json

Delete contents in original lesson example folder (this is 04-retry-failed-requests-with-rxjs…)

mv contents from temp-project to desired lesson folder (not `node_modules`)

Run in workspace (in actual lesson folder)

More errors:
```
ERROR in /Users/zacjones/Desktop/source/egghead-repos/learn-http-in-angular/node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/es2015-polyfills.js

Module not found: Error: Can't resolve 'core-js/es6/weak-map' in '/Users/zacjones/Desktop/source/egghead-repos/learn-http-in-angular/node_modules/@angular-devkit/build-angular/src/angular-cli-files/models'

ERROR in /Users/zacjones/Desktop/source/egghead-repos/learn-http-in-angular/node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/jit-polyfills.js
Module not found: Error: Can't resolve 'core-js/es7/reflect' in '/Users/zacjones/Desktop/source/egghead-repos/learn-http-in-angular/node_modules/@angular-devkit/build-angular/src/angular-cli-files/models'

ERROR in The Angular Compiler requires TypeScript >=3.1.1 and <3.3.0 but 3.3.4000 was found instead.
```

Clear workspace node_modules and reinstall

Realize the old `.angular-cli.json` file didn’t get deleted properly - DELETE

Yarn doesn’t install the right version of TypeScript for the whole workspace - how to fix that?

Trying workspace `no hoist`option

Deal with rxjs import errors
ERROR in src/app/people.service.ts(23,8): error TS2339: Property 'retryWhen' does not exist on type 'Observable<Object>'.

Reimported RxJS to v6 standard and updated use of rxjs operators


--- 

# TempProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
