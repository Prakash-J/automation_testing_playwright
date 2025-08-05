import dotenv from 'dotenv';
import path from 'path';

const env = process.env.TEST_ENV || 'dev';
dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) });

/**
 * Dynamically loads the configuration and test data based on the current environment.
 *
 * The environment is determined by the `TEST_ENV` environment variable
 * (e.g., 'dev', 'staging', 'prod'). It loads corresponding `.env` file,
 * config JS module, and test data JS module.
 * @async
 * @function getEnvConfig
 * @returns {Promise<{ config: object, testData: object }>} An object containing:
 * - `config`: Environment-specific configuration
 * - `testData`: Environment-specific test data
 */
async function getEnvConfig() {
  const config = await import(`../config/${env}.js`);
  const testData = await import(`../data/${env}Data.js`);
  return { config: config.default, testData: testData.default };
}

export default getEnvConfig;
