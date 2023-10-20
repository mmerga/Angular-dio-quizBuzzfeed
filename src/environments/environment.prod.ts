export const environment = {
  production: true
};

export type Option = {
  id: number,
  name: string,
  score: number
}

export type Question = {
  id: number,
  question: string,
  options: Array<Option>
}

export type Personalidade = {
  personalidade: string, 
  score: [number, number]
}

export type Quiz = {
  title: string,
  personalidades: Array<Personalidade>,
  questions: Array<Question>  
}
