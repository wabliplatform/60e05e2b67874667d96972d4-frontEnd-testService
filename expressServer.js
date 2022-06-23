const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','assignCity.html')));
			this.app.get('/assignCity', (req, res) => res.sendFile(path.join(__dirname,'html','assignCity.html')));
			this.app.get('/assignCity/:id', (req, res) => res.sendFile(path.join(__dirname,'html','assignCity.html')));
			this.app.get('/viewCity', (req, res) => res.sendFile(path.join(__dirname,'html','viewCity.html')));
			this.app.get('/viewCity/:id', (req, res) => res.sendFile(path.join(__dirname,'html','viewCity.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;