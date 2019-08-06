import React, { Component } from 'react';
 class Footer extends Component {
  render() {
    let myInformation = this.props.myInformation;
    return (
      <footer className="container">
      <div className="row">
        <div className="col-sm-3 m-3">
          <ul className="list-unstyled">
            {
              myInformation.socialLinks && myInformation.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          </div>
          </div>
    </footer>
    );
        }
    }
    export default Footer