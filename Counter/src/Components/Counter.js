import React, { Component } from 'react'

class Counter extends Component {
      constructor(){
            super()
            this.state={
                  count:0
            }
      }
	  increment(){
		  this.setState({
			  count:this.state.count+1
		  })
		  if(this.state.count==10){
			this.setState({
				count:0
			})
		  }
	  }
      render() {
            return (
                  <div>
                        <h1>Counter - {this.state.count}</h1>
                        <button onClick ={()=> this.increment()}>Increment</button>
                  </div>

            )	
      }
}

export default Counter
