import { Command, CommandContext } from '../../deps.ts';

export default class SpecsCommand extends Command {
  override name = 'specs';
  
  override execute(ctx: CommandContext) {
    ctx.channel.say('Ryzen 5 5600, Radeon RX 5700, 32GB Ram');
  }
}