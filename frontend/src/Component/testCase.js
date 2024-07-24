// src/components/TestCase.js
import React, { useState, useEffect } from "react";
import { getTestCases, addTestCase, updateTestCase, deleteTestCase } from "../apiService";

const TestCase = () => {
    const [testCases, setTestCases] = useState([]);
    const [newTestCase, setNewTestCase] = useState({
        name: '',
        estimate_time: '',
        module: '',
        priority: '',
        status: 'pass'
    });

    useEffect(() => {
        const fetchTestCases = async () => {
            try {
                const data = await getTestCases();
                setTestCases(data);
            } catch (error) {
                console.error("Error fetching test cases:", error);
            }
        };

        fetchTestCases();
    }, []);

    const handleAddTestCase = async (e) => {
        e.preventDefault();
        try {
            await addTestCase(newTestCase);
            setNewTestCase({
                name: '',
                estimate_time: '',
                module: '',
                priority: '',
                status: 'pass'
            });
            // Fetch updated test cases
            const updatedTestCases = await getTestCases();
            setTestCases(updatedTestCases);
        } catch (error) {
            console.error("Error adding test case:", error);
        }
    };

    const handleUpdateTestCase = async (id, updatedData) => {
        try {
            await updateTestCase(id, updatedData);
            // Fetch updated test cases
            const updatedTestCases = await getTestCases();
            setTestCases(updatedTestCases);
        } catch (error) {
            console.error("Error updating test case:", error);
        }
    };

    const handleDeleteTestCase = async (id) => {
        try {
            await deleteTestCase(id);
            // Fetch updated test cases
            const updatedTestCases = await getTestCases();
            setTestCases(updatedTestCases);
        } catch (error) {
            console.error("Error deleting test case:", error);
        }
    };

    return (
        <div className="w-full mt-8">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="bg-blue-600">
                        <th className="border border-gray-300 p-2 text-left">TestCaseName</th>
                        <th className="border border-gray-300 p-2 text-left">Estimate Time</th>
                        <th className="border border-gray-300 p-2 text-left">Module</th>
                        <th className="border border-gray-300 p-2 text-left">Priority</th>
                        <th className="border border-gray-300 p-2 text-left">Status</th>
                        <th className="border border-gray-300 p-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {testCases.map((testCase) => (
                        <tr key={testCase.id}>
                            <td className="border border-gray-300 p-2">{testCase.name}</td>
                            <td className="border border-gray-300 p-2">{testCase.estimate_time}</td>
                            <td className="border border-gray-300 p-2">{testCase.module}</td>
                            <td className="border border-gray-300 p-2">{testCase.priority}</td>
                            <td className="border border-gray-300 p-2">{testCase.status}</td>
                            <td className="border border-gray-300 p-2">
                                <button onClick={() => handleDeleteTestCase(testCase.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td className="border border-gray-300 p-2">
                            <input
                                type="text"
                                value={newTestCase.name}
                                onChange={(e) => setNewTestCase({ ...newTestCase, name: e.target.value })}
                                className="w-full p-1 border border-gray-300 rounded"
                                placeholder="Enter TestCase Name"
                            />
                        </td>
                        <td className="border border-gray-300 p-2">
                            <input
                                type="text"
                                value={newTestCase.estimate_time}
                                onChange={(e) => setNewTestCase({ ...newTestCase, estimate_time: e.target.value })}
                                className="w-full p-1 border border-gray-300 rounded"
                                placeholder="Enter Estimate Time"
                            />
                        </td>
                        <td className="border border-gray-300 p-2">
                            <input
                                type="text"
                                value={newTestCase.module}
                                onChange={(e) => setNewTestCase({ ...newTestCase, module: e.target.value })}
                                className="w-full p-1 border border-gray-300 rounded"
                                placeholder="Enter Module"
                            />
                        </td>
                        <td className="border border-gray-300 p-2">
                            <input
                                type="text"
                                value={newTestCase.priority}
                                onChange={(e) => setNewTestCase({ ...newTestCase, priority: e.target.value })}
                                className="w-full p-1 border border-gray-300 rounded"
                                placeholder="Enter Priority"
                            />
                        </td>
                        <td className="border border-gray-300 p-2">
                            <select
                                value={newTestCase.status}
                                onChange={(e) => setNewTestCase({ ...newTestCase, status: e.target.value })}
                                className="w-full p-1 border border-gray-300 rounded"
                            >
                                <option value="pass">Pass</option>
                                <option value="fail">Fail</option>
                            </select>
                        </td>
                        <td className="border border-gray-300 p-2">
                            <button onClick={handleAddTestCase}>Add Test Case</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TestCase;
