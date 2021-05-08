import { Injectable } from '@angular/core';

import * as Models from '../models'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todoList: Models.TODO[] = [
    {
      createdAt: new Date(),
      active: true,
      title: 'Make an App',
      date: new Date(),
      time: null,
      description: 'Make a base Ionic App'
    }
  ]

  constructor () { }


  get todoList (): Models.TODO[] {
    return this._todoList
  }

  updateListItem (itemDate: Date): void {
    const tempItem = this._todoList.find(item => item.createdAt = itemDate)
    tempItem.active = !tempItem.active
  }

  createListItem (itemDetails: Models.TODO): void {
    this._todoList.push(itemDetails)
  }

}
