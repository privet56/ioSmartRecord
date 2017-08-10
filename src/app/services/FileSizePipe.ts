import { Pipe } from '@angular/core';
import { SoundService } from './SoundService';
import { File, Entry, FileEntry, IFile } from '@ionic-native/file';

@Pipe({
    name: 'filesize'
})

export class FileSizePipe
{
   constructor()
   {

   }

  transform(size: number) : string
  {
    return this.fileSizeAsString(size);
    //var i = Math.floor(Math.log(size) / Math.log(1024));
    //return Number((size / Math.pow(1024, i)).toFixed(2)) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
  }

  protected fileSizeAsString(size:number):string
  {
    let unit:string="";
    let newSize:number=0;

    let _1024:number = 1024.0;

    if (size < _1024)
    {
        newSize = size;
        unit = "bytes";
    }
    else if (size < _1024 * _1024)
    {
        newSize = size / _1024;
        unit = "kB";
    }
    else if (size < _1024 * _1024 * _1024)
    {
        newSize = size / (_1024 * _1024);
        unit = "MB";
    }
    else
    {
        newSize = size / (_1024 * _1024 * _1024);
        unit = "GB";
    }
    return newSize.toFixed(2)+" "+unit;
  }
}
