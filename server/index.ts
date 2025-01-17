/**
    Copyright 2022 Google LLC
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        https://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */
require('module-alias/register');

import app from './app';
import { log } from '@iftta/util';

/**
 * Start Express
 */
const port = app.get('PORT');
const server = app.listen(port, () => {
    log.info(`Server listening on port ${port}`);
    log.info('ctrl + C to kill it');
});

export default server;
