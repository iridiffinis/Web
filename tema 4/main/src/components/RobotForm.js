import React, { Component } from 'react';

class RobotForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            type: '',
            mass:0
        }

        this.onAdd = ()=>{
            const {name, type, mass} = this.state;
            this.props.onAdd({
                name: name,
                type: type,
                mass: mass
            })
        }
    }
    render(){
        const {name, type, mass} = this.state;
        return(
            <div>
                <imput id="name" type="text" placeholder="name" onChange={e => this.handleChange(e,'name')}/>
                <imput id="type" type="text" placeholder="type" onChange={e => this.handleChange(e,'type')}/>
                <imput id="mass" type="text" placeholder="mass" onChange={e => this.handleChange(e,'mass')}/>
                <input id="add" value="add" type="button" onClick={this.onAdd}/>
            </div>
        );
    }
    handleChange(e,id){
        this.setState({
            [id]: e.target.value
        });
    }
}

export default RobotForm;
