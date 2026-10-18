import { config } from 'dotenv';
import { StaticAuthProvider } from '@twurple/auth';
import { Bot, createBotCommand } from '@twurple/easy-bot';
import { getPB } from './util/mcsr.ts';

config();

const authProvider = new StaticAuthProvider(Deno.env.get('CLIENT_TOKEN')!, Deno.env.get('ACCESS_TOKEN')!);

const allCommands = [ 'mouse', 'keyboard', 'monitor', 'specs', 'sens', 'waywall', 'pb', '7tv', 'tracker', 'advancely', 'linuxguide', 'os', 'commands' ];

const bot = new Bot({
  authProvider,
  channels: [ Deno.env.get('CHANNEL')! ],
  commands: [
    createBotCommand('mouse', (_params, { reply }) => {
      reply('Lamzu Atlantis OG V2 Pro');
    }),

    createBotCommand('keyboard', (_params, { reply }) => {
      reply('Ajazz AK820 with Akko Creamy Blue Pro v3 switches');
    }),

    createBotCommand('monitor', (_params, { reply }) => {
      reply('AOC G4 Q27G42ZE 1440p 240hz');
    }),

    createBotCommand('specs', (_params, { reply }) => {
      reply('Ryzen 5 5600, Radeon RX 5700, 32GB Ram');
    }),

    createBotCommand('sens', (_params, { reply }) => {
      reply('1000dpi, 0.02291165 ingame, 2.32998545 waywall');
    }),

    createBotCommand('waywall', (_params, { reply }) => {
      reply('You can find my waywall config here: https://github.com/R0dn3yS/waywall-config');
    }),

    createBotCommand('pb', async (_params, { reply }) =>{
      reply(`Ranked PB: ${await getPB('R0dn3yS')}`);
    }),

    createBotCommand('7tv', (_params, { reply }) => {
      reply('browser extension to see twitch emotes like meow & PATS download here: https://7tv.app/');
    }),

    createBotCommand('tracker', (_params, { reply }) => {
      reply('I use advancely as my tracker: https://github.com/LNXSeus/Advancely, I\'m also maintainer of the AUR packages: https://aur.archlinux.org/packages/advancely');
    }),

    createBotCommand('advancely', (_params, { reply }) => {
      reply('I use advancely as my tracker: https://github.com/LNXSeus/Advancely, I\'m also maintainer of the AUR packages: https://aur.archlinux.org/packages/advancely');
    }),

    createBotCommand('linuxguide', (_params, { reply }) => {
      reply('Start using linux for MCSR now with this guide: https://its-saanvi.github.io/linux-mcsr/');
    }),

    createBotCommand('os', (_params, { reply }) => {
      reply('Arch Linux, Niri as compositor');
    }),

    createBotCommand('commands', (_params, { reply }) => {
      reply(`Commands: ${allCommands.sort().map(name => `!${name}`).join(', ')}`)
    })
  ]
});



bot.onSub(({ broadcasterName, userName }) => {
  bot.say(broadcasterName, `Thanks @${userName} for subscribing!`);
});