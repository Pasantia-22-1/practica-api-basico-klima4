//Index será nuestra entrada 

//importamos la clase server que es nuestro objeto
const Server = require('./server.js');

function main(){
    //instanciamos la clase en javascript
    const srv = new Server(3000);
    srv.initServer();
}

main();