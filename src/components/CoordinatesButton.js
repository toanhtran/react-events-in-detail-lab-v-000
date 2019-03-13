import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(prop){
    super();
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    handleChange(event){
      this.setState({
        input:event.target.value
      });
    }
      render(){
        return(
          <button onCick={this.state.} />
        )
      }
    }
  }
}

export default CoordinatesButton;
