import { Component } from '@angular/core';

import { AddItemPage } from '../pages/add-item/add-item.page'
import * as Models from '../shared/models'

import { BasePage } from '../base';

@Component({
  selector: 'home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends BasePage {

  constructor () {
    super()
  }

  async addItem () {
    const modal = await this.modalController.create({
      component: AddItemPage,
      swipeToClose: true,
      cssClass: 'add-item',
      backdropDismiss: true
    })

    modal.present()
      .then(_ => {
      })

    modal.onDidDismiss()
      .then(_ => {
      })
  }

  /**
   * Updates the list item to be inactive
   * 
   * @param listItem The item to updated
   */
  updateListItem (itemDate: Date): void {
    this.todoService.updateListItem(itemDate)
  }

  //#endregion Markup getters

  get todoList (): Models.TODO[] {
    return this.todoService.todoList
  }

  //#endregion


}
