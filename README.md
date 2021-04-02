## Seventh Lab Web Design II

tiny CRUD connected with MongoDB in order to manage Bus services and clients

There are two entities:

- Bus (Buseta)
- Client (Cliente)

## How to use

1. Clone repository
```
git clone git@github.com:tr0b/seventh_lab_web_designii.git
```
2. Change directory into repository
```
cd seventh_lab_web_designii
```
3. Restore mongodb dump
```
mongorestore dump/my_bus_business
```
4. Start the REST API server
```
npm install
npm start
```
5. Start sending requests through the API!
```
curl -X GET http://localhost:3000/clients
curl -X GET http://localhost:3000/buses
```
6. Verify maximum bus capacity by attempting to add more than 20 clients to a given Bus (API should throw an error)

