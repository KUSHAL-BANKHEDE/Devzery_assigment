// src/components/DeleteTestCase.js
import React from 'react';
import { deleteTestCase } from '../apiService';

const DeleteTestCase = ({ id }) => {
    const handleDelete = async () => {
        try {
            await deleteTestCase(id);
            // Optionally refresh the list or notify user
        } catch (error) {
            console.error('Error deleting test case:', error);
        }
    };

    return (
        <button onClick={handleDelete}>Delete Test Case</button>
    );
};

export default DeleteTestCase;
