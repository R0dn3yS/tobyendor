import { Command, CommandContext } from '../../deps.ts';

export default class CommandsCommand extends Command {
  override name = 'commands';
  
  override execute(ctx: CommandContext) {
    const commandNames = [];

    for (const command of ctx.client.commands.list) {
      commandNames.push(command[1].name);
    }
    
    ctx.reply(`Commands: ${commandNames.sort().map(name => `${ctx.client.prefix}${name}`).join(', ')}`);
  }
}