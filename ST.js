function getPhotos() {
    console.log("It is Working");
    $.get('https://jsonplaceholder.typicode.com/photos',function(data){
        for(let i=0;i<data.length;i++){
            var photo = data[i].url;
            $("section").append(`<img src="${photo}"/>`);
        }
    }).fail(function(xhr,textStatus,errorThrown){
        console.log("Error: " + errorThrown)
    })
}
$("#getpho").click(getPhotos());