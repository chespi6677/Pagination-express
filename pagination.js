'use strict';

exports.pagination = (limitItems,query,page)=>{
    let _limit=limitItems;
    let _itemsMax=5;
    let _page=_itemsMax+page;
    let actualPage=page;
  
   const total = query;
   
   const pageTotal = Math.round(total[0].total / _limit);
   
   let pages = [];
   let nextPage = [];
   let lastPage = [];
   let pageActive=[];
   let previousPage = [];
  let i;
  
   for ( i = 1; i <= pageTotal; i++) {
     if (i == page) {
       pageActive.push(i);
       if(i==1){
       }else{
        previousPage.push(i - 1);
       }     
     }
     else if (i >= page && i <= _page  ) {
       if (i == _page) {
         nextPage.push(i);
       } else {
          pages.push({items: i});
       }
     }
     else if (i == pageTotal) {
       lastPage.push(i);
     }
   }
   
   let results={
    previousPage,
    pageActive,
    pages,
    nextPage,
    lastPage,
    _limit,
    actualPage
   };
   return results;
};