
const express = require('express') ;
const fs = require('fs');
const app = express();
app.listen(3030, () => console.log('Server running in 3030 port'));

const mainRouter = require ('./routes/main')


app.use('/',mainRouter)

app.use ('/heroes', mainRouter)

app.use('/heroes/detalles/:idHeroe',mainRouter)

app.use('/heroes/bio/:id/:ok?',mainRouter);

app.use('/creditos',mainRouter)

app.get('*', mainRouter)
	