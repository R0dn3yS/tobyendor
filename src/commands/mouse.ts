import { Command, CommandContext } from '../../deps.ts';

export default class MouseCommand extends Command {
  override name = 'mouse';
  
  override execute(ctx: CommandContext) {
    ctx.reply('Lamzu Atlantis OG V2 Pro');
  }
}