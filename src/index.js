const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);
app.set('json spaces',2);

// middlewares
app.use(morgan('combined'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://doncofre:DonC.1995!@cluster0.z91gipw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect(uri, (error) => {
    if (error) {
      console.log('Database error: ', error);
    } else {
      console.log('Database connected');
      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
      });
    }
  });
  

  // routes
app.use(require('./routes/indexs'));
app.use('/api/carrito', require('./routes/carrito'));
app.use('/api/producto', require('./routes/producto'));
app.use('/api/usuario', require('./routes/usuario'));

  app.get('/', async (req, res) => {
    res.send('Hello world');
  });


//aca en el index van todas las configuraciones de mierda