//Create a smooth scroll effect when navigate using # tag
//using jquery 2.1.3
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



//Add a hover effect for the table
//Column will be highlighted when mouseover
//Hover color is defined in html4tohtml5refactor.css under td.hovered
function addColumnHover(table) {
     var HOVER_CLASS = 'hovered';
     var hovered;

     //toggle 'hovered' class to highlight the cells
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

     //toggle 'hovered' class to disable the highlight
     table.addEventListener('mouseout', function (e) {
         hovered && hovered.forEach(function (cell) {
             cell.classList.remove(HOVER_CLASS);
         });
         hovered = null;
     }, true);
 }