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
monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM0MDI5NzEzNywiYWFpIjoxMSwidWlkIjo1ODAzNzI3MywiaWFkIjoiMjAyNC0wNC0wMVQxMDoyOToxNi4wNTlaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjIzNDUxMTMsInJnbiI6ImFwc2UyIn0.0niuu_YVgdJhT3TWT8EGXVdVFbZwYujLlTKy9ksJTME');

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

app.get('/api/test', (req, response) => {
  monday.api(`
    query {
      me {
        name
      }
      boards(ids:[1856897353,1856897355]) {
        name
    
        items_page {
          items {
            id
            name
            column_values {
              column {
                title
              }
              text
              value
            }
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