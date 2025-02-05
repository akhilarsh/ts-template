import * as dotenv from 'dotenv';
dotenv.config();

export type IInterface = {
  apiKey: string;
  cycleStart: string;
  cycleEnd: string;
};

export function config(): IInterface {
  return {
    apiKey: process.env.LINEAR_API_KEY,
    cycleStart: process.env.CYCLE_START_DATE,
    cycleEnd: process.env.CYCLE_END_DATE,
  };
}
