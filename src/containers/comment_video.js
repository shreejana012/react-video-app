import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateComment} from '../actions';
const formStyle = {
    marginTop: '15px',
    marginBottom: '50px',
}
const textareaStyle = {
    width: '700px',
}

class CommentVideo extends Component { 
    
    constructor(props){
        super(props);
        this.state = {
            comment: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    handleSubmit = (event) => {
        this.props.dispatch(updateComment(this.state.comment))
    }
    render(){
        return (
            <div style={formStyle}>
                <textarea style = {textareaStyle} type = "text" value= {this.state.value} onChange={this.handleChange}/><br />
                <button onClick= {() => this.handleSubmit()}>Comment</button><br />
                {this.props.comment}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comment: state.comment,
    }
}
export default connect(mapStateToProps)(CommentVideo);