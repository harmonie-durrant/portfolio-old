import data from './data.json';

export function getProjectByName(name) {
    const project = data[data.findIndex(project => project.name === name)];
    return project;
}

export default function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ message: `Method ${req.method} is not allowed` });
    } else {
        const project = getProjectByName(req.query.name);
        res.status(200).json(project);
    }
}