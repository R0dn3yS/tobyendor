import { Command, CommandContext } from '../../deps.ts';

export default class SongCommand extends Command {
  override name = 'song';
  
  override async execute(ctx: CommandContext) {
    const res = await fetch(`https://spotify.aiden.tv/u/${Deno.env.get('SPOTIFY_API')}`);

    ctx.reply(await res.text());
  }
}