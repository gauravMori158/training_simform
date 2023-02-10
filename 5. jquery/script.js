$(document).ready(function(){
// $('p').on( 
//     {
//         click: function(){
//             alert('click')
//         }
//     },
//     {
//         dblclick : function()
//         {
//             alert('Dbleave')
//         }
//     }
//  )

$('#btn').click(function(){
      $.post('demo.txt',{
        name : "mori",
        id :'1'
      },function(data,status){
        $('#asd').text(`Data : ${data} -> Status : ${status}`)
      })

})

});