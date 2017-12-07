import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: null,
    };
    this.handleOnchange = this.handleOnchange.bind(this);
  }

  handleOnchange(event){
    this.setState({
      term: event.target.value

    });
  }
  
  render() {
    return(
      <div>
        <input value = {this.state.term} onChange={this.handleOnchange} /> <br />
        {/* <p>Value of input: {this.state.term}</p> */}
      </div>
    );
     
  }
}


export default SearchBar;
