import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Option } from '../../../../../environments/environment.prod'

@Component({
  selector: 'app-question-button',
  templateUrl: './question-button.component.html',
  styleUrls: ['./question-button.component.css']
})
export class QuestionButtonComponent implements OnInit {

  @Output() handleNextQuestionEvent = new EventEmitter<number>();

  handleNextQuestion(value: number) {
    this.handleNextQuestionEvent.emit(value);
  }

  @Input()
  option: Array<Option> = [{id:1, name: '', score: 1}]

  constructor() { }

  ngOnInit(): void {
  }

}
