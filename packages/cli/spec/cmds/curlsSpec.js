/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const curlsCmd = require('../../lib/cmds/curls.js');
const MockLogger = require('../helpers/MockLogger');

describe('curls', () => {
  const mockLogger = new MockLogger();

  afterEach(() => {
    mockLogger.clear();
  });

  it('prints all cache URLs', (done) => {
    curlsCmd({_: ['', 'https://amp.dev']}, mockLogger)
        .then(() => {
          const output = mockLogger.logs;
          expect(output).toEqual([
            'https://amp-dev.cdn.ampproject.org/c/s/amp.dev',
            'https://amp-dev.amp.cloudflare.com/c/s/amp.dev',
            'https://amp-dev.bing-amp.com/c/s/amp.dev',
          ]);
          done();
        })
        .catch((e) => done.fail(e));
  });
});
