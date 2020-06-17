import React, { Component } from "react";
import KidCard from "./kid/KidCard";
import "./Shack.css";
import UpdateCard from "./update/UpdateCard"
import FormCard from "./form/FormCard"

class Shack extends Component {
  render() {
    return (
      <div class="container-main">
        <div class="section-content">
        <h2>S.H.A.C.K.<br />
                   	 	<small>Stopping Hunger Among Community Kids</small>
                	</h2>
                	<address>
                    		Part of The Underprivileged Children Foundation
                    		<br />716 Lee Street East, Suite 201 Charleston, WV 25301, USA 
                            <br />Phone: 304-807-6227 
                	</address>
        </div>
        <div class="container-cards">
          <KidCard />
          <UpdateCard />
          <FormCard />
        </div>
      </div>
    );
  }
}

export default Shack;