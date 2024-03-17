import './StepOne.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {SectioWrapper,PrimaryButtons,SecondaryButtons} from '../../components/index'
const StepOne = () => {
  return (
    <>
    <SectioWrapper>
    <Form style={{ textAlign: "right"}} dir="rtl">
    <Form.Group className="mb-5" controlId="formBasicEmail"  >
    <Form.Label>اسم المتجر</Form.Label>
    <Form.Control placeholder="اسم المتجر"/>
    </Form.Group>
    <Form.Group className="mb-5" controlId="formBasicEmail">
    <Form.Label>لغة المتجر</Form.Label>
    <Form.Select aria-label="Default select example">
  <option value="1">عربي</option>
  <option value="2">إنجليزي</option>
</Form.Select>
    </Form.Group>
    <Form.Group className="mb-5" controlId="formBasicEmail">
    <Form.Label>العملة الأساسية</Form.Label>
    <Form.Select aria-label="Default select example">
  <option value="1">ريال يمني قديم</option>
  <option value="2">ريال يمني جديد</option>
  <option value="1">ريال سعودي</option>
  <option value="2">دولار</option>
</Form.Select>
    </Form.Group>
    <div style={{ display: "flex", justifyContent: "center", gap: "100px" }}>
    <Link to="/steptwopage">
  <PrimaryButtons>الحفظ والمتابعة</PrimaryButtons></Link>
</div>
    </Form>
    </SectioWrapper>
    </>
  )
}

export default StepOne
