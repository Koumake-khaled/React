import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import './SearchBox.css'
function SearchBox() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
      };
  return (
    
    
    <Form className="d-flex" >
    <Form.Control
      type="search"
      placeholder="بحث"
      className="me-2"
      aria-label="Search"
    />
 <Button
       variant={isHovered ? 'success' : 'outline-success'}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       style={{
         backgroundColor: isHovered ? '#A87561' : 'transparent',
         borderColor: '#A87561',
         color: isHovered ? 'white' : '#A87561',
      
        }}
      >
        Search
      </Button>
  </Form>
         
  );
}



    

  

  

export default SearchBox;


