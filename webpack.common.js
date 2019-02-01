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

module.exports = {
  entry: './src/index.ts',
  output: {
    path: __dirname + '/dist/',
    libraryExport: 'default',
    libraryTarget: 'commonjs',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // Suppress warnings about large output size.
  performance: {hints: false},
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by
      // 'ts-loader'.
      {
        test: /\.tsx?$/,
        options: {
          configFile: 'src/tsconfig.json',
        },
        loader: 'ts-loader',
        exclude: /node_modules/
      },

      // All output '.js' files will have any sourcemaps re-processed by
      // 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ]
  },
};
