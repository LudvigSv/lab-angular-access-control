import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {
  log: Array<Object> = [
    { person: String },
    { message: String },
    { createdAt: Date }
  ];

  constructor() {}
  getAccessLog(): Array<Object> {
    return this.log;
  }

  addAccessItem(person, message) {
    return this.log.push({
      person: String,
      message: String,
      createdAt: new Date()
    });
  }
}
