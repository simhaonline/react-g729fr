import React, { Component } from 'react';
import { render } from 'react-dom';

import './index.css';
class App1 extends Component {
  render() {
    return (
       <div>
<table class="fonn">
<tr> <table class="text">
       <th class="ff"><h1 class="l" > your logo  </h1> </th>
          <th  class="ltetx" > 
          <th><h1 class="l" >  home </h1>      </th>
          <th><h1 class="l"> about</h1>      </th>
          <th><h1 class="l"> servicing</h1>  </th>
          <th><h1 class="l" > portollo</h1>  </th>
           <th><h1 class="l" > blog</h1>  </th>
           <th><h1 class="l" > contact us</h1> </th> 
           </th>
         
       </table>
</tr>
<tr> <img src="https://cdn.jsdelivr.net/gh/ivanpirat/react-g729fr@master/fon.jpg" /></tr>
 </table>
  <table class="v">>
    <tr > <h1  class="v1"  >Web development project</h1 ></tr> 
      <tr >  <h1 class="v2"  >very sultable to support all web development projects</h1>  </tr> 
    </table>
  
 </div>
 
    )
 }
}

render(<App1 />, document.getElementById('root'));
