import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      one : 0,
      two :0,
      three :0,
      four: 0,
      five: 0,
      six: 0,
      total:0,
      discount:0

    };
  }

  handleOne = (event) => {
      this.setState ({
        one : Number(event.target.value)
      })
    }
  handleTwo = (event) => {
      this.setState ({
        two : Number(event.target.value)
      })
    }
  handleThree = (event) => {
      this.setState ({
        three : Number(event.target.value)
      })
    }

  handleFour = (event) => {
      this.setState ({
        four : Number(event.target.value)
      })
    }
  handleFive = (event) => {
      this.setState ({
        five : Number(event.target.value)
      })
    }

  handleSix = (event) => {
      this.setState ({
        six : Number(event.target.value)
      })
    }

    handleDiscount = (event) => {
      this.setState ({
        discount : Number(event.target.value)
      })
    }

    addAction =(event)=> {
    let x = this.state.one*40+this.state.two*30+this.state.three*65+this.state.four*20+this.state.five*45+this.state.six*5
    let y = this.state.discount*x/100
    let z = x-y
    this.setState({result: z })
    this.setState({less: y })

  }


  render() {
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Items</th>
              <th>Price</th>
              <th>Required Number</th>
              <th>Total price</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mushroom</td>
              <td>40</td>
              <td> <input  type="number" onChange={this.handleOne}/> </td>
              <td> {this.state.one*40} </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Tomato</td>
              <td>30</td>
              <td> <input  type="number" onChange={this.handleTwo}/> </td>
              <td> {this.state.two*30} </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Onion</td>
              <td>65</td>
              <td> <input  type="number" onChange={this.handleThree}/> </td>
              <td> {this.state.three*65} </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Chili</td>
              <td>20</td>
              <td> <input  type="number" onChange={this.handleFour}/> </td>
              <td> {this.state.four*20} </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Potato</td>
              <td>45</td>
              <td> <input  type="number" onChange={this.handleFive}/> </td>
              <td> {this.state.five*45} </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Egg</td>
              <td>5/piece</td>
              <td> <input  type="number" onChange={this.handleSix}/> </td>
              <td> {this.state.six*5} </td>
            </tr>

            <tr>
              <td colSpan="4">Total price :</td>
              <td>{this.state.one*40+this.state.two*30+this.state.three*65+this.state.four*20+this.state.five*45+this.state.six*5}</td>
            </tr>

          </tbody>
        </Table>

        <label> Discount Percentage </label> <span/>
        <input type="number" onChange={this.handleDiscount} maxlength={50}  placeholder="Enter Between 0 to 50"/>

        <br/>
        <br/>

        <h3>Total Discount Amount is: 
         <input type="button" onClick={this.addAction} value="Click here"/>
          <input type='text' value={this.state.less} readOnly/> </h3>
          <br/>
 
        <h3>Total Price to be Paid after Discount is : 
         <input type="button" onClick={this.addAction} value="Click here"/>
          <input type='text' value={this.state.result} readOnly/> </h3>

          
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
