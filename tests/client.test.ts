import { config, IInterface } from '../src/config';
import { describe, expect, it, beforeEach, afterAll } from '@jest/globals';

describe('config', () => {
  const originalEnv = { ...process.env }; // Clone the original environment variables

  beforeEach(() => {
    jest.resetModules(); // Reset module state before each test
    process.env = { ...originalEnv }; // Reset environment variables
  });

  afterAll(() => {
    process.env = originalEnv; // Restore original environment variables after all tests
  });


  it('should return a config object with all required properties', () => {
    // Set required environment variables
    process.env.CYCLE_START_DATE = '2024-01-01';
    process.env.CYCLE_END_DATE = '2024-01-31';

    const _config: IInterface = config();

    // Assert that the returned config matches the expected structure and values
    expect(_config).toStrictEqual({
      apiKey: 'test-api-key',
      cycleStart: '2024-01-01',
      cycleEnd: '2024-01-31',
    });
  });
});
