function getPhotos() {
    $("#getPhot").hide();   
    console.log("It is Working");
    $.get('https://jsonplaceholder.typicode.com/photos',function(data){
        for(let i=0;i<data.length;i++){
            var photo = data[i].url;
            $("#images").append(`<img src="${photo}"/>`);
        }
    }).fail(function(xhr,textStatus,errorThrown){
        console.log("Error: " + errorThrown)
    })
}
$("#blog").hide();
$("#form").hide();
$("#blogbtn").click(function() {
    $("#blog").show();
    $("#images").hide();
    $("#form").hide();
})
$("#homebtn").click(function() {
    $("#images").show();
    $("#blog").hide();
    
    $("#form").hide();
})
$("#forumbtn").click(function() {
    $("#form").show();
    $("#blog").hide();
    $("#images").hide();
    
})
$("#blogsubmit").click(function() {
    var btit=$("#tiform").val();
    var bcont=$("#conform").val();
    $("#blog").show();
    $("#form").hide();
    $("#blog").append(`<div id="blogbody"><div id="blogtitle">${btit}</div><div id="blogcontent">${bcont}</div></div>`)

});
$("#getpho").click(getPhotos);