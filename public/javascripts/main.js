function create(data){
    console.log(data)
    fetch('/',{
        method:'POST',
        body: data
    }).then(function(res){
        // document.getElementById('photo').remove()
        // document.getElementById('message').innerText = 'Post created'
        window.location.reload()
    })
}


function photoSubmit() {
    const photoInput = document.getElementById("photo").files[0];
    const formData = new FormData();
    formData.append("photo", photoInput);
    create(formData)


}

