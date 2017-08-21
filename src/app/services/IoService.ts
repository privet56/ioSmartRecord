import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class IoService
{
    
  constructor(protected platform: Platform)
  {

  }
  public isProd():boolean
  {
    //emulator with --livereload: document.location.href = http://172.27.14.51:8100/

    if (document.URL.startsWith('file:///'))
    {
        return true;
    }
    return false;
  }
}
