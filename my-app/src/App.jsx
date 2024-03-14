import {BrowserRouter as Router,Route,Routes }  from 'react-router-dom'
import './App.css'

import { Container } from './components/index'
import { Header,Footer } from './sections/index'
import {Home,Profile,SignUpPage,OpinionPage} from './Page/index'
import { useEffect, useState } from "react";


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return(
    <>
     <Router>
     <Header />
     <Container>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/profile' element={<Profile/>}/>
     <Route path='/signup' element={<SignUpPage/>}/>
     <Route path='/opinin' element={<OpinionPage/>}/>
     </Routes>
     </Container>
     <Footer />
     </Router>  
     {/* <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter> */}
    </>
  )
}
  export default App