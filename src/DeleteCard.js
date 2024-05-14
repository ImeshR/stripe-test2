import React, { useState } from 'react';

const DeleteCardForm = ({ customerId, cardSourceId , authToken }) => {
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        try {
            await fetch(`http://localhost:9090/api/paymentMangement/delete-card`,
            {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authToken}`,
                },
                body: JSON.stringify({
                  customerId: customerId,
                  cardSourceId: cardSourceId,
                }),
              }
            );
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={handleDelete} disabled={loading}>Delete Card</button>
        </div>
    );
};

export default DeleteCardForm;
