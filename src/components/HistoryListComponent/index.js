// Class Component to do searches and delete
import {Component} from 'react'
import './index.css'
import IndividualListItem from '../IndividualListItem'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Palinode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryListComponent extends Component {
  state = {searchItem: '', historyList: initialHistoryList}

  onSearch = event => this.setState({searchItem: event.target.value})

  onDelete = id => {
    const {historyList} = this.state
    const deletedResults = historyList.filter(each => each.id !== id)
    return this.setState({historyList: deletedResults})
  }

  render() {
    const {searchItem, historyList} = this.state
    const searchResults = historyList.filter(
      each =>
        each.title.startsWith(searchItem) ||
        each.title.toLowerCase().startsWith(searchItem),
    )
    console.log(searchResults)
    const searchResultsLength = searchResults.length
    const search = () => {
      if (searchResultsLength === 0) {
        return false
      }
      return true
    }
    const booleanVal = search()
    return (
      <div>
        <div className="nav-bar">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="searchContainer">
            <div className="searchIcon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <div>
              <input
                type="search"
                placeholder="Search History"
                className="search"
                value={searchItem}
                onChange={this.onSearch}
              />
            </div>
          </div>
        </div>
        <div className="container">
          {booleanVal ? (
            <ul className="unordered-list">
              {searchResults.map(each => (
                <IndividualListItem
                  key={each.id}
                  id={each.id}
                  timeAccessed={each.timeAccessed}
                  logoUrl={each.logoUrl}
                  title={each.title}
                  domainUrl={each.domainUrl}
                  deleteHistory={this.onDelete}
                />
              ))}
            </ul>
          ) : (
            <p>There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default HistoryListComponent
