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
  personalidades: Array<Personalidade>
  result: Personalidade
  isResult: boolean

  constructor() {
    this.title = ''
    this.questions = [{id: 1, question: '', options: [{id:1, name: '', score: 1}]}]
    this.currentQuestion = {id: 1, question: '', options: [{id:1, name: '', score: 1}]}
    this.currentQuestionIndex = 0
    this.maxIndex = 0
    this.totalScore = 0
    this.personalidades = [{personalidade: '', score: [0, 0]}]
    this.result = {personalidade: '', score: [0, 0]}
    this.isResult = false
  }
  
  ngOnInit(): void {
    if(quiz){
      this.title = quiz.title
      this.questions = quiz.questions
      this.currentQuestionIndex = 0
      this.currentQuestion = this.questions[this.currentQuestionIndex]
      this.maxIndex = this.questions.length
      this.totalScore = 0
      this.personalidades = [{personalidade: '', score: [0, 0]}]
      this.result = {personalidade: '', score: [0, 0]}
      this.isResult = false
    }else{
      this.title = 'Sorry, could not find the quiz, something went wrong'
    }
  }
  
  handleNextQuestion(score: number){
    this.totalScore += score
    this.nextQuestion()
  }
  
  async nextQuestion(){
    this.currentQuestionIndex += 1
    if(this.currentQuestionIndex >= this.maxIndex){
      this.title = this.totalScore.toString()
      await this.handleResult()
      this.isResult = true
    }else{
      this.currentQuestion =  this.questions[this.currentQuestionIndex]
    }
  }

  async handleResult(){
    this.personalidades = [...quiz.personalidades]
    this.personalidades.forEach( item => {
      if(this.totalScore >= item.score[0] && this.totalScore <= item.score[1]){
        this.result = item;
      }
    })
  }
}
