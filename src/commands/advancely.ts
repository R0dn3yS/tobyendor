import { Command, CommandContext } from '../../deps.ts';

export default class AdvancelyCommand extends Command {
  override name = 'advancely';
  
  override execute(ctx: CommandContext) {
    ctx.client.say(ctx.channel, 'I use advancely as my tracker: https://github.com/LNXSeus/Advancely, I\'m also maintainer of the AUR packages: https://aur.archlinux.org/packages/advancely');
  }
}