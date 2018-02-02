![SwiftMusik](./docs/img/logo.png "SwiftMusik")

# Swiftmusik

Music player manager.

# Installation

## Tech Stack

- Python == `3.5.2`
- Node == `6.9.5`
- NPM == `3.10.10`

- Django == `2.0.1`
- Django Rest Framework == `3.7.7`

## Django Installation

1. Activate your virtualenv
2. Install requirements:
    - `$ make dj-install` or `$ pip install -r requirements.txt`

## Angular Installation

1. Install modules:
    - `$ make web-install`

    - *This can be manually done by `cd`ing into the webapp's directory (`assets/scripts/swiftmusik`) and issuing the command `$ npm install`*

## Launching the App

*Note: You need 2 terminal windows open to launch the development server of the app. One for the API server, and one for watching the webapp (Angular) file changes to be compiled.*

#### First terminal (API server):

To launch the api server:

`$ make dj-server`

or

`python manage.py runserver`

#### Second terminal (Webapp build watcher):

To launch `angular-cli`'s builder:

`$ make web-watch`

or

```
$ cd assets/scripts/swiftmusik
$ ng build --watch
```

### Dev Server Launched!

Everything should be ready once we've opened up the API server and webapp build watcher.

Visit the app in your browser:

`http://127.0.0.1:8000/`

# License

[GNU GPL v3](./LICENSE)
