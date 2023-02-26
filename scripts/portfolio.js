fetch('data.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('nav-img-profile').src = data.picture.thumbnail;

    data.portfolio.forEach(element => {
        const card = document.createElement('div');
        document.getElementById('portfolio').appendChild(card);
        card.setAttribute('class', 'card');
        const img = document.createElement('img');
        card.appendChild(img);
        img.setAttribute('class', 'card-image');
        img.src = element.img;
        const link = document.createElement('a');
        card.appendChild(link);
        link.href = element.link;
        link.setAttribute('target', '_blank');
        const titleCard = document.createElement('h2');
        link.appendChild(titleCard);
        link.setAttribute('class', 'card-content');
        titleCard.innerHTML = element.title;

        card.addEventListener('click', function() {
            return window.open(element.link, '_blank');
          });
      })

  })
  .catch(error => console.error(error));
  