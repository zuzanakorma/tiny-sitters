import {CLIENT_ID} from '../../Config/Config';
import React, { useState, useEffect } from "react" ;
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './checkout.scss';

const Checkout = () => {

    const booking = 'hardcoded booking';
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    // creates a paypal order
    const createOrder = (data:any, actions:any) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Sitter Service",
                    amount: {
                        currency_code: "USD",
                        value: 30,
                    },
                },
            ],
        }).then((orderID:boolean) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data:any, actions:any) => {
        return actions.order.capture().then(function (details:any) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    const onError = (data:any, actions:any) => {
        setErrorMessage("An Error occured with your payment ");
    };

    const navigate = useNavigate();
    useEffect(() => {
        if (success) {
        
            navigate("/success", { state: { booking: booking, orderID: orderID } });
            // alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    },[success]);
    
    return (
        <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
            <div>
                <div className="wrapper">
                    <div className="product-info">
                       
                        <div className="product-price-btn">
                            
                            <br></br>
                            <button className='buy-btn' type="submit" onClick={() => setShow(true)}>
                               Confirm
                            </button>
                        </div>
                    </div>
                </div>
                <br></br>
                {show ? (
                    <PayPalButtons
                        className='paypal-btn'
                        style={{ layout: "vertical" }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                    />
                ) : null}
            </div>
        </PayPalScriptProvider>
    );
}

export default Checkout

