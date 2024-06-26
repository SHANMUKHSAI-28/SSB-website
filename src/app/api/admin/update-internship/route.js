const Internship = require('../../../../models/internship');

module.exports = async (req, res) => {
    const { id, title, description, company, location, duration, stipend, imageUrl } = req.body;

    try {
        const updatedInternship = await Internship.findByIdAndUpdate(
            id,
            { title, description, company, location, duration, stipend, imageUrl },
            { new: true }
        );
        if (!updatedInternship) {
            return res.status(404).json({ message: 'Internship not found' });
        }
        res.status(200).json(updatedInternship);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
