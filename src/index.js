import React from "react";
import { render } from "react-dom";
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import "./styles.css";

// Components.
import Home from 'src/sections/Home';
import PreviewMe from 'src/sections/PreviewMe';

function Demo() {
  return (
    <div>
      <HashRouter>
        <div className="PageContainer">
          <Route exact path="/" component={ Home } />
          <Route exact path="/preview-me" component={ PreviewMe } />
        </div>
      </HashRouter>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
