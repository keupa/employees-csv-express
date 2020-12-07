const express = require('express')
const fs = require('fs')
const app = express()
const path = './data/employees.csv' 

app.get('/', (req, res) => {
    res.send(`<h3> Welcome to the Employees database </h3> 
    To search an employee information: http://localhost:3000/employees/EMPLOYEE_ID
    <br> 
    To search for a specific field: http://localhost:3000/employees/EMPLOYEE_ID/SEARCH_QUERY
    `)
  })

app.get('/employee/:id/:query?', function(req, res) {

const id = req.params.id
const query = req.params.query

fs.readFile(path, 'utf8', (err, data) => {
    if(err){
        res.send(err.message)
        return
    }
   
    let employeesObj = toJson(data)
    let searchById = employeesObj.filter(employee => {
      return employee.id == id
  })   
  if(Object.entries(searchById).length === 0){
    res.send('Employee doesnt exist!')
    return
}

if(!query){
  res.send(searchById)
}else{
  let obj = searchById[0]
  if(obj.hasOwnProperty(query)){
  res.send(`${query}: ${obj[query]}`)
  }else{
    res.send(`Query doesnt exist! Try one of the following keywords:
    <br>
    <ul> 
      <li>id</li>
      <li>first_name</li>
      <li>last_name</li>
      <li>email</li>
      <li>ip_address</li>
    </ul>`)
  }
}

})
}) 


app.listen(3000, function() {
  console.log('Application started!')
})

// convert to json
function toJson(data){
  const content = data.split('\n').map(line => line.split(','));
  const headers = content[0];
  const rows = content.slice(1);
  return rows.map((line) => {
    return Object.fromEntries(headers.map((header, index) => [header, line[index]]))
  });
}