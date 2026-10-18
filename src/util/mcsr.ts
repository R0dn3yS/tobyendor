import { McsrClient } from '@r0dn3ys/mcsr-api';
import { miliToMinutes } from './time.ts';

const mcsrClient = new McsrClient();

export async function getPB(user: string): Promise<string> {
  const data = await mcsrClient.getUserData(user);
  const time = data.statistics.total.bestTime.ranked ? miliToMinutes(data.statistics.total.bestTime.ranked) : 'None found';

  return time;
}