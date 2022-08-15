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
  var sortable = Sortable.create(el);  
})

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
