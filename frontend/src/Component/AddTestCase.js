// src/components/AddTestCase.js
import React, { useState } from 'react';
import { addTestCase } from '../apiService';

const AddTestCase = () => {
    const [name, setName] = useState('');
    const [estimateTime, setEstimateTime] = useState('');
    const [module, setModule] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTestCase = { name, estimate_time: estimateTime, module, priority, status };
        try {
            await addTestCase(newTestCase);
            // Optionally refresh the list or notify user
        } catch (error) {
            console.error('Error adding test case:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input value={estimateTime} onChange={(e) => setEstimateTime(e.target.value)} placeholder="Estimate Time" />
            <input value={module} onChange={(e) => setModule(e.target.value)} placeholder="Module" />
            <input value={priority} onChange={(e) => setPriority(e.target.value)} placeholder="Priority" />
            <input value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" />
            <button type="submit">Add Test Case</button>
        </form>
    );
};

export default AddTestCase;
