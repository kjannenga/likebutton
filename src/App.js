import React from 'react';
import './index.css'


export default React.createClass({
  getInitialState: function(){
    return{
      qty: 0
    }
  },
  liker: function(){
    this.setState({
      qty: this.state.qty + 1
    })
  },
  render: function (){
    return (
      <div>
        <button id="like" onClick={this.liker} className="likebtn">{this.state.qty} {this.state.qty === 1 ? ' like' : ' likes' }</button>
      </div>
    )
  }
})
