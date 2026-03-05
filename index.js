require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'pug');

// HubSpot config
const HUBSPOT_TOKEN = process.env.PRIVATE_APP_TOKEN;
const HUBSPOT_BASE = 'https://api.hubapi.com';
const CONTACT_PROPERTIES = ['firstname','genre','rating'];

// GET homepage - list contacts
app.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${HUBSPOT_BASE}/crm/v3/objects/contacts`, {
            headers: { Authorization: `Bearer ${HUBSPOT_TOKEN}` },
            params: { properties: CONTACT_PROPERTIES.join(',') }
        });
        const contacts = response.data.results.map(c => c.properties);
        res.render('homepage', { contacts });
    } catch (err) {
        console.error(err.message);
        res.send('Error fetching contacts.');
    }
});

// GET form to add new contact
app.get('/update-cobj', (req, res) => {
    res.render('updates', { title: 'Update Custom Object Form | Integrating With HubSpot I Practicum' });
});

// POST form data to HubSpot
app.post('/update-cobj', async (req, res) => {
    const { firstname, email, genre, rating } = req.body;
    try {
        await axios.post(`${HUBSPOT_BASE}/crm/v3/objects/contacts`, {
            properties: { firstname, email, genre, rating }
        }, {
            headers: { Authorization: `Bearer ${HUBSPOT_TOKEN}` }
        });
        res.redirect('/');
    } catch (err) {
        console.error(err.message);
        res.send('Error creating contact.');
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));