install dependency for pagination
$npm i express-pagination-rbh

In our project we import the pagination dependency as follows.

const list = require('express-pagination-rbh');

in our view we send the following parameters as follows:
* where it receives as limitItems the total number of products to display.
* where TotalProducts is the total of products.
* where page is the page number.

const limitItems = 56;
const TotalProducts= 11328;
const page= 1;

const result = list.paginate(limitItems,TotalProducts,page);

as output it returns the following data:

{
  previousPage: [],
  pageActive: [ 1 ],
  pages: [ { items: 2 }, { items: 3 }, { items: 4 }, { items: 5 } ],
  nextPage: [ 6 ],
  lastPage: [ 202 ],
  _limit: 56,
  actualPage: 1
}

where if we change the page to 2 it returns the following data:

{
  previousPage: [ 1 ],
  pageActive: [ 2 ],
  pages: [ { items: 3 }, { items: 4 }, { items: 5 }, { items: 6 } ],
  nextPage: [ 7 ],
  lastPage: [ 202 ],
  _limit: 56,
  actualPage: 2
}

since with the data we can perform the pagination with bootstrap:

example made in express-handlebars.
![Image text](https://github.com/chespi6677/Pagination-express/blob/main/pagination_one.png)

![Image text](https://github.com/chespi6677/Pagination-express/blob/main/pagination_two.png)


image one example:
![Image text](https://github.com/chespi6677/Pagination-express/blob/main/example_one.png)
image two example:
![Image text](https://github.com/chespi6677/Pagination-express/blob/main/example_two.png)

to display the products from the database in the following path:

![Image text](https://github.com/chespi6677/Pagination-express/blob/main/ruta.png)
