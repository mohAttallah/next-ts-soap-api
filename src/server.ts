// pages/api/soap.ts
import soap from 'soap';
import { NextApiRequest, NextApiResponse } from 'next';
import { createServer } from 'http';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
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
        const httpServer = createServer((req, res) => {
            // Forward the request to the SOAP service
            soap.listen(req, res, service, null, null);
        });

        // Listen on a specific port
        const PORT = process.env.PORT || 3000;
        httpServer.listen(PORT, () => {
            console.log(`SOAP server is running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('SOAP Error:', error);
        res.status(500).send('<SOAP-ENV:Fault><faultcode>SOAP-ENV:Server</faultcode><faultstring>Internal Server Error</faultstring></SOAP-ENV:Fault>');
    }
};

export default handler;
