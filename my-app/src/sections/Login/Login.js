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
      <Text href="#" className="text-muted2">
    نسيت كلمة المرور؟
  </Text>
      </Form.Group>
      <Form.Group className="mb-3">
      <Link to="/signup">
        <PrimaryButtons controlId="loginButton">تسجيل الدخول</PrimaryButtons>
      </Link>
       </Form.Group>
    </Form>
    </SectioWrapper>
    </>
  );
}
export default Login;