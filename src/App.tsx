import { NavLink, Route, Routes } from 'react-router-dom';

import './App.scss';
import cn from 'classnames';
import { PeoplePage } from './Pages/PeoplePage';
import { HomePage } from './Pages/HomePage';
import { NotFoundPage } from './Pages/NotFoundPage';

export const App = () => (
  <div data-cy="app">
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={({ isActive }) => (
              cn('navbar-item', {
                'has-background-grey-lighter': isActive,
              })
            )}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => (
              cn('navbar-item', {
                'has-background-grey-lighter': isActive,
              })
            )}
            to="people"
          >
            People
          </NavLink>
        </div>
      </div>
    </nav>

    <main className="section">
      <div className="container">

        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="people"
            element={<PeoplePage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>

      </div>
    </main>
  </div>
);
