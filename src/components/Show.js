import React from 'react'
class Show extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            student : [{name : 'john', age :'18'},{name : 'elsa', age :'15'},
            {name : 'donald', age :'21'}]
        }
    }
    render(){
        
        return(
        <>
            <p> I know quite a few writers whose abandoned personal blogs are 
             in some dark corner of the Internet. These writers launched their blogs with joy
               , but their momentum fizzled because they found it too hard to keep coming up with inspiring topics. Don’t let this happen to you. Here are some great ways to choose a topic that will resonate with your audience.

            Pick something you’re passionate about.
             When you care about  , you’ll write about it 
              emotionally expressive way. </p> 

             <h2> {this.state.student.map(item=>item.name)}</h2>
              {this.state.student.map(item=>item.age)}
{this.state.student.filter(item => item.age>18).map(item=>(
    <h2>{item.name} {item.age}</h2>
))}

         </>   
        )
    }
}
export default Show;