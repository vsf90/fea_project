# Projet FEA site web

## prerequisites
* PHP
* NodeJs
* ReactJS

## Installation
Install ReactJS ou autre

```bash
npm install
```
after launch application by
```bash
TO DO
```

## Create a production version
```bash
build --prod --aot --extract-css
```

When the compilation is over a folder named "dist" will appear on the project. copy the whole elements of folder on the folder in php local server.

After open the index.html file and replace :
```bash
<base href="/">
```

by 

```bash
<base href="BaseUriOfTheProduction/">
```

h