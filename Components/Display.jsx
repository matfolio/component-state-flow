import React from 'react';

class Display extends React.Component {
	constructor(){
		super();
		this.state ={
			content : ''  // this should be set to empty value at first
		}
	}
	// Control what to display using this Hook.
	// to avoid error. there is a possibility 
	// to get value undefined when setting 
	// this component state with passed props.
	// -----Take note of this -----
	componentWillMount(){
		//console.log()
		this.setState({content:this.props.content.features})
	}
	componentDidMount(){
		if(this.state.content.displayComponent === 'Display'){
			this.aware =setInterval( () => {
         		this.fromTime() 
         	    },1000 );
		}
      
   }
   componentWillUnmount(){
      clearInterval(this.aware);
   }

   fromTime(){
   		this.setState(function(prevState,props){
   			// obtain the previous date and time and assign a new one.
   			prevState.content.date = new Date().toDateString();
   			prevState.content.time = new Date().toLocaleTimeString();

   			// make the content be aware of the changes
   			return {
   				content: prevState.content
   			}
   		});
   }
    render() {
	   
      return (
         <div>
            <h1>{ this.state.content.time}</h1>
            <h3>{ this.state.content.date}</h3>
            <h2>{ this.state.content.country}</h2>

         </div>
      )
    }
}

export default Display;