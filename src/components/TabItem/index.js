import './index.css'

const TabItem = props => {
  const {tabListDetails, isActive, onTabClick} = props
  const {displayText, tabId} = tabListDetails
  const buttonColor = isActive ? 'active-button' : ''

  const onClicked = () => {
    onTabClick(tabId)
  }

  return (
    <li className="tab-list-container">
      <button
        type="button"
        className={`button ${buttonColor}`}
        onClick={onClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
