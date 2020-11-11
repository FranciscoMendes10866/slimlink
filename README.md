# SlimLink

SlimLink is a completely free and Open Source url shortener that also has some management features for the links generated on the platform.

## Auth API

The Auth API was created in [Node.js](https://nodejs.org/en/), [Express.js](https://expressjs.com/) and [Monk](https://automattic.github.io/monk/docs/GETTING_STARTED.html).

To run the development command:

```bash
yarn dev
```

## Links API

Like the Auth API, it was also made with [Node.js](https://nodejs.org/en/), [Express.js](https://expressjs.com/) and [Monk](https://automattic.github.io/monk/docs/GETTING_STARTED.html). And the operations that can be done are a basic CRUD.

To run the development command:

```bash
yarn dev
```

## Redirect API

The Redirect API was made entirely in Go using the [Fiber](https://gofiber.io/) framework and the [MongoDB Go Driver](https://github.com/mongodb/mongo-go-driver). The only feature available in this api is the redirection of the use taking into account the slug.

To run the development command:

```bash
go run .
```

## Database

If you want to try the project, at the root of the repository I have a [docker-compose](https://docs.docker.com/compose/) file to create the appropriate containers.

To run the following command:

```bash
docker-compose up -d
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
