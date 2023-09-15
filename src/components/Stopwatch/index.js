// Write your code here
import {Component} from 'react'
import './index.css'

const initialState = {minutesCount: 0, secondsCount: 0, isTimerRunning: false}

class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  increaseSecondsCount = () => {
    this.setState(prevState => ({secondsCount: prevState.secondsCount + 1}))
  }

  onStartTimer = () => {
    this.intervalId = setInterval(this.increaseSecondsCount, 1000)
    this.setState({isTimerRunning: true})
  }

  onStopTimer = () => {
    this.clearTimerInterval()
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState(initialState)
  }

  getTimeFormat = () => {
    const {secondsCount} = this.state
    const minutes = Math.floor(secondsCount / 60)
    const seconds = Math.floor(secondsCount % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state

    return (
      <div className="stopwatch-container">
        <h1 className="stopwatch-title">Stopwatch</h1>
        <div className="stopwatch-card">
          <div className="timer-title-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p className="timer-title">Timer</p>
          </div>
          <h1 className="display-timer">{this.getTimeFormat()}</h1>
          <div className="operating-buttons-card">
            <button
              className="button button-start"
              type="button"
              onClick={this.onStartTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              className="button button-stop"
              type="button"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              className="button button-reset"
              type="button"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
