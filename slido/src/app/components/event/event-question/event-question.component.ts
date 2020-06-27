import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../shared/models/question';

@Component({
  selector: 'app-event-question',
  templateUrl: './event-question.component.html',
  styleUrls: ['./event-question.component.css']
})
export class EventQuestionComponent implements OnInit {
  @Input() questionInfo: Question;
  constructor() { }

  ngOnInit(): void {
  }

}
