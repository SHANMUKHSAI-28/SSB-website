import axios from 'axios';

// Create an Axios instance with a base configuration
const axiosInstance = axios.create({
    baseURL: 'https://ssbautomations.com/api/admin',
    timeout: 10000, // 10 seconds timeout
});

// Retry function for transient errors like 504
const retryRequest = async (fn, retries = 3, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === retries - 1 || ![504, 502, 503].includes(error?.response?.status)) {
                // Only retry for 502, 503, 504 errors
                throw error;
            }
            await new Promise((res) => setTimeout(res, delay));
        }
    }
};

// Add Internship
export const addInternship = async (internship) => {
    try {
        const response = await retryRequest(() =>
            axiosInstance.post('/add-internship', internship)
        );
        return response.data;
    } catch (error) {
        handleAxiosError(error);
        throw error;
    }
};

// Delete Internship
export const deleteInternship = async (id) => {
    try {
        const response = await retryRequest(() =>
            axiosInstance.delete('/delete-internship', { data: { id } })
        );
        return response.data;
    } catch (error) {
        handleAxiosError(error);
        throw error;
    }
};

// Update Internship
export const updateInternship = async (internship) => {
    try {
        const response = await retryRequest(() =>
            axiosInstance.post('/update-internship', internship)
        );
        return response.data;
    } catch (error) {
        handleAxiosError(error);
        throw error;
    }
};

// View Internships
export const viewInternships = async () => {
    try {
        const response = await retryRequest(() =>
            axiosInstance.get('/view-internships')
        );
        return response.data;
    } catch (error) {
        handleAxiosError(error);
        throw error;
    }
};

// Error handling function
const handleAxiosError = (error) => {
    if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
    } else if (error.request) {
        // Request was made but no response was received
        console.error('Error request:', error.request);
    } else {
        // Something else caused the error
        console.error('Error message:', error.message);
    }
};
