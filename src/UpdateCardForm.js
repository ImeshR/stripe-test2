import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const UpdateCardForm = ({ userId, authToken }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);



  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      try {
        const response = await fetch(
          `http://localhost:9090/api/paymentMangement/update-card`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({
              userId,
              updatedCardDetails: {
                token: token.id,
              },
            }),
          }
        );

        const data = await response.json();
        console.log(data);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to update card details");
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        type="submit"
        disabled={!stripe || loading}
      >
        {loading ? "Processing..." : "Update Card"}
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};

export default UpdateCardForm;
