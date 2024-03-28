const mondaySdk = require("monday-sdk-js")
const monday = mondaySdk();
monday.setApiVersion("2023-10");
monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMzOTA4NTMyOCwiYWFpIjoxMSwidWlkIjo1Nzg2NDg0NiwiaWFkIjoiMjAyNC0wMy0yOFQwNToyNToxOS44MDVaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjIyMzYwMjgsInJnbiI6ImFwc2UyIn0.auEsxHcJyH6ZPf-MpmAMVGsYdTBkztfFiJMOL3zPhpo');
monday.api(`
query {
    users {
      account {
        id
        show_timeline_weekends
        tier 
        slug
        plan {
          period
        }
      }
    }
  }
  
`).then(res => {
    console.log(JSON.stringify(res));
});    