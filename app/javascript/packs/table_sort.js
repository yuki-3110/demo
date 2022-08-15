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











// $ ->
//   $('.table-sortable').sortable
//     axis: 'y'
//     items: '.item'
//
//     update: (e, ui) ->
//       item = ui.item
//       item_data = item.data()
//       params = { _method: 'put' }
//       params[item_data.modelName] = { row_order_position: item.index() }
//       $.ajax
//         type: 'POST'
//         url: item_data.updateUrl
//         dataType: 'json'
//         data: params









// $(function(){
//   $('.table-sortable').sortable({
//     update: function(e, ui){
//       var item = ui.item;
//       var item_data = item.data();
//       var params = {_method: 'put'};
//       params[item_data.modelName] = { row_order_position: item.index() }
//       $.ajax({
//         type: 'POST',
//         url: item_data.updateUrl,
//         dataType: 'json',
//         data: params
//       });
//     }
//   });
// });
