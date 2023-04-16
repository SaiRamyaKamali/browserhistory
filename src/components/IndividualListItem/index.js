/* eslint-disable react/button-has-type */
// functional Component
import './index.css'

const IndividualListItem = props => {
  const {id, timeAccessed, logoUrl, title, domainUrl, deleteHistory} = props
  const onDeleteHistory = () => {
    deleteHistory(id)
  }
  return (
    <li>
      <div className="bg-container">
        <p>{timeAccessed}</p>
        <div className="logo-container">
          <div className="logos">
            <img src={logoUrl} alt="domain logo" className="image" />
            <p className="title">{title}</p>
            <p className="domain-class">{domainUrl}</p>
          </div>
          <button
            className="delete-btn"
            onClick={onDeleteHistory}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default IndividualListItem
