import { Injectable } from '@angular/core'

import { DeviceInfo } from '@capacitor/core'

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _deviceInfo: DeviceInfo

  isAndroid: boolean = false

  constructor () { }


  set setDeviceInfo (info: DeviceInfo) {
    this._deviceInfo = info
    this.isAndroid = this._deviceInfo.operatingSystem === 'android'
  }

  get getDeviceInfo (): DeviceInfo {
    return this._deviceInfo
  }
}
