# Workshop Graphql + Apollo + NextJs

A super small demo of how to build a GraphQL server using Apollo and how to use cache and fix some problem like n+1.

Slides from the original presentation accompanying the demo:

https://docs.google.com/presentation/d/1lBCASOxG3c4i5fkY6x-f325lXFr6WosQ


<p align="center">
  <img alt="svelte-mindmap" src="https://github.com/TunisianJS/apollo-graphql-workshop/blob/master/workshop.jpg" />
</p>


## File structure

The app is split out into two folders (one for `server` and one for `client`):
- `client`: Client using by nextjs
- `server`: Server handle API's version

## Installation

To run the app, run these commands in two separate terminal windows from the root:

```bash
cd server && npm install && npm start
```
or

```bash
cd server && yarn install && yarn start
```

and

```bash
cd client && npm install && npm run dev
```
or

```bash
cd client && yarn install && yarn start
```
