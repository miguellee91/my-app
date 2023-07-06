import React, { useState } from 'react'

//rafce
//구구단 함수 컴포넌트
const Gugufunction = () => {
    //함수에서는 useState()로 Hook사용
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [score, setScore] = useState(0);

    const submit = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {

            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setResult('딩동댕!');
            setValue('');
            setScore((prev) => prev + 1);
        } else {

            setResult('땡!');
            setScore((prev) => prev - 1);
        }
    }

    return (
        <>
            <div>{first}곱하기{second}은?</div>
            <form onSubmit={submit}>
                <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
                <button>입력!</button>
            </form>
            <div>{result} 점수: {score}</div>
        </>
    );
}

export default Gugufunction