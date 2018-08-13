<p align="center">
  <a href="/" rel="noopener" target="_blank"><img width="20" src="/public/logo.png" alt="logo"></a></p>
</p>

<h1 align="center">react-properties</h1>


## Installation

This module is distributed via npm, and the source code is available on github.com too.

**npm**
```sh
$ npm install @6thquake/react-properties
```

**yarn**
```sh
$ yarn add @6thquake/react-properties
```

## Documentation
> This module adds built-in support for a configuration file corresponding to each of these: .env.development, .env.test, and .env.production. The values from these files have higher priority than the values in .env. Each file (including the default file) supports another layer of overrides by adding .local to the end. The full order of precedence is (highest first):
```
.env.{environment}.local
.env.{environment}
.env.local
.env
local.json
package.json
```
Those top 4 hidden files follows Java .properties specification, ini sections;

Please Check out our [documentation website](/) for more information.

## Examples

* if you have a configuration file named **.env.development**:

```
HTTPS=false
PORT=8080

[proxy]
/api.target=/
/api.headers={}
/api.changeOrigin=true
/api.secure=false
/api.proxyTimeout=6000
/websocket.target=/
/websocket.headers={}
/websocket.changeOrigin=true
/websocket.secure=false
/websocket.ws=true
```

* **.env** file also supported at the root path of you project:
```
PORT=8888
```

* and the **package.json** is:
```
{
	"name": "test",
	"dependencies": {
		"react-properties": "^0.1.0"
	}
}
```

in your node project:

```javascript
const Properties = require('@6thquake/react-properties');
const properties = Properties.load(process.pwd());
```

if you run with "NODE_ENV=development", all the configuration parameters will be:
```
{
	"HTTPS": false,
	"PORT": 8888,
	"name": "test",
	"dependencies": {
		"react-properties": "^0.1.0"
	}
	"proxy":{
		"/api": {
			"target": "/",
			"headers": {},
			"changeOrigin": true,
			"secure": false,
			"proxyTimeout": 6000

		},
		"/websocket": {
			"target": "/",
			"headers": {},
			"changeOrigin": true,
			"secure": false,
			"ws": true
		}
	}
}
```

## Contributing

We'd greatly appreciate any [contribution](/CONTRIBUTING.md) you make.)

## Changelog

Recently Updated?
Please read the [changelog](/CHANGELOG.md).

## Roadmap

The future plans and high priority features and enhancements can be found in the [ROADMAP.md](/ROADMAP.md) file.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
