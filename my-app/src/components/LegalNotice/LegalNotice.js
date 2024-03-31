
import './LegalNotice.css'

const LegalNotice = () => {
    return (
        <div className='legalnotice'>
            <h1 className='mainhead1' style={{color:"var(--color-darkest)",textAlign: "right", border: "5px solid var(--color-light)" ,marginBottom:"24px",borderRadius:"12px",padding:"24px"
  }} dir="rtl">إشعار قانوني</h1>

            <div className='legalnoticein'>
                <h2>1. شروط الاستخدام</h2>
          <p>
          عندما يتعلق الأمر بالتسجيل والحساب، يُطلب من جميع المستخدمين تسجيل حساب شخصي للوصول إلى المنصة واستخدامها. يتعين أن يكون كل حساب فرديًا وغير قابل للمشاركة مع الآخرين  .
          </p>
            </div>

            <div className='legalnoticein'>
                <h2>2. شروط الاستخدام</h2>
                <p>
                يجب أن يتمتع جميع المحتوى والمنتجات المعروضة على المنصة بطابع يدوي وأن تكون مصنوعة بواسطة أصحابها. على المستخدمين تقديم وصف دقيق للمنتجات وتوفير صور حقيقية لها لضمان مصداقية المنصة.
                </p>
            </div>

            <div className='legalnoticein'>
                <h2>3. شروط الاستخدام</h2>
                <p>
                يجب على جميع المستخدمين الالتزام بسلوك مشروع على المنصة، وعدم مخالفة القوانين أو القيام بأي أنشطة غير قانونية أو ضارة. يجب على المستخدمين احترام حقوق الملكية الفكرية للآخرين، وعدم استخدام محتوى الغير دون الحصول على إذن صريح.
                </p>
            </div>

            <div className='legalnoticein'>
                <h2>4. شروط الاستخدام</h2>
                <p>
                يجب أن يلتزم المنصة بحماية خصوصية المستخدمين والبيانات الشخصية التي يقدمونها.
يجب على المنصة عدم مشاركة أو بيع أو استخدام البيانات الشخصية للمستخدمين بدون إذن صريح منهم.                </p>
            </div>
        </div>
    )
}

export default LegalNotice