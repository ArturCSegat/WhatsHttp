import express, {Request, Response} from 'express';

const server = express()
server.use(express.json()); 


server.post("/webhook", async (req: Request, res: Response) => {
    console.log(req.body);
});

server.listen(3001, () => {
    console.log("Listening for webhooks");
});
