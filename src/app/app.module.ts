import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { DoQuizComponent } from './components/do-quiz/do-quiz.component';
import { TitleComponent } from './components/do-quiz/title/title.component';
import { QuestionComponent } from './components/do-quiz/question/question.component';
import { QuestionButtonComponent } from './components/do-quiz/question/question-button/question-button.component';
import { ResultComponent } from './components/do-quiz/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    HeaderComponent,
    LogoComponent,
    NavBarComponent,
    DoQuizComponent,
    TitleComponent,
    QuestionComponent,
    QuestionButtonComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
