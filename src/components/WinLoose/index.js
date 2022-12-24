import './index.css'

const WinLoose = props => {
  const {scores, pleaseAgainGame} = props

  const onPlayGame = () => {
    pleaseAgainGame()
  }

  return (
    <div className="container">
      <div className="Win-loose-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-image"
        />
        <p className="your-score">YOUR SCORE</p>
        <p className="number">{scores}</p>
        <button type="button" className="btn" onClick={onPlayGame}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-image"
          />
          <p className="play-again-button">PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}

export default WinLoose
