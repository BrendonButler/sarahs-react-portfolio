import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import './styles/pages.less';
import Social from './components/Social';
import { NotFound, ServerError } from './components/Errors';
import Navigation from './pages/Navigation';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import { useIsHomePage } from './hooks/SharedHooks';

const Header = function (props: { isNarrow: boolean }) {
  return (
      <header className={'app-header ' + (props.isNarrow ? 'narrow' : '')}>
        <Navigation />
      </header>
  );
}

const Content = function (props: { show: boolean }) {
  return (
      <main className={'app-content-pane ' + (props.show ? '' : 'hidden')}>
        <Switch>
          {/* Page routes */}
          <Route index path='/' element={null} />
          <Route path='works' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          {/* Error pages */}
          <Route path='/500' element={<ServerError />} />
          <Route path='*' element={<NotFound />} />
        </Switch>
      </main>
  )
}

function App() {
  const isHomePage = useIsHomePage();
  const [isNarrow, setIsNarrow] = React.useState<boolean>(!isHomePage);

  React.useEffect(() => {
    setIsNarrow(!isHomePage);
  }, [isHomePage]);

  return (
      <div className='app'>
        <Social isNarrow={isNarrow} />
        <Header isNarrow={isNarrow} />
        <Content show={isNarrow} />
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

export default App;