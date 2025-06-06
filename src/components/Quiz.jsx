import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import Summary from './Summary.jsx';
import Question from './Question.jsx';


export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectedAnswer
    ) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),
        [handleSelectAnswer]);

    if (quizIsComplete) {
        return (
            <Summary userAnswers={userAnswers} />
        );
    }

    return (
        <div id="quiz">
            <div id="question">
                <div>
                    {'debug - activeQuestionIndex: ' + activeQuestionIndex}
                </div>
                <Question
                    key={activeQuestionIndex}
                    index={activeQuestionIndex}
                    onSelectAnswer={handleSelectAnswer}
                    onSkipAnswer={handleSkipAnswer}
                />
            </div>
        </div>
    );
}