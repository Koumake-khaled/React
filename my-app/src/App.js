import {BrowserRouter as Router,Route,Routes }  from 'react-router-dom'
import './App.css'
import { Container } from './components/index'
import { Header,Footer } from './sections/index'
import {Home,Profile,SignUpPage,StepOnePage, StepTwoPage} from './Page/index'

const App = () => {
  return(
    <>
     <Router>
     <Header />
     <Container>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/profile' element={<Profile/>}/>
     <Route path='/signup' element={<SignUpPage/>}/>
     <Route path='/steponepage' element={<StepOnePage/>}/>
     <Route path='/steptwopage' element={<StepTwoPage/>}/>
     </Routes>
     </Container>
     <Footer />
     </Router>  
    </>
  )
}
  export default App