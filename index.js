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
        .then (responseJson =>
            displayResults(responseJson))
        /* .catch(error => alert ('There was an error, please try again.')); */
}

function displayResults(responseJson) {
    console.log(responseJson.message);
    let arrayUrl = responseJson.message;
    for (let i=0; i<arrayUrl.length;i++) {
        $("div.images").append (
            `<img src="${arrayUrl[i]}" class="dogImages">`
        )
    }
};



$(function() {
    console.log('Form is ready! Waiting for submit');
    watchForm();
});
