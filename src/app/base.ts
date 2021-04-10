import { Injector } from '@angular/core'

import {
  LoadingController,
  ModalController,
  PopoverController,
  Platform
} from '@ionic/angular'

import { appInjector } from './shared/helpers'

import {
  SettingsService,
  TodoService
} from './shared/services'


export class BasePage {

  // get the stored reference to the injector
  injector: Injector = appInjector()

  // Custom Services
  protected settingsService: SettingsService
  protected todoService: TodoService


  // Ionic Controllers
  protected loadingController: LoadingController
  protected modalController: ModalController
  protected popoverController: PopoverController

  protected platform: Platform

  // Angular

  constructor () {
    // Custom Services
    this.settingsService = this.injector.get(SettingsService)
    this.todoService = this.injector.get(TodoService)

    // Ionic Controllers
    this.loadingController = this.injector.get(LoadingController)
    this.modalController = this.injector.get(ModalController)
    this.popoverController = this.injector.get(PopoverController)

    this.platform = this.injector.get(Platform)
  }

}

