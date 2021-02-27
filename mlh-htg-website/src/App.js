import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import './App.scss'

import Dashboard from './js/dashboard/dashboard'
import Search from './js/search/search'
import Home from './js/home/home'
import About from './js/about/about'
import Login from './js/login/login'


function App() {

  return (
    <Router>
      <Switch>

        {routes.map((item, index) => (
          <Route key={index} path={item.to} >
            <>
              {item.component}
              {item.navbar && <NavBar />}
            </>
          </Route>
        ))}

      </Switch>
    </Router>
  );
}

export function CustomLink(props) {
  let history = useHistory();

  function handleClick() {
    history.push(props.to);
  }
  return (
    <div {...props}
      onClick={handleClick}
    >
      {props.children}
    </div>
  )
}

function NavBar() {

  return (

    <div className="nav-bar">
      {routes.map((item, index) => (
        item.navbar &&
        <CustomLink key={index} to={item.to} className="nav-item">
          {item.children && item.children}
        </CustomLink>

      ))}

    </div>
  )
}

const routes = [
  {
    to: '/login',
    children: <div className='nav-login'>LOGIN</div>,
    component: <Login />,
    navbar: true
  },
  {
    to: '/dashboard',
    children: <div className='nav-account'>ACCOUNT</div>,
    component: <Dashboard />,
    navbar: false
  }, {
    to: '/search',
    children: <div className='nav-search'>SEARCH</div>,
    component: <Search />,
    navbar: true
  }, {
    to: '/about',
    children: <div className='nav-about'>ABOUT US</div>,
    component: <About />,
    navbar: true
  }, {
    to: '/',
    children: (
      <div className='nav-about'>HOME</div>
    ),
    component: <Home />,
    navbar: true
  }
]

export default App;
