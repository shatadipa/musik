# musik
A music player app from scratch.

# How I set-up the project?
1. We require Yarn and Node pre-installed on our machines before we dive into the project.

    ```shell
    brew install node
    brew install yarn
    ```

2. Create the project directory and run `yarn init`. Select all the default options.

    ```shell
    mkdir musik
    cd musik
    yarn init
    ```

3. This creates a package.json in the directory.

    ```json
    {
    "name": "musik",
    "version": "1.0.0",
    "description": "A music player web app",
    "main": "index.js",
    "repository": "https://github.com/shatadipa/musik.git",
    "author": "shatadipa <shatadipa1986@gmail.com>",
    "license": "MIT"
    }
    ```

4. We next install webpack and other dependencies.

    ```shell
    yarn add webpack webpack-dev-server path
    ```

5. Create webpack.config.js file to tell webpack what to do.

   ```shell
   touch webpack.config.js
   ```


6. Add following to the `webpack.config.js`

   ```javascript
   /* ./webpack.config.js */
   const path = require('path');
   module.exports = {
     entry: './client/index.js',
     output: {
       path: path.resolve('dist'),
       filename: 'index_bundle.js'
     },
     module: {
       loaders: [
         { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
         { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
       ]
     }
   }
   ```

   Basically, to get a running instance of webpack we need to specify an `entry` point and an `output`.

   - `entry`: This is the entry file where the bundler starts the bundling process.
   - `output`: It is the location where the bundled Javascript code is to be saved.
   - `loaders`: To transpile our js/jsx ES6 code to ES5 code. This will ignore `node_modules` directory.

7. Install Babel packages.

   ```shell
   yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev
   ```

   - `babel-preset-es2015` is for es6 transpilation and `babel-preset-react` is for JSX transpilation. 

8. Configure Babel using `.babelrc`

   ```Shell
   touch .babelrc
   ```

9. Add the following to `.babelrc`

   ```javascript
   /* .babelrc */  
   {
       "presets":[
           "es2015", "react"
       ]
   }
   ```

   ​