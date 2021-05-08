import { Component } from '@angular/core'

import { Platform } from '@ionic/angular'
import { DeviceInfo, Plugins } from '@capacitor/core'

import { SettingsService } from './shared/services/index'

const { Device } = Plugins

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor (
    private platform: Platform,
    private settingsService: SettingsService
  ) {
    this.initializeApp()
  }

  initializeApp () {
    this.platform.ready()
      .then(async () => {
        Device.getInfo()
          .then((info: DeviceInfo) => {
            this.settingsService.setDeviceInfo = info
          })
      })
  }
}
