import './Login.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {SectioWrapper,PrimaryButtons,Text} from '../..//components/index'

function Login() {
  return (  
    <>
    <SectioWrapper>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>عنوان البريد الإلكتروني</Form.Label>
        <Form.Control type="email" placeholder="أدخل البريد الإلكتروني" style={{ textAlign: "right"}}/>
        <Form.Text className="text-muted">
        لن نشارك بريدك الإلكتروني أبدًا مع أي شخص آخر
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>كلمة المرور</Form.Label>
        <Form.Control type="password" placeholder="كلمة المرور" style={{ textAlign: "right"}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Link to="/confirmpasswordpage"> 
      <Text href="#" className="text-muted2">
    نسيت كلمة المرور؟
    </Text>
    </Link>
    </Form.Group>
    </Form>
    <div style={{ display: "flex", justifyContent: "center", gap: "100px",marginTop:'72px', textAlign: "right"}} dir="rtl">
      <Link to="/">
        <PrimaryButtons controlId="loginButton" >تسجيل الدخول</PrimaryButtons>
      </Link>
      </div>
    </SectioWrapper>
    </>
  );
}
export default Login;