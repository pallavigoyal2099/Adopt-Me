import React from 'react';
import { Router,Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { render } from 'react-dom';

const App =() => {
return(
    <React.StrictMode>
    <div>
        <header>
        <Link to ="/">
        Adopt Me!
        </Link>
        </header>
    <Router>
  <SearchParams path="/" />
  <Details path="/details/:id" />
</Router>;
    </div>
    </React.StrictMode>
);
};
render(
    <App />,
    document.getElementById("root")
);