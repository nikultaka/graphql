const mondaySdk = require("monday-sdk-js")
const monday = mondaySdk();
monday.setApiVersion("2023-10");
monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMzOTA4NTMyOCwiYWFpIjoxMSwidWlkIjo1Nzg2NDg0NiwiaWFkIjoiMjAyNC0wMy0yOFQwNToyNToxOS44MDVaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjIyMzYwMjgsInJnbiI6ImFwc2UyIn0.auEsxHcJyH6ZPf-MpmAMVGsYdTBkztfFiJMOL3zPhpo');
monday.api(`# API Reference: https://developer.monday.com/api-reference/docs
query {
  me {
    name
  }

  # boards(ids: [13542, 68097]) {
  boards(limit: 1) {
    name

    columns {
      title
      id
      type
    }

    groups {
    	title
      id
    }

    # Read more about Board type: https://developer.monday.com/api-reference/docs/boards
  }
}`).then(res => {
    console.log(JSON.stringify(res));
    
  });    