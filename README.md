## WikiCareer 

### Starting SpringBoot Backend
cd Backend
./mvnw spring-boot:run

### Starting React Frontend
cd Frontend
npm i
npm start 

### Starting Swagger REST Documentation
cd swagger-ui
npm run dev
Go to localhost:3200

## Running Docker Compose
docker compose up

Frontend -> localhost:3000
Database -> localhost:8082 (url=jdbc:h2:tcp://localhost/test, username=sa, passsword=)
Backend  -> localhost:8080
