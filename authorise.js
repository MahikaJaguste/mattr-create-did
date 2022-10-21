import fetch from 'node-fetch'
import * as dotenv from 'dotenv'
dotenv.config()

async function main() {
    try{
        const resp = await fetch(
            `https://auth.mattr.global/oauth/token`,
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                audience: "https://vii.mattr.global",
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                grant_type: 'client_credentials'
            })
            }
        );
        
        const data = await resp.json();
        console.log(data);  
    }
    catch(err){
        console.log(err)
    }
}

main()