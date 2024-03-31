import './StepThree.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {SectioWrapper,PrimaryButtons,SecondaryButtons} from '../../components/index'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { IoMdCamera } from 'react-icons/io';
import { TbCone2 , TbCone} from "react-icons/tb";

const StepThree = () => {
  const [images, setImages] = useState(Array(3).fill(null));

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    const updatedImages = [...images];
    updatedImages[index] = URL.createObjectURL(file);
    setImages(updatedImages);
  };

  const icons = [IoMdCamera, TbCone2, TbCone];
  const showAllImages = () => {
    // console.log(images);
   }
  //  ====switch

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
<>
<SectioWrapper style={{ textAlign: "right"}} dir="rtl">
<Form style={{ textAlign: "right", border: "5px solid var(--color-light)" ,marginBottom:"24px",borderRadius:"12px",padding:"24px"
}} dir="rtl">
  <Form.Group className="mb-7" controlId="formBasicEmail">
    <Form.Label>اسم المنتج*</Form.Label>
    <Form.Control    />
    <Form.Label>حول هذا المنتج*</Form.Label>
    <Form.Select    aria-label="Default select example">
      <option>صنع حسب الطلب</option>
      <option value="1">2020-2023</option>
      <option value="2">2010-2019</option>
      <option value="1">قبل عام 2010</option>
      <option value="2">2000-2003</option>
      <option value="1">التسعينات</option>
      <option value="2">الثمانينات</option>
    </Form.Select>
    <Form.Label>الفئة*</Form.Label>
    <Form.Select    aria-label="Default select example">
      <option value="1">مجوهرات</option>
      <option value="2">فن</option>
      <option value="1">ملابس</option>
      <option value="2">ديكورات منزل</option>
      <option value="1">حاجات الفرح</option>
      <option value="2">اللعاب</option>
      <option value="2">شموع</option>
    </Form.Select>
    <Form.Label>خيارات التجديد*</Form.Label>
    <Form.Select    
     aria-label="Default select example">
      <option value="1">غير قابل للتجديد</option>
      <option value="2">قابل للتجديد</option>
    </Form.Select>
    <Form.Label>الوصف الموجز*</Form.Label>
    <Form.Control     />
    <Form.Label>الوصف التفصيلي*</Form.Label>
    <Form.Control as="textarea" rows={3}   />
  </Form.Group>
  <Form.Label>المواد المستخدمة*</Form.Label>
  <Form.Control    />
</Form>
{/* ======== */}
<Form style={{ textAlign: "right", border: "5px solid var(--color-light)",marginBottom:"24px",borderRadius:"12px",padding:"24px" }} dir="rtl">
  <Form.Group className="mb-7" controlId="formBasicEmail">
    <Form.Label>الصور*</Form.Label>
    {/* ======== */}
    <div>
      <div style={{ display: 'flex' }}>
        {images.map((selectedImage, index) => {
          const Icon = icons[index];
          return (
            <div
              key={index}
              style={{
                width: '150px',
                height: '150px',
                border: '2px solid var(--color-light)',
                borderRadius: '12px',
                position: 'relative',
                marginRight: '20px', // للتحريك إلى اليمين
              }}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected Image"
                  style={{ width: '100%', height: '100%', border: '2px solid var(--color-light)', borderRadius: '12px' }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={() => document.getElementById(`imageInput-${index}`).click()}
                >
                  <Icon size={50} />
                </div>
              )}
              <input
                id={`imageInput-${index}`}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(event) => handleImageChange(event, index)}
              />
            </div>
          );
        })}
      </div>

    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px'}}>
          <Button style={{ border: '0', backgroundColor: 'var(--color-primary)' }} onClick={showAllImages}>
             عرض جميع الصور 
          </Button>
        </div>
  </Form.Group>
</Form>
{/* ===== */}
<Form style={{ textAlign: "right", border: "5px solid var(--color-light)" ,marginBottom:"24px",borderRadius:"12px",padding:"24px"
}} dir="rtl">

  <Form.Label>السعر*</Form.Label>
  <Form.Control
            type="text"
            placeholder="ريال يمني"
            style={{ width: '200px' }} // تم تعيين ارتفاع أقل هنا
          />
          <Form.Label>الكمية*</Form.Label>
  <Form.Control
            type="text"
            style={{ width: '200px' }} // تم تعيين ارتفاع أقل هنا
          />
          <Form.Label>SKU*</Form.Label>
  <Form.Control
            type="text"
            placeholder="12345A"
            style={{ width: '200px' }} // تم تعيين ارتفاع أقل هنا
          />
</Form>
{/* ============== */}
<Form style={{ textAlign: "right", border: "5px solid var(--color-light)" ,marginBottom:"24px",borderRadius:"12px",padding:"24px"
}} dir="rtl">
    <div>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="سياسة الإستبدال والاسترجاع"
        checked={isChecked}
        onChange={handleChange}
        style={{ marginBottom: "16px" }}
      />

      {isChecked && (
        ['checkbox'].map((type) => (
          <div key={`reverse-${type}`} className="mb-3">
            <Form.Check
              reverse
              label="شحن مجاني للطلبات التي تزيد عن عشرة ألف ريال يمني"
              name="group1"
              type={type}
              id={`reverse-${type}-1`}
            />
            <Form.Check
              reverse
              label="الاستبدال والإسترجاع خلال 24 ساعة"
              name="group1"
              type={type}
              id={`reverse-${type}-2`}
            />
          </div>
        ))
      )}
    </div>
</Form>
<div style={{ display: "flex", justifyContent: "center", gap: "100px",marginTop:'72px', textAlign: "right"}} dir="rtl">
    <Link to="/user/:activepage">
    <PrimaryButtons>المتابعة</PrimaryButtons></Link>
    <Link to="/steptwopage">
      <SecondaryButtons>السابق</SecondaryButtons>
    </Link>
    </div>
</SectioWrapper>
</>
  )
}

export default StepThree
