import data from './data.json';

export function getProjects() {
    return data;
}

export default function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ message: `Method ${req.method} is not allowed` });
    } else {
        const projects = getProjects();
        res.status(200).json(projects);
    }
}