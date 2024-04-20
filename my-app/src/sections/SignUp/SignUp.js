import './SignUp.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import {SectioWrapper,PrimaryButtons,SecondaryButtons} from '../..//components/index'
function SignUp() {
  return (
    <>
       <SectioWrapper>
       <Form>
      <Row className="checkbox-label">
        <Col>
          <Form.Control placeholder="الاسم الأول" style={{ textAlign: "right"}} />
        </Col>
        <Col>
          <Form.Control placeholder="الاسم الأخير" style={{ textAlign: "right"}} />
        </Col>
      </Row>
      {/* ----------------------- */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>عنوان البريد الإلكتروني</Form.Label>
        <Form.Control type="email" placeholder="أدخل البريد الإلكتروني" style={{ textAlign: "right"}}/>
        <Form.Text className="text-muted" style={{color:"#f3ebeb"}}>
        لن نشارك بريدك الإلكتروني أبدًا مع أي شخص آخر
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>كلمة المرور</Form.Label>
        <Form.Control type="password" placeholder="كلمة المرور" style={{ textAlign: "right", marginBottom:"16px"}} />
        <Form.Label>تأكيد كلمة المرور</Form.Label>
        <Form.Control type="password" placeholder="تأكيد كلمة المرور" style={{ textAlign: "right"}} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Col xs="auto">
  <div className="checkbox-label">
    <Form.Check
      type="checkbox"
      id="autoSizingCheck"
      className="mb-2"
    />
    <Form.Check.Label htmlFor="autoSizingCheck" className="label-text">
      بالتسجيل فأنا أوافق على سياسات المنصة
    </Form.Check.Label>
  </div>
</Col>
      <Form.Group className="mb-3">   
       </Form.Group>
       <div style={{ display: "flex", justifyContent: "center", gap: "100px",marginTop:'72px', textAlign: "center"}} dir="rtl">

<Link to="/">
  <PrimaryButtons controlId="loginButton">إنشاء حساب</PrimaryButtons>
</Link>
</div>
    </Form>
       </SectioWrapper>
    </>
  )
}

export default SignUp