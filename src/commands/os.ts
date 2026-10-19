import { Command, CommandContext } from '../../deps.ts';

export default class OsCommand extends Command {
  override name = 'os';
  
  override execute(ctx: CommandContext) {
    ctx.channel.say('Arch Linux, Niri as compositor');
  }
}