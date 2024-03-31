import './StepFour.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {SectioWrapper,PrimaryButtons,SecondaryButtons} from '../../components/index'

const StepFour = () => {
  return (
    <div>
          <SectioWrapper>
          <div style={{ display: "flex", justifyContent: "center", gap: "100px",marginTop:'72px', textAlign: "right"}} dir="rtl">
    <Link to="/stepthreepage">
    <PrimaryButtons>المتابعة</PrimaryButtons></Link>
    <Link to="/">
      <SecondaryButtons>السابق</SecondaryButtons>
    </Link>
    </div>
          </SectioWrapper>
    </div>
  )
}

export default StepFour
