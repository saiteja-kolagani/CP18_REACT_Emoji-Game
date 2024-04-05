// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, count} = props
  const scorecard = score >= 1 ? score - 1 : 0
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {count < 13 && (
        <div className="nav-section">
          <p className="nav-score">Score: {scorecard}</p>
          <p className="nac-top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
