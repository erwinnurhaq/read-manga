import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { GlobalContextProvider } from '../context';

import MainLayout from '../layouts/MainLayout';
import Bookmark from '../pages/Bookmark';
import Home from '../pages/Home';
import Manga from '../pages/Manga';

const App = () => (
  <GlobalContextProvider>
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
      <MainLayout>
        <Route exact path="/" component={Home} />
        <Route exact path="/manga/:mangaId" component={Manga} />
        <Route exact path="/bookmark" component={Bookmark} />
      </MainLayout>
    </BrowserRouter>
  </GlobalContextProvider>
);

export default App;
