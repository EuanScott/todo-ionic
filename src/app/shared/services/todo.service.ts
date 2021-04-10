import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

import * as Models from '../models'

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor () { }

  async todoList (): Promise<Models.TODO[]> {
    return this.getStorage()
  }

  updateListItem (itemDate: string): void {
    // const tempItem = this._todoList.find(item => item.createdAt = itemDate)
    // tempItem.active = !tempItem.active

    this.getStorage().then((storageData: Models.TODO[]) => {
      const tempIndex = storageData.findIndex(item => item.createdAt == itemDate)


      if (tempIndex > -1) {
        storageData.splice(tempIndex, 1);
      }
      console.log({ storageData })

      this.setItemInStorage(storageData)
    })

  }

  createListItem (itemDetails: Models.TODO): void {
    this.getStorage().then((storageData: Models.TODO[]) => {
      if (!storageData) storageData = []

      storageData.push(itemDetails)

      console.log({ storageData })

      this.setItemInStorage(storageData)
    })
  }

  async getStorage () {
    const { value } = await Storage.get({ key: 'todo_list' })

    return JSON.parse(value)
  }

  async setItemInStorage (dataToStore: Models.TODO[]) {
    await Storage.set({
      key: 'todo_list',
      value: JSON.stringify(dataToStore)
    });
  }

}
