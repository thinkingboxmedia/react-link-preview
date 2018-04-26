import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import "./styles.css";

// Components.
import Home from 'src/sections/Home';
import PreviewMe from 'src/sections/PreviewMe';

function Demo() {
  return (
    <div>
      <BrowserRouter>
        <div className="PageContainer">
          <Route exact path="/" component={ Home } />
          <Route exact path="/preview-me" component={ PreviewMe } />
        </div>
      </BrowserRouter>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
