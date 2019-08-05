import React from 'react';
import { relative } from 'path';
const About = () =>{
    return(
     <section id="about">
         <div className="container">
            <h2>About Me</h2> 
             <div className="row">
                <div className="col-sm-3 m-3">
                    <img src="images/portfolio_pic.jpg" className="rounded-circle " style={{position:relative,width:'120px',height:'120px'}} alt=""/>   
                </div>
                <div className ="col-8">
                    <p>Id esse ad adipisicing Lorem. Veniam quis excepteur duis ipsum. In ullamco amet cillum ex irure cillum laborum. Officia officia exercitation proident do et. Eiusmod consectetur occaecat ut reprehenderit occaecat reprehenderit excepteur qui magna ex anim ut.</p>
                </div>
             </div>
             <div className="m-3">
             <h2>Skills</h2>
                
             </div>
             
         </div>
     </section>
    );
}
export default About;