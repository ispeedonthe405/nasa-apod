//https://api.nasa.gov/planetary/apod?api_key=

function getAPOD() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('apodTitle').innerHTML = data.title;
        document.getElementById('apodDate').innerHTML = data.date;
        if(data.media_type === 'video') {
            document.getElementById('apodImage').style.display = 'none';
            document.getElementById('apodVideo').style.display = 'block';
            document.getElementById('apodVideo').src = data.url;
        }
        else {
            document.getElementById('apodImage').style.display = 'block';
            document.getElementById('apodVideo').style.display = 'none';
            document.getElementById('apodImage').src = data.url;
        }
        
        document.getElementById('apodExplanation').innerHTML = data.explanation;
    })
}

document.onload = getAPOD();