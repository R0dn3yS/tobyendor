import { Command, CommandContext } from '../../deps.ts';

export default class TrackerCommand extends Command {
  override name = 'tracker';
  
  override execute(ctx: CommandContext) {
    ctx.channel.say('I use advancely as my tracker: https://github.com/LNXSeus/Advancely, I\'m also maintainer of the AUR packages: https://aur.archlinux.org/packages/advancely');
  }
}