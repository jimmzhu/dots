# dots

Draws dots.

Modified React tutorial, originally intended to display comments. Dots code is
in `app/assets/javascripts/src/proto`. Tutorial code is in
`app/assets/javascripts/src/comments`.

## Setup

### Dependencies

- Ruby 2.2.2
- [Babel](https://facebook.github.io/react/docs/tooling-integration.html)

Installation
```Shell
get/install rbenv, ruby-build

# install ruby 2.2.2
rbenv install 2.2.2
rbenv local 2.2.2

get npm
npm install -g babel
```

### Getting Started

```Shell
# install bundler
gem install bundler
bundle install
rake db:setup
```

Run server
```Shell
rails s
```

Run JSX -> JS transpiler
```Shell
babel --watch app/assets/javascripts/src --out-dir app/assets/javascripts/build
```
