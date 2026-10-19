import { Command, CommandContext } from '../../deps.ts';

export default class LinuxguideCommand extends Command {
  override name = 'linuxguide';
  
  override execute(ctx: CommandContext) {
    ctx.reply('Start using linux for MCSR now with this guide: https://its-saanvi.github.io/linux-mcsr/');
  }
}