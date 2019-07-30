import TweenMax from 'gsap';
// import { TweenMax } from 'react-gsap';
import React from 'react'
import '../Intro/Intro.css';



class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.introElement = null;//reference to the DOM node
        this.introTween = null; //reference to the animation    
    }



    componentDidMount(i) {
        const random = (min, max) => {
            return (
                (Math.random() * (max - min)) + min
            );
        }
        this.introTween = TweenMax.to(this.introElement, 2.5, {
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
                    <p ref={div => this.introElement = div}>Hi I'm Jamie</p>
                </div>
            </div>
        );
    }
}
export default Intro;