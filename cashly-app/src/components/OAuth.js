require('dotenv').config()

const client_id= '668e91391747336629693935-lyhef18h';


const baseUrl = "https://marketplace.gohighlevel.com";

async function initiateAuth(req, res) {
    const options = {
        requestType: "code", 
        redirectUri: "http://localhost:3000/oauth/callback", 
        clientId: '668e91391747336629693935-lyhef18h', 
        scopes: [
            'contacts.readonly'
            // 'conversations.readonly', 
            // 'conversations/message.readonly', 
            // 'invoices.readonly'
        ]
    }; 

    return res.redirect(`${baseUrl}/oauth/chooselocation?response_type=${options.requestType}&redirect_uri=${options.redirectUri}&client_id=${options.clientId}&scope=${options.scopes}`)
}

module.exports = initiateAuth; 