import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { RecordPage } from '../record/record';
import { ConversationPage } from '../conversation/conversation';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tabRecordRoot = RecordPage;
  tabConversationRoot = ConversationPage;
  tabAboutRoot = AboutPage;

  constructor() {

  }
}
