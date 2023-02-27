fetch('data.json')
  .then(response => response.json())
  .then(dataHome => {

    document.getElementById('nav-img-profile').src = dataHome.picture;

    document.getElementById('name').innerHTML = 'Hi. I am ' + dataHome.name.first + ' ' + dataHome.name.last + '. ' + dataHome.title;

  })
  .catch(error => console.error(error));