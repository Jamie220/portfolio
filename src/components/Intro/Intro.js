import React from 'react';
import {TweenMax } from 'gsap/all';
import '../Intro/Intro.css';



class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.title = null;//reference to the DOM node
        this.titleChars = null; //reference to the animation    
    }



    componentDidMount(i) {
        // const mySplit = new SplitText(this.title,{
        //     type : "words, chars",
        //     position: "absolute"
        // });

        const random = (min, max) => {
            return (
                (Math.random() * (max - min)) + min
            );
        }
        const mySplit = this.title.split();        
        this.titleChars = mySplit.chars; // array of DOM elements
        TweenMax.staggerTo(this.titleChars, 2.5, {
            opacity: 0,
            x: random(-500, 500),
            y: random(-500, 500),
            z: random(-500, 500),
            scale: .1,
            delay: i * .02,
            yoyo: true,
            repeat: -1,
            repeatDelay: 10
        });
    }



    render() {
        return (
            <div>
                <div className="box" >
                    <p ref={div => this.titleChars = div}>Hi I'm Jamie</p>
                </div>
            </div>
        );
    }
}
export default Intro;