import {BrowserRouter as Router,Route,Routes }  from 'react-router-dom'
import './App.css'
import { Container } from './components/index'
import { Header,Footer } from './sections/index'
import {Home,SignUpPage,StepOnePage, StepTwoPage,StepThreePage,Homes,ProductPage,About,Contact,
  StepSixPage,Login,Signup,ForgotPassword,Cart,UserProfile,PrivacyPolicy,StepFourPage,
  LoginPage,ConfirmPasswordPage,StepFivePage} from './Page/index'
import ShoppingCartProvider from './context/ShoppingCartContext'
// 
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
     <Route path='/stepsixpage' element={<StepSixPage/>}/>
     <Route path='/stepfourpage' element={<StepFourPage/>}/>
     <Route path='/stepfivepage' element={<StepFivePage/>}/>
    {/*  */}
     <Route path="/about" element={<About/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
     <Route path='/user/:activepage' element={<UserProfile/>} /> 
     <Route path="/product/:prodid" 
          element={
            <ProductPage/>
          }
        />
     </Routes>
     </Container>
     <Footer />
     </Router>  
     </ShoppingCartProvider>
  )
}
  export default App