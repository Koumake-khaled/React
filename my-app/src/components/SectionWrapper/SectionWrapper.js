import './SectionWrapper.css'
const SectioWrapper = (props) => {
  return (
   
      <div className='section-wrapper'>
        {props.children}
      </div>
  )
}

export default SectioWrapper
