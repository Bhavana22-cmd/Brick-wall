import React from 'react';
import Brick from '../Brick/brick.js';
import './style.css';
class Wall extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            bricks:[1,2,3,4]
        }
    }

    addMoreBricks = () =>{
        const newBricks=[...this.state.bricks];
        newBricks.push(newBricks.length+1);
       this.setState({
    bricks:newBricks
       })
    };

    removeBricks = () =>{
        const updateBricks=[...this.state.bricks];
        updateBricks.pop();
        this.setState({
            bricks:updateBricks
        })
    };

    
    // @override method
    //arrow function
    render = () => {
             return(
                  <div className="wall-container">
                      {
                          this.state.bricks.map((brick) => {return <Brick key={brick} name={brick}/>;}
                          )
                      }
                       
                       <button className="btn" onClick={this.addMoreBricks}>+</button>
                       <button className="btn1" onClick={this.removeBricks}>-</button>
                      
                      </div>
                    );
             
    }
}

export default Wall;