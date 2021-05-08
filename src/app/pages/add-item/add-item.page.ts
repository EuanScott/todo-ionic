import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

import * as Models from '../../shared/models'

import { BasePage } from '../../base'

@Component({
  selector: 'add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage extends BasePage implements OnInit {

  isAndroid: boolean = false

  // The login form details
  addItem = new FormGroup({
    title: new FormControl(),
    date: new FormControl(),
    time: new FormControl(),
    description: new FormControl(),
  })

  constructor () {
    super()
  }

  ngOnInit () {
  }

  addNewItem () {
    console.log('Add new items')
  }

  closeModal () {
    this.modalController.dismiss()
  }

}
