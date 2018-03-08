import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [MyServiceService]
})
export class LogFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  addAccessItem(myForm) {
    console.log(myForm);
  }
}
