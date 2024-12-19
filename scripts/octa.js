// Initialize OktaAuth
const oktaAuth = new OktaAuth({
    issuer: 'dev-ap8jdoc17p5j43jc.us.auth0.com', // Replace with your Okta Issuer URL
    clientId: 'T1QrAazxtZlFhmsFGNzawdVvs2gsIr7W', // Replace with your Okta Client ID
    redirectUri: 'https://lovely-erl.netlify.app', // Replace with your callback URL
});

// Log in when the button is clicked
document.getElementById('login-btn').addEventListener('click', () => {
    oktaAuth.signInWithRedirect();
});
