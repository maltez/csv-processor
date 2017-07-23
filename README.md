# csv-processor

# Start Project Locally
- npm install 
- npm start

# Start project in container 
- change host: '127.0.0.1' --> '0.0.0.0' ( For port exposing ) 
- docker build -t csv/sqlite .
- docker run -d -p 3000:3000 csv/sqlite

# Start linter
- npm run lint
- npm run lint:fix