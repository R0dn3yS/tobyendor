import { Command, CommandContext } from '../../deps.ts';
import { getPB } from '../util/mcsr.ts';

export default class PbCommand extends Command {
  override name = 'pb';
  
  override async execute(ctx: CommandContext) {
    ctx.client.say(ctx.channel, `Ranked PB: ${await getPB('R0dn3yS')}`);
  }
}