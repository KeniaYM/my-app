import React, { Component } from "react";

class PrimerComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  render() {
    return (
      <>
        <p>Hola mundo desde Primer Componente</p>
      </>
    );
  }
}

export default PrimerComponente;
