import { Command, CommandContext } from '../../deps.ts';

export default class OsCommand extends Command {
  override name = 'os';
  
  override execute(ctx: CommandContext) {
    ctx.client.say(ctx.channel, 'Arch Linux, Niri as compositor');
  }
}