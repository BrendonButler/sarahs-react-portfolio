import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import './styles/pages.less';
import reportWebVitals from './reportWebVitals';
import Social from './components/Social';
import { NotFound, ServerError } from './components/Errors';
import Navigation from './pages/Navigation';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import { useIsHomePage } from './hooks/SharedHooks';

const Header: React.FC = () => {
  const isHomePage = useIsHomePage();

  return (
      <header className={"app-header " + (isHomePage ? "" : "narrow")}>
        <Navigation />
      </header>
  );
}

const Content = function () {
  const isHomePage = useIsHomePage();

  return (
      <Fragment>{!isHomePage && (
          <main className="app-content-pane">
            <Switch>
              {/* Page routes */}
              <Route index path="/" element={null} />
              <Route path="works" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              {/* Error pages */}
              <Route path="/500" element={<ServerError />} />
              <Route path='*' element={<NotFound />} />
            </Switch>
          </main>
      )}
      </Fragment>
  )
}

function App() {
  return (
      <div className="app">
        <Social />
        <Header />
        <Content />
      </div>
  );
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;