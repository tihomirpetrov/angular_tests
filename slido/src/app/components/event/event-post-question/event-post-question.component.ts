import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {EventService} from '../../../core/event.service';

@Component({
  selector: 'app-event-post-question',
  templateUrl: './event-post-question.component.html',
  styleUrls: ['./event-post-question.component.css']
})
export class EventPostQuestionComponent implements OnInit {
  questionForm: FormGroup;
  eventId: string;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private eventService: EventService) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      text: [ null, [ Validators.required, Validators.minLength(10), Validators.maxLength(70) ] ]
    });
    this.route.params.subscribe((params: Params) => {
      this.eventId = params.id;
    });
  }

  postQuestion() {
    const text = this.questionForm.value.text;
    const email = localStorage.getItem('email');
    this.eventService.addQuestion({
      text,
      createdOn: new Date(),
      eventId: this.eventId,
      username: email === null ? 'Anonymous' : email
    });

    this.questionForm.reset();
  }
}
