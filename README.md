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

<div class="container-grid-pagination py-5">
  <div class="centrar-grid">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        {{#if previousPage}}
        <li class="page-item">
          <a href="/page/{{previousPage}}" class="page-link color-btn">
            <i class="fas fa-angle-left"></i>
          </a>
        </li>
        {{/if}}
        {{#if pageActive}}
        <li class="page-item active">
          <a class="page-link" href="/page/{{pageActive}}">{{pageActive}}</a>
        </li>
        {{/if}}
        {{#each pages}}
        <li class="page-item">
          <a class="page-link" href="/page/{{items}}">{{items}}</a>
        </li>
        {{/each}}
        {{#if nextPage}}
          <li class="page-item">
            <a href="/page/{{nextPage}}" class="page-link color-btn">
            <i class="fas fa-chevron-right"></i></a>
          </li>
        </form>
        {{/if}}
      </ul>
    </nav>
  </div>
</div>

image one example:

image two example:

to display the products from the database in the following path:

app.get('/page/:page', async (req, res) => { 
  const optedPage=parseInt(req.params.page);
  const total = await pool.query('SELECT count(name) as "total" FROM product');
  const limit = result._limit;
  const page = result.actualPage;
  const offset = (page - 1) * limit;  
  await pool.query(
    "select * from product ORDER BY id DESC limit " + limit + " OFFSET " + offset,
    function (err, results) {
      if (err) throw err;
      let resulProducts = {
        productPerPage: results.length,
        pageNumber: page,
        product: results,
      };
      res.render("index", {
        resulProducts,
        previousPage:result.previousPage,
        pageActive:result.pageActive,
        pages:result.pages,
        nextPage:result.nextPage,
        lastPage:result.lastPage
      });
    }
  );
});
