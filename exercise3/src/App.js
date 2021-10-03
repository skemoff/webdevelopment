import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      keyword: "",
    }
  }

  onSearchFieldChange = (event) => {
    this.setState({ keyword: event.target.value });
  }

  render()
  {
    let output =
      <>
        <div>
          Search <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.keyword }/>
        </div>
        <SearchView
          items={ this.state.items.filter((item) => item.name.includes(this.state.keyword)) }
          />
      </>
    return (
      <>
        { output }
      </>
    )
  }
}

export default App;