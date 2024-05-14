import React from "react";
import SaveCardForm from "./SaveCardForm";
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CardDetails from "./ViewCards";
import UpdateCardForm from "./UpdateCardForm";
import DeleteCardForm from "./DeleteCard";

const publishableKey =
  "pk_test_51PEpR3P8dDb7QY7tKrBzy4J2YxgLPMx8sa4GPNpGeuuI3ESshjyW1qXZAx3VHioialpcMMZuTE1kHTL4f5gAuYuf00MRP8Okqi";
const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2E5MDFiN2UyYWE1M2E1NDFkYmZlNCIsImZpcnN0TmFtZSI6IkVzaGFuIiwibGFzdE5hbWUiOiJJbWVzaCIsImVtYWlsIjoiaW1lc2g2Njg3QGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE1MzYzNzk3LCJleHAiOjE3MTUzNjczOTd9.6Fb2vSttVcJcPN7d-mJi1lg7vhsb0hN-PpV-_kkxsqU";
const customerId = "cus_Q54ob6XZSq9VNL";
const cardId = "card_1PEutYP8dDb7QY7tM5V1qOjk";
const userId = "663a901b7e2aa53a541dbfe4";
const stripePromise = loadStripe(publishableKey);

function App() {
  return (
    <div className="App">
      <h1>Save Your Card</h1>
      <Elements stripe={stripePromise}>
        <SaveCardForm
          userId={userId}
          authToken={authToken}
        />
      </Elements>
      {/* <div>
        <h1>Customer Page</h1>
        <CardDetails
          userId={userId}
          authToken={authToken}
        />
      </div> */}
      <div>
        <h1>Update Card</h1>
        <Elements stripe={stripePromise}>
          <UpdateCardForm
            userId={userId}
            authToken={authToken}
          />
        </Elements>
      </div>
      {/* <div>
        <h1>Delete Card</h1>
        <DeleteCardForm
          customerId={customerId}
          cardSourceId={cardId}
          authToken={authToken}
        />
      </div> */}
    </div>
  );
}

export default App;
