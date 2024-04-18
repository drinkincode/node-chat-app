import { config } from 'dotenv'
export default function startServer(app){
    config();
    app.listen(process.env.PORT, function(err){
        if (err) console.log("Error in server setup")
        console.log("Server listening on Port", process.env.PORT);
    })
    app.get('/', (req, res) => {
        res.send('Take a sip');
    });
    app.get('/health', (req, res) => {
        res.status(200).send('Ok');
    });
};
