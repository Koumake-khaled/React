import './MostPopular.css'
import {Card, SectionHeader,SectioWrapper} from '../..//components/index'
import MostPopularData from '../../Data/MostPopularData'
const MostPopular = () => {    
  const cards = MostPopularData.map(card => {
   return < Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>
  })
  return (
    <>
     <SectioWrapper>
     <SectionHeader >المٌنتجات</SectionHeader>
      <div className='most-popular-items' >
        {cards}
      </div>
      </SectioWrapper>
    </>
  )
}

export default MostPopular
