import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

function ResultModal({ ref, targetTime, remainingTime, onReset }) {

    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });

    return createPortal (
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>Tu Perdiste</h2>}
            {!userLost && <h2>Tu Puntaje: {score}</h2>}
            <p>
                El tiempo objetivo era <strong>{targetTime} segundos.</strong>
            </p>
            <p>
                Detuviste el cronómetro cuando faltaban<strong>{formattedRemainingTime} segundos </strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Cerrar</button>
            </form>
        </dialog>, 
        document.getElementById('modal')
    );
}

export { ResultModal };