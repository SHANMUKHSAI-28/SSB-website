import Internship from '../../../../models/internship';

export const POST = async (req, res) => {
    const { title, description, company, location, duration, stipend, imageUrl } = await req.json();

    const newInternship = new Internship({
        title,
        description,
        company,
        location,
        duration,
        stipend,
        imageUrl,
    });

    try {
        const savedInternship = await newInternship.save();
        return new Response(JSON.stringify(savedInternship), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
};
