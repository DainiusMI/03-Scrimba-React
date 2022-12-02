import React from "react";
import memeData from "../memesData"

export default class Meme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topInput: "TOP TEXT",
            bottomInput: "BOTTOM TEXT",
            memeURL: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleMeme = this.handleMeme.bind(this);
    }
    handleChange(event) {
        if (event.target.id === "input-top") {
            this.setState({
                topInput: event.target.value
            })
        }
        else {
            this.setState({
                bottom: event.target.value
            })
        }
    }
    handleMeme() {
        const randomURL = memeData.data.memes[ Math.floor( Math.random() * memeData.data.memes.length ) ].url;
        this.setState({
            memeURL: randomURL
        })
    }
    render() {
        return (
            <main className="meme">
                <div action="" className="meme-form">
                    <input 
                        id="input-top"
                        className="meme-input"
                        onChange={this.handleChange}
                        type="text"                        
                    />
                    <input 
                        id="input-bottom"
                        className="meme-input" 
                        onChange={this.handleChange}
                        type="text"
                    />
                    <input 
                        className="meme-btn" 
                        type="submit" 
                        value="Get a new meme image 🖼" 
                        onClick={this.handleMeme}
                    />
                </div>
                <div className="meme-result">
                    <img className="meme-img" src={this.state.memeURL} alt="" />
                    <p className="meme-text">{this.state.topInput}</p>
                    <p className="meme-text">{this.state.bottomInput}</p>
                </div>
            </main>
        )
    }
}