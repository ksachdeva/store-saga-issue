import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

import {APP_PROVIDERS} from './store';

// http://screencast.com/t/T2FZE8TTwCl
// http://screencast.com/t/hBGHC0ZO 

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {},
  providers: [APP_PROVIDERS]
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {      
      StatusBar.styleDefault();
    });
  }
}
