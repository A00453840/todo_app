# React PWA - Assignment

This is To-Do - A React Progressive Web Application, Developed as a part of MCDA-5550 course.

Being a PWA, this application has following characteristics:
1. Can be used offline
2. Has an App Icon
3. App is installable

## Install necessary packages
To install all the necessary packages, run the following command

```
npm install
```

To test the offline worker locally, we need to build the application (This is because the service worker is only enabled in the Production environment as enabling it in Development environment may produce undesired results while testing due to cached assets).

## Building the application
To build the application, run the following command

```
npm run build
```
This will create a build which can be found in ./build folder.

## Deploy the app locally
To serve the app with a static server run:

```
serve -s build
```
