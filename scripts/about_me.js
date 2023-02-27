fetch('data.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('nav-img-profile').src = data.picture;

    data.about_me.forEach(element => {
        const about = document.createElement('p');
        document.getElementById('about').appendChild(about);
        about.innerHTML = element;
      })

  })
  .catch(error => console.error(error));