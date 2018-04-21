import React,{ Component } from 'react';
import './input.css';

class Input extends Component{
    handleKeyup(event){
        var val = event.keyCode;
        //换行
        if (val && val === 13)
        {
            if (event.target.value && event.target.value !== ' ' ){
                this.props.onChange(event.target.value);
                event.target.value = '';
            }
        }
    }
    componentDidMount(){
        this.input.focus();
    }
    render(){
        return (
            <div className="input-container">
                <input onKeyUp={this.handleKeyup.bind(this)} ref={(input) => this.input = input}/>
            </div>
        )
    }
}

export default Input;
