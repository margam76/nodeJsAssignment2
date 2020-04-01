var express = require('express')

var app = express();
//GET
//POST
//PUT
//DELETE
app.get('/', (req, res) => {
res.send('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees')
})
app.get('/about', (req, res) => {
res.sendFile(__dirname + '/about.html')
})
app.get('/contact', (req, rep) => {
rep.send('This is contact page')
});
var students = {
    1 : 'Mark',
    2 : 'Tom',
    3 : 'John'
}
app.get('/students/:id',(req,res)=>{
    res.send('Get the student details with the id:' + students[req.params.id])
})
        app.listen(3500, () => {
            console.log('Our server is live on port 3000')
        })