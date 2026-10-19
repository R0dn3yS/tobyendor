import { Command, CommandContext } from '../../deps.ts';

export default class KeyboardCommand extends Command {
  override name = 'keyboard';
  
  override execute(ctx: CommandContext) {
    ctx.client.say(ctx.channel, 'Ajazz AK820 with Akko Creamy Blue Pro v3 switches');
  }
}