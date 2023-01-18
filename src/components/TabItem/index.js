/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-unused-vars */
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab} = props
  const {tabId, displayText} = tabDetails
  // eslint-disable-next-line no-undef
  const onUpdateActiveId = () => {
    updateActiveTab(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={onUpdateActiveId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
