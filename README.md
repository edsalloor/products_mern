# Products MERN

## Run Project Locally

1. Open two terminals. One for running the back-end and the second one for the front-end.
2. In the first terminal, move to the root folder of the project: cd `<path-to-products_mern>/`.
3. Create an `.env` file and paste the project secrets.
4. Run `npm install` and `npm run dev`. You should see an output similar to this:
```
[nodemon] starting `node backend/server.js`
Server started at http://localhost:5000
MongoDB Connected: fullstackwebdevelopment-shard-00-00.0ue2g.mongodb.net
```

5. In the second terminal, move to the front-end folder of the project: cd `<path-to-products_mern>/front-end/`.
6. Run `npm install` and `npm run dev`. You should see an output similar to this:
```
  VITE v6.1.0  ready in 207 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

7. Now you can open [http://localhost:5173/](http://localhost:5173/) in a browser.
