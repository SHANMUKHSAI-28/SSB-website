import Internship from '../../../../models/internship';
import { NextResponse } from 'next/server';

export const GET = async () => {
    try {
        const internships = await Internship.find();
        return NextResponse.json(internships, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};
