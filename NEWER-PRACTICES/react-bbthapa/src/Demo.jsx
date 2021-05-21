//import React, { Component } from 'react';

//class Demo extends Component {
//  render() {
//    return (
//      <>
//        <h2>{this.props.name}</h2>
//        <h5>{this.props.address}</h5>
//      </>
//    )
//  }
//}
//export default Demo;

//***************************************** */
//function Demo({name}) {
//  return (
//    <>
//      <h2>{name}</h2>
//      {/*<h5>{props.address}</h5>*/}
//    </>
//  )
//}
//export default Demo;
//***************************************** */
function Demo(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <h5>{props.address}</h5>
    </>
  )
}
export default Demo;