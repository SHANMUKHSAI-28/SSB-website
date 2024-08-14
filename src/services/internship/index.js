import axios from 'axios';

export const addInternship = async (internship) => {
    try {
        const response = await axios.post('http://ssbautomations.com/api/admin/add-internship', internship);
        return response.data;
    } catch (error) {
        throw error;
    }
};





export const deleteInternship = async (id) => {
    try {
        const response = await axios.delete('http://ssbautomations.com/api/admin/delete-internship', { data: { id } });
        return response.data;
    } catch (error) {
        throw error;
    }
};



export const updateInternship = async (internship) => {
    try {
        const response = await axios.post('http://ssbautomations.com/api/admin/update-internship', internship);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const viewInternships = async () => {
    try {
        const response = await axios.get('http://ssbautomations.com/api/admin/view-internships');
        return response.data;
    } catch (error) {
        throw error;
    }
};
