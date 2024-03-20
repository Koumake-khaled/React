import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";
import { Link } from 'react-router-dom';
import { FaHeartCirclePlus } from "react-icons/fa6";
const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card style={{ textAlign: "right",    backgroundColor: "var(--color-dark)",
    borderRadius: "25px",
    padding: "calc(var(--padding-primary) / 2)",
    margin: "calc(var(--margin-primary) / 5)"}} dir="rtl"  className="h-100" >
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{
          height: "200px",
          width: "100%",
          borderRadius: "6.5px",
          marginBottom: "calc(var(--margin-primary) / 6)"
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-4" style={{ lineHeight: "1.5rem",
    color: "var(--color-darkest)"}}>{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '0px'}}>
            <Button style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}className="w-100" onClick={() => increaseCartQuantity(id)}>
              إضافة الى السلة
            </Button>
            <Link to="/signup">
            <span style={{ color: '#ba1212', fontSize: '25px', marginTop: '-10px', marginRight: '20px' }}>
            <FaHeartCirclePlus />
            </span>
            </Link>
            </div>
          ) : ( 
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)} style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>-</Button>
                <div>
                  <span className="fs-3">{quantity}  في السلة</span>
                </div>
                <Button onClick={() => increaseCartQuantity(id)} style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)'}}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                الحذف
              </Button>
            </div>
          )}
        </div>
   
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
