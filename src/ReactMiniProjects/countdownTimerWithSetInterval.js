import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [buttonClicked, setButtonClicked] = useState('');
    const [timer, setTimer] = useState(300);

    useEffect(() => {
        let myInterval;

        if (buttonClicked === "start") {
            myInterval = setInterval(() => {
                setTimer(timer - 1)
            }, 1000)
        }

        return () => {
            clearInterval(myInterval);
        };
    }, [timer, buttonClicked]);

    return (
        <>
            <div>
                {timer}
                <div>
                    <button onClick={() => setButtonClicked(buttonClicked === 'start' ? 'stop' : 'start')}>{buttonClicked === 'start' ? 'Stop' : 'Start'}</button>
                    <button onClick={() => setTimer(300)}>Reset</button>
                </div>
            </div></>
    )
}

export default App
