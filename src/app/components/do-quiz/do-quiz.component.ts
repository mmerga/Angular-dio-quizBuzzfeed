import { Component, OnInit } from '@angular/core';
import quiz from '../../../assets/data/quiz-questions.json'
import { Option, Question, Personalidade,  Quiz } from '../../../environments/environment.prod'

@Component({
  selector: 'app-do-quiz',
  templateUrl: './do-quiz.component.html',
  styleUrls: ['./do-quiz.component.css']
})
export class DoQuizComponent implements OnInit {

  title: string 
  questions: Array<Question> 
  currentQuestion: Question 
  currentQuestionIndex: number 
  maxIndex: number 
  totalScore: number 

  constructor() {
    this.title = ''
    this.questions = [{id: 1, question: '', options: [{id:1, name: '', score: 1}]}]
    this.currentQuestion = {id: 1, question: '', options: [{id:1, name: '', score: 1}]}
    this.currentQuestionIndex = 0
    this.maxIndex = 0
    this.totalScore = 0
  }
  
  ngOnInit(): void {
    if(quiz){
      this.title = quiz.title
      this.questions = quiz.questions
      this.currentQuestionIndex = 0
      this.currentQuestion = this.questions[this.currentQuestionIndex]
      this.maxIndex = this.questions.length
      this.totalScore = 0
    }else{
      this.title = 'Sorry, could not find the quiz, something went wrong'
    }
  }
  
  handleNextQuestion(score: number){
    console.log(this.maxIndex)
    //this.currentQuestion = this.questions[2]
    this.NextQuestion(score)
  }
  
  async NextQuestion(score: number){
    
    this.currentQuestionIndex += 1
    if(this.currentQuestionIndex >= this.maxIndex){
      this.title = 'acabou'
      // handleResult
    }else{
      this.currentQuestion =  this.questions[1]
      this.totalScore += score
    }
  }

}
