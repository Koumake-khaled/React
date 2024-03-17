import './StepTwo.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {SectioWrapper} from '../../components/index'
import {Wedding} from '../../aasets/imgase/Wedding.jpg'
const StepTwo = () => {
  return (
    <>
    <SectioWrapper>
    <Form style={{ textAlign: "right"}} dir="rtl">
      
    <Form.Group className="mb-5" controlId="formBasicEmail"  >
    <Form.Label>فئة المتجر</Form.Label>
    <Form.Select aria-label="Default select example">
    <option>تحديد الكل</option>
    <option value="1">مجوهرات </option>
    <option value="2">فن</option>
    <option value="1">ملابس</option>
    <option value="2">ديكورات منزل</option>
    <option value="1">حاجات الفرح</option>
    <option value="2">اللعاب</option>
    <option value="2">شموع</option>
</Form.Select>
    </Form.Group>
    <Form.Group className="mb-5" controlId="formBasicEmail"  >
    <Form.Label >حدد موقع استلام الشحنات</Form.Label>
    <br />
    <Form.Text className="text-muted">
        يرجى التأكد من صحة الموقع المحدد ليتمكن مندوبي شركات الشحن الوصول له بسهولة
        </Form.Text>
        <br />
    </Form.Group>
    <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
    <Form.Label>أضف وصفا لمتجرك(اختياري)</Form.Label>
    <Form.Control as="textarea" rows={3} />
      </Form.Group>
    <Form.Group className="mb-" controlId="formBasicstep2"  >
    <Form.Label>عنوان المتجر*</Form.Label>
    <Form.Control/>
    <Form.Label >الحي*</Form.Label>
    <Form.Control />
    <Form.Label>الشارع*</Form.Label>
    <Form.Control/>
    </Form.Group>
    
    </Form>
    </SectioWrapper>
    </>
  )
}

export default StepTwo
