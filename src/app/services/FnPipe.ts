import { Pipe } from '@angular/core';
import { SoundService } from './SoundService';

@Pipe({
    name: 'fn'
})

export class FnPipe
{
   constructor()
   {

   }

  transform(lexSoundFn: string) : string
  {
    if(!lexSoundFn) return lexSoundFn;
    if(!lexSoundFn.endsWith(SoundService.SOUNDFNPOSTFIX)) return lexSoundFn;
	let timestamp:string = lexSoundFn.split('.')[0];
    return timestamp;
  }
} 
