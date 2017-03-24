$(document).ready(function(){
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop':  $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
        addColumnHover(document.querySelector('table'));
});




function addColumnHover(table) {
     var HOVER_CLASS = 'hovered';
     var hovered;

     table.addEventListener('mouseover', function (e) {
         if (e.target.tagName.toLowerCase() == 'td') {
             var index = e.target.cellIndex;

             hovered && hovered.forEach(function (cell) {
                 cell.classList.remove(HOVER_CLASS);
             });

             hovered = Array.prototype.map.call(
                 table.rows,
                 function (row) {
                     var i = index;
                     while (!cell && i >= 0) {
                         var cell = row.cells[i];
                         i -= 1;
                     }
                     return cell;
                 }
             );

             hovered.forEach(function (cell) {
                 cell.classList.add(HOVER_CLASS);
             });
         }
     }, true);

     table.addEventListener('mouseout', function (e) {
         hovered && hovered.forEach(function (cell) {
             cell.classList.remove(HOVER_CLASS);
         });
         hovered = null;
     }, true);
 }