async function shortURL() {
    const longUrl = document.getElementById("url").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${longUrl}`);
    if (response.ok) {
        const shortUrl = await response.text();
        document.getElementById('result').innerHTML = `
        Your shortend URL : <a class="shortURL" href="${shortUrl }" target="_blank">${shortUrl}</a>`;
    }
    else{
        document.getElementById('result').innerHTML = "Error shortening"
    }

}