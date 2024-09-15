document.addEventListener("DOMContentLoaded", () => { 
    const images = document.querySelectorAll("img");

    for (const image of images) { 
        fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
        .then(response => response.json()) // Parse JSON instead of text
        .then(data =>  {
            if (data.length > 0 && data[0].url) {
                image.src = data[0].url; // Access the image URL from the JSON array
                image.width = 100;
                image.height = 100;
            }
        })
        .catch(error => console.error('Error fetching the image:', error)); // Handle errors
    }
});