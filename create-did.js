import fetch from 'node-fetch'
import * as dotenv from 'dotenv'
dotenv.config()

const access_token = process.env.ACCESS_TOKEN
const tenant_subdomain = process.env.TENANT_SUBDOMAIN

async function main() {

  try{
    const resp = await fetch(
        `https://${tenant_subdomain}.vii.mattr.global/core/v1/dids`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`
          },
          body: JSON.stringify({
            method: 'key',
            options: {keyType: 'ed25519'}
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
