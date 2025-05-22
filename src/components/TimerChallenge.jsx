import { useState, useRef } from "react";
import { ResultModal } from "./ResultModal";

function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();
    const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);
    
    const timerIsActive = timerRemaining > 0 && timerRemaining < targetTime * 1000;

    if(timerRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    const handleReset = () => {
        setTimerRemaining(targetTime * 1000);
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimerRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    };

    const handleStop = () => {
        clearInterval(timer.current);
        dialog.current.open();
    };

    return (
        <>
            <ResultModal 
            ref={dialog} 
            targetTime={targetTime} 
            remainingTime={timerRemaining}
            onReset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button
                        onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Parar' : 'Comenzar'} Desafio
                    </button>
                </p>
                <p
                    className={timerIsActive ? 'Stop' : undefined}>
                    {timerIsActive ? 'El tiempo esta corriendo...' : 'Tiempo desactivado'}
                </p>
            </section>
        </>
    );
}

export { TimerChallenge };