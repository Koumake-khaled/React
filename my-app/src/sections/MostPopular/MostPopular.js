import './MostPopular.css'
import {SectionHeader,SectioWrapper} from '../..//components/index'
import Store from '../../components/Store'
import StoreItem from '../../components/StoreItem'
const MostPopular = () => {    
  return (
    <>
     <SectioWrapper>
     <SectionHeader >المٌنتجات</SectionHeader>
      <Store/>
      </SectioWrapper>
    </>
  )
}

export default MostPopular
