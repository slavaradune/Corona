import React from 'react';
import '../App.css';

class TextFromFile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ''}
        this.readFromFile(this.props.file)
    }
    readFromFile(file) {
        let reader = new FileReader();
        reader.addEventListener("loadend", function() {
            this.setState({'text' : reader.result});
        });
        return reader.readAsText(file);
    }

    showFile = async (e, file) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            this.setState({'text' : e.target.result});
        };
        reader.readAsText(file)
    }

    render() {
        // let content = TextFromFile.readFromFile(this.props.file);
        return (
            <a>
                {this.state.text}
            </a>
        );
    }
}

export default TextFromFile;
