import React, { useEffect } from 'react'
import SingleBanner from '../../components/Banners/SingleBanner'
import './Extrapages.css'
import {SectioWrapper} from '../../components/index'
const Contact = () => {
    const [rating, setrating] = React.useState(0)

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
    return (
        <SectioWrapper>
        <div className='extrapage' style={{textAlign:"right", direction:"rtl"}}>
            <SingleBanner
                bannerimage='https://images.unsplash.com/photo-1606328252399-393f9bb6cad4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8'
                heading="تواصل معنا"
            />
            <div className='pgleft pgcommon'>
                <img src='https://images.unsplash.com/photo-1506287375451-bb850eba44d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpZnQlMjBoYW5kbWFkZXxlbnwwfHwwfHx8MA%3D%3D' alt='noimg' />

                <div>
                    <h1>قصتنا</h1>
                    <p> منصتنا الإلكترونية لأصحاب المشاريع اليدوية. نحن نهتم بتمكين أصحاب المشاريع اليدوية والحرفيين والمبدعين من عرض وبيع منتجاتهم عبر الإنترنت. نقدم منصة سهلة الاستخدام ومبتكرة تمكن الحرفيين من التركيز على إبداعاتهم ومشاريعهم والوصول إلى جمهور عالمي واسع 
     تأسست منصتنا لتوفير بيئة تجارية موثوقة وآمنة حيث يمكن لأصحاب المشاريع اليدوية عرض منتجاتهم وبيعها بسهولة. نحن نهدف إلى تعزيز الحرف التقليدية والمهارات اليدوية والمنتجات المصنوعة بحب واهتمام .من خلال استخدام منصتنا، يمكن لأصحاب المشاريع اليدوية بناء متجر إلكتروني فريد لعرض منتجاتهم والتواصل مع العملاء وتلقي الطلبات. نحن نوفر أدوات تسويقية وميزات إدارة المخزون والدفع الآمن وتتبع الشحنات والعديد من الوظائف الأخرى التي تساعد في نجاح أعمالهم.

                    </p>

                </div>
            </div>
            <div className='pgright pgcommon'>
                <img src='https://images.unsplash.com/photo-1609881583302-61548332039c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZG1hZGV8ZW58MHx8MHx8fDA%3D' alt='noimg' />

                <div>
                    <h1>من نحن</h1>
                    <p> نحن فريق متحمس وملتزم بتمكين الحرفيين وأصحاب المشاريع اليدوية من الوصول إلى جمهور أوسع وتحقيق نجاح تجاري عبر الإنترنت.

نحن نؤمن بالفرادة والإبداع والقدرة على صنع منتجات فريدة ومميزة يمكن أن تلهم الناس. نحن نعمل على توفير بيئة تجارية تشجع على التواصل والتفاعل بين الحرفيين والعملاء، حيث يمكن للحرفيين عرض منتجاتهم وتسويقها وبيعها بسهولة وفاعلية.

نحن نسعى جاهدين لجعل عملية الشراء والبيع عبر منصتنا سلسة ومريحة للجميع. نحن نوفر أدوات وميزات قوية لإدارة المتاجر الإلكترونية، بما في ذلك إدارة المنتجات والطلبات والمخزون والشحن، بالإضافة إلى خيارات الدفع الآمنة ودعم العملاء الممتاز.

نحن ملتزمون بدعم وتعزيز المشاريع اليدوية والحرف التقليدية، ونعمل على بناء مجتمع قوي حول هذا القطاع الرائع. نحن ندعم الحرفيين ونساعدهم في نمو أعمالهم وتحقيق نجاحهم في عالم التجارة الإلكترونية.

انضم إلينا اليوم وكن جزءًا من منصتنا التي تعزز الحرف التقليدية وتدعم أصحاب المشاريع اليدوية في رحلتهم نحو النجاح والتألق على الإنترنت.</p>

                </div>
            </div>
            
            <form className='extrapageform'>           
                <h1 className='formheading'>ابقى على تواصل</h1>
                <div className='fromgroup'>
                    <label htmlFor="">الاسم</label>
                    <input type="text" />
                </div>

                <div className='fromgroup'>
                    <label htmlFor="">الايميل</label>
                    <input type="email" />
                </div>

                <div className='fromgroup'>
                    <label htmlFor="">رسالة</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div className='fromgroup'>
                    <label htmlFor="">تقييم</label>
                    <div className='rating'>
                        <div className='star'
                            onClick={() => {
                                setrating(1)
                            }}
                        >
                            {
                                rating >= 1 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                            }
                        </div>

                        <div className='star' onClick={() => {
                            setrating(2)
                        }}>
                            {
                                rating >= 2 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                            }
                        </div>
                        <div className='star' onClick={() => {
                            setrating(3)
                        }}>
                            {
                                rating >= 3 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                            }
                        </div>
                        <div className='star' onClick={() => {
                            setrating(4)
                        }}>
                            {
                                rating >= 4 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                            }
                        </div>
                        <div className='star' onClick={() => {
                            setrating(5)
                        }}>
                            {
                                rating >= 5 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                            }
                        </div>
                    </div>
                </div>

                <button style={{background:"var( --color-primary)",borderRadius:"999px"}}>إرسال</button>
            </form>
            </div>
            </SectioWrapper>
    )
}

export default Contact