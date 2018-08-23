import * as React from 'react';
import './timer.css';

interface ITimerState{ timerDisplay: boolean}
class Timer extends React.Component<any, ITimerState> {
    constructor(props: any) {
        super(props);

        this.state = {
            timerDisplay: false
        }
    }
    public render() {
        const startButtonJSX = <div>
            <button className="Timer-button">Start Challenge</button>
        </div>;
        const timerJSX = <div>
            <p>Timer goes here.</p>
        </div>;
        return (
            <section className="Timer">
                {this.state.timerDisplay ? timerJSX : startButtonJSX}
                {/*{startButtonJSX}*/}
                {/*{timerJSX}*/}

            </section>
        );
    }
}

export default Timer;
