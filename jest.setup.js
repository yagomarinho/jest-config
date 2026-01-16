/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const dotenv = require('dotenv')
const { resolve } = require('node:path')

dotenv.config({ path: resolve(process.cwd(), '.env.dev'), quiet: true })

module.exports = {}
