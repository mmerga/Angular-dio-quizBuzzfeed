import { Component, Input, OnInit } from '@angular/core';
import { Option } from '../../../../../environments/environment.prod'

@Component({
  selector: 'app-question-button',
  templateUrl: './question-button.component.html',
  styleUrls: ['./question-button.component.css']
})
export class QuestionButtonComponent implements OnInit {

  @Input()
  option: Array<Option> = [{id:1, name: '', score: 1}]
  @Input()
  handleNextQuestion(score: number){}

  constructor() { }

  ngOnInit(): void {
  }

}
