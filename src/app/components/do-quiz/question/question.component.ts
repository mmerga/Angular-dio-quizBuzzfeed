import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../../../environments/environment.prod'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  handleNextQuestion(score: number){}
  @Input()
  question: Question  = {id: 1, question: '', options: [{id:1, name: '', score: 1}]}

  constructor() { }

  ngOnInit(): void {
  }

}
