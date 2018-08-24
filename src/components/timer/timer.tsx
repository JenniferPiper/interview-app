// tslint:disable:no-console
import * as React from 'react';

import autoBind from '../../utils/utils.js'
import './timer.css';

interface ITimerState{ timerDisplay: boolean, timeRemaining: number, clock: any}
class Timer extends React.Component<any, ITimerState> {
    constructor(props: any) {
        super(props);

        this.state = {
            clock: null,
            timeRemaining: 4,
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
        if (this.state.timeRemaining > 0) {
            this.setState({timeRemaining: this.state.timeRemaining - 1});
        }
        else {
            clearInterval(this.state.clock);
        }
        console.log('handleTimeDecrement');
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
            <h2>{this.state.timeRemaining}</h2>

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
