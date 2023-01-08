> **Warning**: Deprecated. Use `npx degit solidjs/templates/ts my-solid-project` instead.

# Solid.js starter template

A dead simple Solid.js starter template built with the following assumptions:

  - You use `npm`
  - You use `ESLint` and `StandardJS`
  - You use `TypeScript`


## Usage

To bootstrap a new project based on this template you can run:

```bash
npx degit lmammino/solidjs-template <name-of-your-project>
```

Then you can cd your new folder and run:

```bash
npm install
npm run dev
```

This will start a new dev server and run your project in dev mode.


## Available Scripts

In the project directory, you can run:


### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>


### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### `npm run lint` and `npm run lint:fix`

Used to trigger ESLint and validate your code style.


## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)


## Contributing

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue on GitHub](https://github.com/lmammino/solidjs-template/issues).


## License

Licensed under [MIT License](LICENSE). © Luciano Mammino.
