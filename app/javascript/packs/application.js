// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')
// 
import Sortable from 'sortablejs';
// require("jquery-ui/ui/widgets/sortable");
//
// $(function(){
//   $('.table-sortable').sortable({
//     axis: 'y',
//     items: '.item',
//
//     // Ajaxで並び順のデータをコントローラーに送信
//     update(e, ui) {
//       let item = ui.item;
//       let item_data = item.data();
//       let params = { _method: 'put' };
//       params[item_data.model_name] = { row_order_position: item.index() };
//       $.ajax({
//         type: 'POST',
//         url: item_data.update_url,
//         dataType: 'json',
//         data: params,
//       });
//     },
//
//     // ドラッグ幅をテーブルに合わせる
//     start(e, ui) {
//       let cells, tableWidth, widthForEachCell;
//       tableWidth = $(this).width();
//       cells = ui.item.children('td');
//       widthForEachCell = tableWidth / cells.length + 'px';
//       return cells.css('width', widthForEachCell);
//     },
//
//     // エフェクトを付与
//     stop(e, ui) {
//       return ui.item.children('td').effect('highlight');
//     },
//   });
// });

// require('table_sort.js')

import '../stylesheets/blog';
import 'bootstrap';
import '../stylesheets/application';
import '@fortawesome/fontawesome-free/js/all';





document.addEventListener('turbolinks:load', () => {
  var el = document.getElementById('simpleList');
  var sortable = Sortable.create(el, {
    group: "localStorage-example",
    store: {
		/**
		 * Get the order of elements. Called once during initialization.
		 * @param   {Sortable}  sortable
		 * @returns {Array}
		 */
		get: function (sortable) {
			var order = localStorage.getItem(sortable.options.group.name);
			return order ? order.split('|') : [];
		},

		/**
		 * Save the order of elements. Called onEnd (when the item is dropped).
		 * @param {Sortable}  sortable
		 */
		set: function (sortable) {
			var order = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, order.join('|'));
		}
	}
})
})


// document.addEventListener('turbolinks:load', () => {
//   var sortable = Sortable.create(el, {
//     handle: '.handle',
//     onSort: function(evt) {
//       var items = el.querySelectorAll('li');
//       for (var i = 0; i < items.length; i++) {
//           items[i].querySelector('.no').value = i + 1;
//       }
//     }
//   }
// });







{/* <script>
jQuery( function() {
    jQuery( '#simpleList' ) . sortable();
    jQuery( '#simpleList' ) . disableSelection();
    jQuery( '#simpleList' ) . sortable( {
        update: function( event, ui ) {
            var updateArray = jQuery( '#simpleList' ) . sortable( 'toArray' ) . join( ',' );
            jQuery . cookie( 'simpleList', updateArray, { expires: 1 } );
        }
    } );
    if( jQuery . cookie( 'simpleList' ) ){
        var cookieValue = jQuery . cookie( 'simpleList' ) . split( ',' ) . reverse();
        jQuery . each(
            cookieValue,
            function( index, value ){ jQuery( '#' + value ) . prependTo( '#simpleList' ); }
        );
    }
} );
</script> */}


// $(function(){
//   $("input[type=checkbox]").click(function(){
//     $.post('/blogs/' + $(this).data('id') + '/toggle');
//   });
// });


// document.addEventListener('turbolinks:load', () => {
//   var el = document.getElementById('simpleList2');
//   var sortable = Sortable.create(el);  
// })
// import './table_sort';

//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require jquery-ui/widgets/sortable // 追記
//= require jquery-ui/effects/effect-highlight // 追記
//= require bootstrap-sprockets
//= require_tree .

// require rails-ujs
// require activestorage
// require turbolinks
// require jquery
// require("jquery-ui/widgets/sortable") // 追記
// require("jquery-ui/effects/effect-highlight") // 追記
// require bootstrap-sprockets
// require_tree .

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// import "controllers"

import "controllers"
