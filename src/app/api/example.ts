import express, { Request, Response } from 'express';
import next from 'next';
import { NextApiRequest, NextApiResponse } from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Your Express middleware and routes go here
    server.get('/api/custom', (req: Request, res: Response) => {
        res.json({ message: 'Hello from Express in a Next.js API route!' });
    });

    server.all('*', (req: Request, res: Response) => {
        return handle(req, res);
    });

    server.listen(3000, (err?: any) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.json({ message: 'Hello from a Next.js API route!' });
};
