// src/components/UpdateTestCase.js
import React, { useState } from 'react';
import { updateTestCase } from '../apiService';

const UpdateTestCase = ({ id }) => {
    const [name, setName] = useState('');
    const [estimateTime, setEstimateTime] = useState('');
    const [module, setModule] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedTestCase = { name, estimate_time: estimateTime, module, priority, status };
        try {
            await updateTestCase(id, updatedTestCase);
            // Optionally refresh the list or notify user
        } catch (error) {
            console.error('Error updating test case:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input value={estimateTime} onChange={(e) => setEstimateTime(e.target.value)} placeholder="Estimate Time" />
            <input value={module} onChange={(e) => setModule(e.target.value)} placeholder="Module" />
            <input value={priority} onChange={(e) => setPriority(e.target.value)} placeholder="Priority" />
            <input value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" />
            <button type="submit">Update Test Case</button>
        </form>
    );
};

export default UpdateTestCase;
