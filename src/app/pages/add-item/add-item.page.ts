import { Component, OnInit } from '@angular/core'

import * as Models from '../../shared/models'

import { BasePage } from '../../base'

import { DateTime } from 'luxon'

@Component({
  selector: 'add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage extends BasePage implements OnInit {

  private _addItem: Models.TODO
  private _minDate: Date
  private _maxDate: Date

  constructor () {
    super()

    this.addItem = { createdAt: '', active: true, title: '', date: '', time: '', description: '' }
    this.minDate = DateTime.local().toFormat('yyyy-LL-dd')
    this.maxDate = DateTime.local().plus({ years: 1 }).toFormat('yyyy-LL-dd')
  }

  ngOnInit () { }

  /**
   * Creates a new todo item
   */
  addNewItem () {
    this._addItem.createdAt = new Date().toString()

    this.todoService.createListItem(this._addItem)

    this.closeModal()
  }

  //#region Markup Getters

  get addItem (): Models.TODO {
    return this._addItem
  }

  get minDate (): Date {
    return this._minDate
  }

  get maxDate (): Date {
    return this._maxDate
  }

  //#endregion

  //#region Setters

  set addItem (value: Models.TODO) {
    this._addItem = value
  }

  set minDate (value: Date) {
    this._minDate = value
  }

  set maxDate (value: Date) {
    this._maxDate = value
  }

  //#endregion

  //#region Helpers

  closeModal () {
    this.modalController.dismiss()
  }

  disabled () {
    // for (const property in this._addItem) {
    //   return this.addItem[property] ? false : true
    // }
    return false
  }

  //#endregion

}
