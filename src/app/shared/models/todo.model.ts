import { Time } from "@angular/common";

export interface TODO {
  createdAt: Date
  active: boolean
  title: string
  date: Date
  time: Time
  description: string
}
