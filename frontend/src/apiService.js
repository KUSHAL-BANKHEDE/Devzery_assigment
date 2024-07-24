// src/apiService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api';

export const getTestCases = async () => {
    try {
        const response = await axios.get(`${API_URL}/testcases`);
        return response.data;
    } catch (error) {
        console.error('Error fetching test cases:', error);
        throw error;
    }
};

export const addTestCase = async (testCase) => {
    try {
        const response = await axios.post(`${API_URL}/testcases`, testCase);
        return response.data;
    } catch (error) {
        console.error('Error adding test case:', error);
        throw error;
    }
};

// Add PUT request function
export const updateTestCase = async (id, updatedTestCase) => {
    try {
        const response = await axios.put(`${API_URL}/testcases/${id}`, updatedTestCase);
        return response.data;
    } catch (error) {
        console.error('Error updating test case:', error);
        throw error;
    }
};

// Add DELETE request function
export const deleteTestCase = async (id) => {
    try {
        await axios.delete(`${API_URL}/testcases/${id}`);
    } catch (error) {
        console.error('Error deleting test case:', error);
        throw error;
    }
};
