import { Command, CommandContext } from '../../deps.ts';

export default class KeyboardCommand extends Command {
  override name = 'keyboard';
  
  override execute(ctx: CommandContext) {
    ctx.channel.say('Ajazz AK820 with Akko Creamy Blue Pro v3 switches');
  }
}