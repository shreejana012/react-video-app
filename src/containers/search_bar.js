import React, { Component } from 'react';

const divStyle = {
  marginTop:'30px',
  marginBottom: '20px',
  width: '64%',
  marginLeft: '15px',
}
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.handleOnchange = this.handleOnchange.bind(this);
  }

  handleOnchange(term){
    this.setState({term});
    this.props.onSelectTermChange(term);
  }
  
  render() {
    return(
        <div>
          <input style={divStyle} value = {this.state.term} onChange={event => this.handleOnchange(event.target.value)} placeholder= "Search.."/> <br />
          {/* <p>Value of input: {this.state.term}</p> */}
        </div>
    );
     
  }
}
export default SearchBar;
