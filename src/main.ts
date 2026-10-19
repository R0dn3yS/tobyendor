import { StaticAuthProvider } from '@twurple/auth';
import { config } from 'dotenv';
import { CommandClient } from '../deps.ts';

config();

const authProvider = new StaticAuthProvider(Deno.env.get('CLIENT_ID')!, Deno.env.get('ACCESS_TOKEN')!);

const client = new CommandClient({
  authProvider: authProvider,
  prefix: '!',
  channels: [ 'r0dn3ys' ]
});

client.commands.loader.loadDirectory('./src/commands', {
  maxDepth: 1,
});

client.connect();