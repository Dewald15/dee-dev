// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
// Then we find all the tests.
const apps_cxfi = require.context('apps/cxfi/src', true, /.spec.ts$/);
const libs_charts = require.context('libs/charts', true, /.spec.ts$/);
const libs_components = require.context('libs/components', true, /.spec.ts$/);
const libs_core = require.context('libs/core', true, /.spec.ts$/);
const libs_cxfi = require.context('libs/cxfi', true, /.spec.ts$/);
const libs_pipes = require.context('libs/pipes', true, /.spec.ts$/);
// And load the modules.
apps_cxfi.keys().map(apps_cxfi);
libs_charts.keys().map(libs_charts);
libs_components.keys().map(libs_components);
libs_core.keys().map(libs_core);
libs_cxfi.keys().map(libs_cxfi);
libs_pipes.keys().map(libs_pipes);
