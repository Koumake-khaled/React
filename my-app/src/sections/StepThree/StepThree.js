import './StepThree.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {SectioWrapper,PrimaryButtons} from '../../components/index'
import Button from 'react-bootstrap/Button';

const StepThree = () => {
  return (
<>
<SectioWrapper>
<Form style={{ textAlign: "right"}} dir="rtl">
    <Form.Group className="mb-7" controlId="formBasicEmail"  >
    <Form.Label >اسم المنتج*</Form.Label>
    <Form.Control />
    <Form.Label >اسم المنتج*</Form.Label>
    <Form.Select aria-label="Default select example">
    <option>صنع حسب الطلب</option>
    <option value="1">2020-2023</option>
    <option value="2">2010-2019</option>
    <option value="1">قبل عام 2010</option>
    <option value="2">2000-2003</option>
    <option value="1">التسعينات</option>
    <option value="2">الثمانينات</option>
    </Form.Select>
    <Form.Label >الفئة*</Form.Label>
    <Form.Select aria-label="Default select example">
    <option value="1">مجوهرات </option>
    <option value="2">فن</option>
    <option value="1">ملابس</option>
    <option value="2">ديكورات منزل</option>
    <option value="1">حاجات الفرح</option>
    <option value="2">اللعاب</option>
    <option value="2">شموع</option>
    </Form.Select>
    <Form.Label >خيارات التجديد*</Form.Label>
    <Form.Select aria-label="Default select example">
    <option value="1">غير قابل للتجديد</option>
    <option value="2">قابل للتجديد</option>
    </Form.Select>
    <Form.Label >الوصف الموجز*</Form.Label>
    <Form.Control />
    <Form.Label>الوصف التفصيلي*</Form.Label>
    <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <Form.Label >المواد المستخدمة*</Form.Label>
    <Form.Control />
    </Form>
</SectioWrapper>
<SectioWrapper>
<Form style={{ textAlign: "right"}} dir="rtl">
<Form.Group className="mb-7" controlId="formBasicEmail"  >
<Form.Label >الصور*</Form.Label>
<Button style={{backgroundColor:'var(--color-dark)',color:'var(--color-darkest)',border:0,display: "flex", justifyContent: "center",}} >عرض جميع الصور</Button>

  </Form.Group>
  
</Form>
</SectioWrapper>
</>
  )
}

export default StepThree
