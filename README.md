# Workshop Graphql + Apollo + NextJs


A super small demo of how to build a GraphQL server using Apollo and how to use cache and fix some problem like n+1.
## >> [Slides](https://github.com/TunisianJS/talks/blob/master/archive/talk_2/slides/Playing%20with%20GraphQL%20using%20Apollo.pptx) <<

<p align="center">
  <img alt="workshop-graphql" src="https://github.com/TunisianJS/apollo-graphql-workshop/blob/master/workshop.jpg" />
</p>


## File structure

The app is split out into two folders (one for `server` and one for `client`):
- `client`: Client using by Nextjs
- `server`: Server handle API's version


## Installation

To run the app, run these commands in two separate terminal windows from the root:

```bash
cd server && npm install && npm start
# or 
cd server && yarn install && yarn start
```

and

```bash
cd client && npm install && npm run dev
# or
cd client && yarn install && yarn start
```
