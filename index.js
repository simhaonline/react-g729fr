import React, { Component } from 'react';
import { render } from 'react-dom';

import './index.css';

class App extends Component {
  render() {
    return (
      <div>
       <table>
       <th class="ff"><h1 class="l" > your logo  </h1> </th>
        <th class="q">  </th>
          <th  > 
          <th><h1 class="l" >  home</h1>      </th>
          <th><h1 class="l"> about</h1>      </th>
          <th><h1 class="l"> servicing</h1>  </th>
            <th><h1 class="l" > portollo</h1>  </th>
             <th><h1 class="l" > blog</h1>  </th>
              <th><h1 class="l" > contact us</h1> </th> </th>
         
       </table>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
