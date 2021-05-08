import { Component, OnInit } from '@angular/core'

import { AddItemPage } from '../pages/add-item/add-item.page'

import * as Models from '../shared/models'

import { BasePage } from '../base'

@Component({
  selector: 'home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends BasePage implements OnInit {

  private _todoList: Models.TODO[]

  constructor () {
    super()
  }

  ngOnInit () {
    this.getDataFromStorage()
  }

  /**
   * Gets a list of items from storage
   */
  getDataFromStorage () {
    this.todoService.getStorage()
      .then((storageData: Models.TODO[]) => {

        // if (!storageData) {
        //   this.todoService.createListItem(
        //     {
        //       createdAt: new Date().toString(),
        //       active: true,
        //       title: 'Make an App',
        //       date: new Date().toString(),
        //       time: null,
        //       description: 'Make a base Ionic App'
        //     })
        // }

        this.todoList = storageData

        console.log(this.todoList)
      })
  }

  /**
   * Presents a modal to create a new Item
   */
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
        this.getDataFromStorage()
      })
  }

  /**
   * Updates the list item to be inactive
   * 
   * @param listItem The item to updated
   */
  updateListItem (itemDate: Models.TODO): void {
    itemDate.active = !itemDate.active
    this.todoService.updateListItem(itemDate.createdAt)

    setTimeout(() => {
      this.getDataFromStorage()
    }, 1000);
  }

  //#region Setters

  set todoList (value: Models.TODO[]) {
    this._todoList = value
  }

  //#endregion

  //#region Markup getters

  get todoList (): Models.TODO[] {
    return this._todoList
  }

  //#endregion

}
