import './index.css'

const Navbar = props => {
  const {timeStarted, topScore} = props
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website logo-image"
      />
      <div className="score-container">
        <p className="score">
          Score:
          <span className="top-score">{topScore}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="time-start">{timeStarted} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
