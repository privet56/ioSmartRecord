import { Subscription }   from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';

export class CompBase implements OnDestroy
{
  protected subscriptions:Array<Subscription> = new Array<Subscription>();

  constructor()
  {

  }
  ngOnDestroy()
  {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }
}
