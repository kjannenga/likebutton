import React from 'react';
import './index.css'


export default React.createClass({
  getInitialState: function(){
    return{
      qty: 0,
      pi: 'likebtn'
    }
  },
  liker: function(){
    this.setState({
      qty: this.state.qty + 1,
      pi: 'btnclick'

    })

    setTimeout (function(){
    this.setState({
      pi: 'likebtn'
    })

  }.bind(this), 100)
    
  },
  

  render: function (){
    return (
      <div>
        <button id="like" onClick={this.liker} className={this.state.pi}>{this.state.qty} {this.state.qty === 1 ? ' like' : ' likes' }</button>
      </div>
    )
  }
})
