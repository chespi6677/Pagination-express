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

![Image text](https://github.com/chespi6677/Pagination-express/blob/main/json_one.png)

where if we change the page to 2 it returns the following data:



![Image text](https://github.com/chespi6677/Pagination-express/blob/main/json_two.png)



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
