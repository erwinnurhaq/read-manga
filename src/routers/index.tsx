import { BrowserRouter, NavLink, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/view">View</NavLink>
        </li>
        <li>
          <NavLink to="/follows">Follows</NavLink>
        </li>
      </ul>
      <Route exact path="/" component={() => <div>Home</div>} />
      <Route
        exact
        path="/view"
        component={() => (
          <div>
            <p>View</p>
          </div>
        )}
      />
      <Route
        exact
        path="/follows"
        component={() => (
          <div>
            <p>Follows</p>
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
