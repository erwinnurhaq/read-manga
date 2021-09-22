import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Bookmark from '../pages/Bookmark';
import Home from '../pages/Home';
import Manga from '../pages/Manga';

const App = () => (
  <BrowserRouter>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/manga/asdf">Manga</NavLink>
      </li>
      <li>
        <NavLink to="/bookmark">Bookmark</NavLink>
      </li>
    </ul>
    <Route exact path="/" component={Home} />
    <Route exact path="/manga/:mangaId" component={Manga} />
    <Route exact path="/bookmark" component={Bookmark} />
  </BrowserRouter>
)

export default App;
