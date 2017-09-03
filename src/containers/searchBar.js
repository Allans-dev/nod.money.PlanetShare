import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange(event) {
        this.setState({ term: event.target.value });
  }
    
    onFormSubmit(event) {
        event.preventDefault();
        this.setState({ term: '' });
  }
    
    render(){
        return(
            <div className="searchBar">
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        placeholder="Search from 132 available planets"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <button type="submit">Search</button>
                </form>
                
            </div>
        );
    }
}

export default SearchBar;