import { Command, CommandContext } from '../../deps.ts';

export default class AdvancelyCommand extends Command {
  override name = 'advancely';
  
  override execute(ctx: CommandContext) {
    ctx.channel.say('I use advancely as my tracker: https://github.com/LNXSeus/Advancely, I\'m also maintainer of the AUR packages: https://aur.archlinux.org/packages/advancely');
  }
}