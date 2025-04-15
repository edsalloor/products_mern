# Products MERN

## Run Project Locally

### Run backend and fronend in 1 terminal

1. Create an `.env` file **INSIDE** the `backend/` subdirectory and paste the project secrets.
2. Open a terminal and move to the root folder of the project.
4. Run `npm run install-all`.
5. Run `npm run dev`. You should see an output similar to this:
```
[0] [nodemon] starting `node server.js`
[1] Port 5173 is in use, trying another one...
[1] 
[1]   VITE v6.1.0  ready in 239 ms
[1]
[1]   ➜  Local:   http://localhost:5174/
[1]   ➜  Network: use --host to expose
[0] Server started at http://localhost:5000
[0] MongoDB Connected: fullstackwebdevelopment-shard-00-02.0ue2g.mongodb.net
```
5. Now you can open http://localhost:5173/ in a browser.


### Run backend and frontend in 2 separate terminals

1. Create an `.env` file **INSIDE** the `backend/` subdirectory and paste the project secrets.
2. Open two terminals. One for running the backend and the second one for the frontend.
3. In the first terminal, move to the backend folder of the project: `cd <path-to-products_mern>/backend`.
4. Run `npm install` and `npm run dev`. You should see an output similar to this:
```
[nodemon] starting `node server.js`
Server started at http://localhost:5000
MongoDB Connected: fullstackwebdevelopment-shard-00-00.0ue2g.mongodb.net
```

5. In the second terminal, move to the frontend folder of the project: `cd <path-to-products_mern>/frontend/`.
6. Run `npm install` and `npm run dev`. You should see an output similar to this:
```
  VITE v6.1.0  ready in 207 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

7. Now you can open [http://localhost:5173/](http://localhost:5173/) in a browser.
