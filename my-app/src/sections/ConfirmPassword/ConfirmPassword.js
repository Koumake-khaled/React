import './ConfirmPassword.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {SectioWrapper,PrimaryButtons} from '../..//components/index'

const ConfirmPassword = () => {
  return (
<>
    <SectioWrapper>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>عنوان البريد الإلكتروني</Form.Label>
        <Form.Control type="email" placeholder="أدخل البريد الإلكتروني" style={{ textAlign: "right"}}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>كلمة المرور</Form.Label>
        <Form.Control type="password" placeholder="كلمة المرور" style={{ textAlign: "right"}} />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>تأكيد كلمة المرور</Form.Label>
        <Form.Control type="password" placeholder="كلمة المرور" style={{ textAlign: "right"}} />
      </Form.Group>
      <div style={{ display: "flex", justifyContent: "center", gap: "100px",marginTop:'72px', textAlign: "center"}} dir="rtl">
      <Link to="/">
        <PrimaryButtons controlId="loginButton" >تسجيل الدخول</PrimaryButtons>
      </Link>
      </div>
   

    </Form>
    </SectioWrapper>
    </>
  )
}

export default ConfirmPassword
