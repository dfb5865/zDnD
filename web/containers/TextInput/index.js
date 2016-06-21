import React from 'react';

export class TextInput extends React.Component {
	handleClick() {
		console.log('hi');
	}

    render() {
    	var myName = 'adadaadadadad';

        return (
            <div>
                <input type="text"></input>
                <button onClick={this.handleClick}>{myName}</button>
            </div>
        );
    }
}

export default TextInput;
