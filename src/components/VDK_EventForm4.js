import React, { Component } from 'react'

export default class VDK_EventForm4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"duc khoa"
        }
    }
    handleGetName =()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>
            lay du lieu tu props
        </h2>
        <button onClick={this.handleGetName}>lay ten</button>
        <h2>welcone to,{this.state.name}</h2>
      </div>
    )
  }
}
