// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {count, score, playAgain} = props
  const onTap = () => {
    playAgain()
  }
  const imgUrl =
    count === 0
      ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const headingText = count === 0 ? 'You Lose' : 'You Won'
  const paraText = count === 0 ? 'Score' : 'Best Score'
  const scoreText = count === 0 ? `${score}/12` : '12/12'
  return (
    <div className="win-or-lose-container">
      <div className="win-or-lose-text-container">
        <h1 className="win-or-lose-heading">{headingText}</h1>
        <p className="win-or-lose-para">{paraText}</p>
        <p className="win-or-lose-score">{scoreText}</p>
        <button type="button" className="win-or-lose-button" onClick={onTap}>
          Play Again
        </button>
      </div>
      <div className="win-or-lose-image-container">
        <img src={imgUrl} alt="win or lose" className="win-or-lose-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
