import { Route } from 'react-router-dom';
import { Header } from './components/';
import { Home, Cart } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/Cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
