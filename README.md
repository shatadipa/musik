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

10. Setup `html-webpack-plugin` to automatically generate html and add script to it.

  ```shell
  yarn add html-webpack-plugin
  ```

11. Update `webpack.config.js`

    ```diff
    diff --git a/webpack.config.js b/webpack.config.js
    index cab0632..f1c94fb 100644
    --- a/webpack.config.js
    +++ b/webpack.config.js
    @@ -1,4 +1,12 @@
     const path = require('path');
    +const HtmlWebpackPlugin = require('html-webpack-plugin');
    +
    +const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    +  template: './client/index.html',
    +  filename: 'index.html',
    +  inject: 'body'
    +});
    +
     module.exports = {
       entry: './client/index.js',
       output: {
    @@ -6,9 +14,17 @@ module.exports = {
         filename: 'index_bundle.js'
       },
       module: {
    -    loaders: [
    -      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    -      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    +    loaders: [{
    +        test: /\.js$/,
    +        loader: 'babel-loader',
    +        exclude: /node_modules/
    +      },
    +      {
    +        test: /\.jsx$/,
    +        loader: 'babel-loader',
    +        exclude: /node_modules/
    +      }
         ]
    -  }
    -}
    \ No newline at end of file
    +  },
    +  plugins: [HtmlWebpackPluginConfig]
    +};
    \ No newline at end of file

    ```

    We require the `html-webpack-plugin`. Create an instance of it, and set our skeleton HTML as the `template`. `filename` refers to the name of the HTML that the plugin will generate. `inject` body tells the plugin to add any JavaScript into the bottom of the page, before the closing `body` tag.

12. Add a start script

    ```diff
    diff --git a/package.json b/package.json
    index 8d59e7b..4b10ba1 100644
    --- a/package.json
    +++ b/package.json
    @@ -17,5 +17,8 @@
         "babel-loader": "^7.1.2",
         "babel-preset-es2015": "^6.24.1",
         "babel-preset-react": "^6.24.1"
    +  },
    +  "scripts": {
    +    "start": "webpack-dev-server"
       }
     }
    ```

13. Run the app and see it running.

    ```shell
    yarn start
    ```

14. Install React dependencies

    ```shell
    yarn add react react-dom
    ```

