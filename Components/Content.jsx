import React from 'react';
import Display from './Display.jsx';

class Content extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			features : this.props.features
		}
	}
	
   render() {
      return (
         <div style={styles.div}>
            <h1 style={styles.display}><Display  content={this.state}/></h1>
         </div>
      )
   }
}
const styles = {
	div: {
		padding: 100,
        textAlign: 'center'
		
	},
	display: {
		display: 'inline-block',
		backgroundColor: 'blue',
		height:250,
		color:'white',
        padding: 50,
        borderRadius:20,
        MozBoxShadow:'5px 5px 3px #6f856f',
        boxShadow:'5px 5px 3px #6f856f'
	}

}
export default Content;