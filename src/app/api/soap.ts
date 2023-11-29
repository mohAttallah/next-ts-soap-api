// pages/api/soap.ts
import { IncomingMessage, ServerResponse } from 'http';
import  soap  from 'soap';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Define your SOAP service
    const service = {
        YourService: {
            YourPort: {
                YourFunction: (args: any) => {
                    // Handle your SOAP request here
                    console.log('SOAP Request Received:', args);

                    // Assume the SOAP response is an array for demonstration purposes
                    const responseArray = [1, 2, 3];

                    res.status(200).json({
                        YourFunctionResponse: {
                            result: responseArray,
                        },
                    });
                },
            },
        },
    };

    // Create a SOAP server
    const soapServer = await soap.listen(req, res, service, null, null);

    // Handle SOAP errors
    soapServer.on('error', (err: Error) => {
        console.error('SOAP Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
};

export default handler;
