import React, { useState, useEffect } from "react";

const CardDetails = ({ userId, authToken }) => {
  const [cardDetails, setCardDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCardDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:9090/api/paymentMangement/get-card`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({ userId }),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch card details");
        }
        const data = await response.json();
        console.log(data);
        setCardDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCardDetails();
  }, [userId, authToken]);

  return (
    <div>
      {cardDetails ? (
        <ul>
          <li>Brand: {cardDetails.brand}</li>
          <li>Last 4 Digits: {cardDetails.last4}</li>
          {/* Add other card details here */}
        </ul>
      ) : (
        <p>Loading card details...</p>
      )}
    </div>
  );
};

export default CardDetails;
