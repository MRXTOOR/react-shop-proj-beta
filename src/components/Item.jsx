import React, { Component } from 'react'
import AddIcon from '@mui/icons-material/Add';
export class Item extends Component {
  render() {
    return (
      <div className='item'>
       <img src={this.props.items.img} />
        <h2>{this.props.items.title}</h2>
        
        <p>{this.props.items.desc}</p>
        <div className='price'>
        <b>{this.props.items.price}$</b>
        </div>
        <div >
           <AddIcon className='added'/>
            </div>
      </div>
    )
  }
}

export default Item