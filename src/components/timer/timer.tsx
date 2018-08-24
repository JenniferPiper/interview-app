import * as React from 'react';

import autoBind from '../../utils/utils.js'
import './timer.css';

interface ITimerState{
    clock: any,
    minutesRemaining: number,
    secondsRemaining: number,
    timerDisplay: boolean
}
class Timer extends React.Component<any, ITimerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            clock: null,
            minutesRemaining: 30,
            secondsRemaining: 0,
            timerDisplay: false
        };
        autoBind.call(this, Timer);
    }
    public handleStart() {
        this.setState({timerDisplay: true});
        const clockInstance = setInterval(this.handleTimeDecrement, 1000);
        this.setState({ clock: clockInstance });
    }
    public handleTimeDecrement() {
        if (this.state.secondsRemaining > 0) {
            this.setState({secondsRemaining: this.state.secondsRemaining - 1});
        }
        else if (this.state.minutesRemaining > 0) {
            this.setState({secondsRemaining: 59});
            this.setState({minutesRemaining: this.state.minutesRemaining - 1});
        }
        else {
            clearInterval(this.state.clock);
        }
    }
    public render() {
        const startButtonJSX = <div>
            <button
                className="Timer-button"
                onClick={this.handleStart}>
                Start Challenge</button>
        </div>;
        const timerJSX = <div>
            <p>Time Remaining:</p>
            <h2>{this.state.minutesRemaining} : {this.state.secondsRemaining}</h2>

        </div>;
        return (
            <section className="Timer">
                {this.state.timerDisplay ? timerJSX : startButtonJSX}
            </section>
        );
    }
}

export default Timer;
