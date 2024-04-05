/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {emojisId: [], score: 0, topScore: 0, count: 1}

  playAgain = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({
        topScore: score,
      })
    }
    this.setState({
      emojisId: [],
      score: 0,
      count: 1,
    })
  }

  onTapFnc = id => {
    const {emojisId, topScore, score} = this.state
    if (emojisId.includes(id) === false) {
      this.setState(prevState => ({
        emojisId: [...prevState.emojisId, id],
        score: prevState.score + 1,
        count: prevState.count + 1,
      }))
    } else {
      if (topScore < score) {
        this.setState({
          topScore: score,
        })
      }
      this.setState({
        emojisId: [],
        count: 0,
      })
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, count} = this.state
    return (
      <>
        <div className="bg-container">
          <NavBar score={count} topScore={topScore} count={count} />
          <div className="content-container">
            {count > 0 && count < 13 && (
              <ul className="emoji-cards-container">
                {this.shuffledEmojisList().map(each => (
                  <EmojiCard emoji={each} key={each.id} onTap={this.onTapFnc} />
                ))}
              </ul>
            )}
            {(count === 0 || score === 12) && (
              <WinOrLoseCard
                count={count}
                score={score}
                playAgain={this.playAgain}
              />
            )}
          </div>
        </div>
      </>
    )
  }
}

export default EmojiGame
