import React from 'react';

class BlockClass extends React.Component{
    render(){
        console.log(this.props.color);
        let color = this.props.color
        return (
        <>
            <h2>this is my slidBar</h2>
            <h3 style = {{color:color}}> your colour is {this.props.color} </h3>

            </>
        )
    }
}
export default BlockClass;