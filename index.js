function watchForm() {
    $('#numberofpics').submit(function(e) {
        e.preventDefault();
        var images = document.getElementById("images").value;
        getImages(images);
    })
}

function getImages(images) {
    fetch(`https://dog.ceo/api/breeds/image/random/${images}`)
        .then (response => response.json())
        .then (responseJson => console.log(responseJson))
        .catch(error => alert ('There was an error, please try again.'));
}

$(function() {
    console.log('Form is ready! Waiting for submit');
    watchForm();
});
