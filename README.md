# challenge10_coderhouse -- 

## Despliegue 📦

* Instalacion de depedencias
```bash
npm i 
```
* Modificar el string de conexion de mongo local para poderse conectar. 

* Ejecucion del proyecto handlebars (se ejecuta en puerto 8080) :godmode:
```bash
npm run start
```
## Rutas
| Método | Endpoint                | Descripción                                                                                                                                                                                                                 |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST    | **/login**     | Formulario de login. Las sesesiones son almacenadas en MongoLocal                                                                                                                                                                           |
| POST    | **/logout**     | Se accede tras clicker al boton 'deslogear' y luego de 2 segundos redirige a /login.                                                                                                                                                                          |
| GET    | **/productos**     | Me permite listar todos los productos disponibles                                                                                                                                                                           |
| POST   | **/productos**     | Para incorporar productos al listado                                                                                                                                                                                        |
| GET    | **/productos-test** | Devuelve un listado de 5 productos mock generados con **Faker.js**                                                                                                                                                          |
| GET    | **/chat**        | Devuelve un chat desarrolado con socket que muestra la data desnormalizada y es almacenada normalizada en un archivo tipo JSON |
## Construido con 🛠️

* [Express🛰️](https://expressjs.com/es/4x/api.html)
* [Handlebars :writing_hand:](https://handlebarsjs.com/)
* [Socket.io :electric_plug:](https://socket.io/)
* [Bootstrap :star_struck:](https://getbootstrap.com/)
* [Moment.js :stopwatch:](https://momentjs.com)
* [Fs](https://nodejs.org/api/fs.html)
* [Normalizr](https://github.com/paularmstrong/normalizr)
* [Dot-Env](https://www.npmjs.com/package/dotenv)
* [Passport](https://www.npmjs.com/package/passport)
* [Passport-Local](https://www.npmjs.com/package/passport-local)
* [Faker](https://www.npmjs.com/package/@faker-js/faker)
* [Socket.io](https://www.npmjs.com/package/socket.io)