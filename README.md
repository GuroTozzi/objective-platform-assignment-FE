# Frontend Objective platform Assignment
This is the Angular project made for the Objective platform frontend assignment.

It contains one view:
 - `<base-url>`: this is the entry point of the system, it contains the paginated list of beers (10 items per page). 
If click on the 'beer icon' is possible to add a beer to my favourite beers section. It's possible to see which are our favorite beers by clicking on the 'View favorite beers' button. It's also possible search a beer by name or by description using the two different search input.

The web app is very simple, I used the ngx-pagination module to implement the pagination, because it was a faster solution. I have however created the API which returns a paginated list. Therefore pagination can also be implemented by calling the BE.

## Project setup NPM
You can run the application using NPM

```
npm install
npm run serve

```

The app will be available at `http://localhost:4200/`.

## Project setup Docker
You can run the application using Docker:

```
docker-compose build
docker-compose up

```

The app will be available at `http://localhost:4200/`.

## Improvements
A lot of improvements could be done:

 - The beer button should be different (:hover) when I mark a beer as favourite.
 - Test suite should be included as soon as possible.
 - The "View more" button should show the details of a specific beer, retrieving the others data from the in-memory db.
 - The mobile visualization for this page should be improved.
 
Please consider that I only had 2.5 days for the test (Friday afternoon to Sunday).
