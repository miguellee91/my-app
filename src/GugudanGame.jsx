import React, { useState } from 'react';

const GugudanGame = () => {
    const [input, setInput] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);

    const generateQuestion = () => {
        const number1 = Math.floor(Math.random() * 9) + 1;
        const number2 = Math.floor(Math.random() * 9) + 1;
        setQuestion(`${number1} * ${number2}`);
        setAnswer(number1 * number2);
        setInput('');
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (parseInt(input) === answer) {
            setScore(score + 1);
        }

        generateQuestion();
    };

    return (
        <div>
            <h2>구구단 게임</h2>
            <form onSubmit={handleSubmit}>
                <p>문제: {question}</p>
                <label>
                    정답:
                    <input type="number" value={input} onChange={handleChange} />
                </label>
                <button type="submit">제출</button>
            </form>
            <p>점수: {score}</p>
        </div>
    );
};

export default GugudanGame;
