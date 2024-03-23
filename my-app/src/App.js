import {BrowserRouter as Router,Route,Routes }  from 'react-router-dom'
import './App.css'
import { Container } from './components/index'
import { Header,Footer } from './sections/index'
import {Home,SignUpPage,StepOnePage, StepTwoPage,StepThreePage,StepSixPage,LoginPage,ConfirmPasswordPage} from './Page/index'
import ShoppingCartProvider from './context/ShoppingCartContext'

const App = () => {
  return(
   <ShoppingCartProvider>
     <Router>
     <Header />
     <Container>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/signup' element={<SignUpPage/>}/>
     <Route path='/steponepage' element={<StepOnePage/>}/>
     <Route path='/steptwopage' element={<StepTwoPage/>}/>
     <Route path='/stepthreepage' element={<StepThreePage/>}/>
     <Route path='/loginpage' element={<LoginPage/>}/>
     <Route path='/confirmpasswordpage' element={<ConfirmPasswordPage/>}/>
     <Route path='/StepSixPage' element={<StepSixPage/>}/>
     </Routes>
     </Container>
     <Footer />
     </Router>  
     </ShoppingCartProvider>
  )
}
  export default App