import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/Content.jsx';
import Display from './components/Display.jsx';

class Main extends React.Component {
   constructor(){
      super();
      this.state ={
         displayComponent : 'Display',
         date: new Date().toDateString(),
         time: new Date().toLocaleTimeString(),
         country: 'Finland'
      }
   }
   
   render() {
      
      return (
         <div>
            <Content features={this.state}  />
         </div>
      )
   }
}

ReactDOM.render( <Main />, document.getElementById('app'))