// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, onTap} = props
  const {emojiName, emojiUrl, id} = emoji
  const emojiClicked = () => {
    onTap(id)
  }
  return (
    <li className="emoji-card">
      <button className="emoji-button" type="button" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
