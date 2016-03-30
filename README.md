# ionic1_ng_redux

Attempting to create a reference app with Ionic 1, Angular 1, Redux, and Typescript

## Goals

Provide for the following:
* testability
* intuitive development
* uni-directional dataflow
  - does it make debugging easier?
  - "" updating the app easier?
  - consolidate application state
  
## Reasonings

Ionic
    : Easy to use, cross-platform mobile app styling with many, mature components.
    Orginally wanted to try Ionic 2, but it's still missing some key components, such as Virtual Scroll/List
    
Angular 1
    : It's a dependency of Ionic and also a mature framework with huge community support and history.

Redux
    : Appears to be the winner in uni-directional dataflow and reduces the boilerplate
    that you would normally end up creating on your own with
    standard Flux implementations.
    
## Setup

Install NodeJS

        npm update npm -g
        npm install bower -g
        npm install ionic -g
        npm install cordova -g
        npm install gulp-cli -g
        npm install
        npm install typings -g
        typings install
        bower install

## Development

* `ionic serve`
    : Create http server, launch web browser with live reload, and watch for changes
