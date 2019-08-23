/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as base from '@jupyter-widgets/base';
import * as controls from '@jupyter-widgets/controls';
import * as output from './outputs';

const widgets = {};

for (const name of Object.getOwnPropertyNames(base)) {
  if (name.endsWith('Model') || name.endsWith('View')) {
    widgets[name] = base[name];
  }
}

for (const name of Object.getOwnPropertyNames(controls)) {
  if (name.endsWith('Model') || name.endsWith('View')) {
    widgets[name] = controls[name];
  }
}

for (const name of Object.getOwnPropertyNames(output)) {
  if (name.endsWith('Model') || name.endsWith('View')) {
    widgets[name] = output[name];
  }
}


// tslint:disable:no-default-export Required by webpack to generate a commonJS
// module.
export default widgets;
// tslint:enable:no-default-export
