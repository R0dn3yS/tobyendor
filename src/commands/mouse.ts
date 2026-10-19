import { Command, CommandContext } from '../../deps.ts';

export default class MouseCommand extends Command {
  override name = 'mouse';
  
  override execute(ctx: CommandContext) {
    ctx.client.say(ctx.channel, 'Lamzu Atlantis OG V2 Pro');
  }
}