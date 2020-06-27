import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../../core/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  createForm: FormGroup;
  expirationDate = new Date();

  constructor(private fb: FormBuilder,
              private eventService: EventService) { }

  ngOnInit(): void {
    this.expirationDate.setMonth(this.expirationDate.getMonth() + 3);
    this.createForm = this.fb.group({
      code: [ null, [ Validators.required, Validators.minLength(3) ] ],
      expiresOn: [ null, Validators.required ]
    });
  }

  createEvent() {
    const { code, expiresOn } = this.createForm.value;
    this.eventService.addEvent({ code, expiresOn, createdOn: new Date() });
  }
}
