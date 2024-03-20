import {BrowserRouter as Router,Route,Routes }  from 'react-router-dom'
import './App.css'
import { Container } from './components/index'
import { Header,Footer } from './sections/index'
import {Home,Profile,SignUpPage,StepOnePage, StepTwoPage,StepThreePage} from './Page/index'
import ShoppingCartProvider from './context/ShoppingCartContext'

const App = () => {
  return(
   <ShoppingCartProvider>
     <Router>
     <Header />
     <Container>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/profile' element={<Profile/>}/>
     <Route path='/signup' element={<SignUpPage/>}/>
     <Route path='/steponepage' element={<StepOnePage/>}/>
     <Route path='/steptwopage' element={<StepTwoPage/>}/>
     <Route path='/stepthreepage' element={<StepThreePage/>}/>
     </Routes>
     </Container>
     <Footer />
     </Router>  
     </ShoppingCartProvider>
  )
}
  export default App