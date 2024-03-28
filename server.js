const express = require('express');
const bodyParser = require('body-parser');
const mondaySdk = require("monday-sdk-js")
const app = express();
const monday = mondaySdk();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



monday.setApiVersion("2023-10");
monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMzOTA4NTMyOCwiYWFpIjoxMSwidWlkIjo1Nzg2NDg0NiwiaWFkIjoiMjAyNC0wMy0yOFQwNToyNToxOS44MDVaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjIyMzYwMjgsInJnbiI6ImFwc2UyIn0.auEsxHcJyH6ZPf-MpmAMVGsYdTBkztfFiJMOL3zPhpo');

app.get('/api/users', (req, response) => {
  monday.api(`
    query {
        users (limit: 50) {
          created_at
          email
          account {
            name
            id
          }
        }
      }  
  `).then(res => {
    response.json(res)
  });   
});

app.get('/api/accounts', (req, response) => {
  monday.api(`
    query {
      me {
        name
      }
      boards(limit: 50) {
        name
    
        items_page {
          items {
            id
            name
          }
        }  

        groups {
          title
          id
        }
      }
    }  
  `).then(res => {
    response.json(res)
  });   
});