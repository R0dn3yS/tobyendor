import { Command, CommandContext } from '../../deps.ts';

export default class WaywallCommand extends Command {
  override name = 'waywall';
  
  override execute(ctx: CommandContext) {
    ctx.client.say(ctx.channel, 'You can find my waywall config here: https://github.com/R0dn3yS/waywall-config');
  }
}