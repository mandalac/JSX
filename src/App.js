import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (            
              <>
              <div className = "container, w-50 p-3">
                <div className="jumbotron" >
                  <h1 className="text-primary" color="red">Hello Dojo!</h1>
                  <h3 className="text-info">Things I need to do :</h3><br/>
                    <ul className="text-success">* Learn React</ul>
                    <ul className="text-secondary">* Climb Mt Everest</ul>
                    <ul className="text-danger">* Run a marathon</ul>
                    <ul className="text-warning">* Feed the dogs</ul>
                </div>
              </div>  
              </>
          );
      }
  }
  export default App;

