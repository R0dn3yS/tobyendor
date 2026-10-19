import { Command, CommandContext } from '../../deps.ts';

export default class SensCommand extends Command {
  override name = 'sens';
  
  override execute(ctx: CommandContext) {
    ctx.channel.say('1000dpi, 0.02291165 ingame, 2.32998545 waywall');
  }
}