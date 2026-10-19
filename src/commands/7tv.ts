import { Command, CommandContext } from '../../deps.ts';

export default class STvCommand extends Command {
  override name = '7tv';
  
  override execute(ctx: CommandContext) {
    ctx.channel.say('browser extension to see twitch emotes like meow & PATS download here: https://7tv.app/');
  }
}