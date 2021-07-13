import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import { Home } from './pages/Home/Home';
import News from './pages/News/News';
import HomeTemplate from './templates/HomepageTemp/HomeTemplate';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Loading from './components/GlobalSetting/Loadding/Loading';
import FilmDetail from './pages/FilmDetail/FilmDetail';
import CheckOutTemp from './templates/CheckOutTemp/CheckOutTemp';
import CheckOut from './pages/CheckOut/CheckOut';
import UserTemp from './templates/UserTemp/UserTemp';
export const history = createBrowserHistory();
function App() {
  return (
    <>
      {/* <Loading /> */}
      <Router history={history}>
        <Switch>
          <HomeTemplate path='/contact' exact Component={Contact} />
          <HomeTemplate path='/news' exact Component={News} />
          <HomeTemplate path='/home' exact Component={Home} />
          <HomeTemplate path='/filmdetail/:id' exact Component={FilmDetail} />
          <UserTemp path='/login' exact Component={Login} />
          <Route path='/signup' exact component={SignUp} />
          <CheckOutTemp path='/checkout/:id' exact Component={CheckOut} />
          <HomeTemplate path='/' exact Component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
