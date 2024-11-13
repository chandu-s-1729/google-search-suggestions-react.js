// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachSearchItemDetails, suggestedCorrectSearch} = props
  const {suggestion} = eachSearchItemDetails

  const onMoveToUp = () => {
    suggestedCorrectSearch(suggestion)
  }

  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <img
        onClick={onMoveToUp}
        className="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
