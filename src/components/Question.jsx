import { useState } from 'react';
import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';

export default function Question({
    index,
    onSelectAnswer,
    onSkipAnswer

}) {

    const [theAnswer, setTheAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 10000;

    if (theAnswer.selectedAnswer) {
        timer = 1000;
    }

    if (theAnswer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer) {
        console.log(answer);
        setTheAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setTheAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }

    let answerState = '';
    if (theAnswer.selectedAnswer && theAnswer.isCorrect !== null) {
        answerState = theAnswer.isCorrect ? 'correct' : 'wrong';
    } else if (theAnswer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
        <div id="question">
            <QuestionTimer
                key={timer}
                timeout={timer}
                onTimeout={theAnswer.selectedAnswer === '' ? onSkipAnswer : null}
                mode={answerState}
            />
            <h2>{QUESTIONS[index].text}</h2>
            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswer={theAnswer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />

        </div>

    );

}