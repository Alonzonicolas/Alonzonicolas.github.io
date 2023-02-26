fetch('data.json')
  .then(response => response.json())
  .then(dataCV => {

    document.getElementById('nav-img-profile').src = dataCV.picture.thumbnail;

    const img = document.createElement('img');
    document.getElementById('profile').appendChild(img);
    img.setAttribute('class', 'rounded');
    img.src = dataCV.picture.large;
    const name = document.createElement('h2');
    document.getElementById('profile').appendChild(name);
    name.innerHTML = dataCV.name.first + ' ' + dataCV.name.last;

    document.getElementById('location').innerHTML += dataCV.location.street.name + ' ' + dataCV.location.street.number + ', ' + dataCV.location.city + ' - ' + dataCV.location.state + ' - ' + dataCV.location.country;
    document.getElementById('phone').innerHTML += dataCV.phone;
    document.getElementById('email').innerHTML += dataCV.email;

    document.getElementById('summary').innerHTML = dataCV.summary;

    dataCV.education.forEach(element => {
      const div = document.createElement('div');
      document.getElementById('education').appendChild(div);
      const years = document.createElement('p');
      div.appendChild(years);
      years.innerHTML = element.start_date + ' - ' + element.end_date;
      const degree = document.createElement("h3");
      div.appendChild(degree);
      degree.innerHTML = element.degree;
      const institution = document.createElement('p')
      div.appendChild(institution);
      institution.innerHTML = element.institution;
      const description = document.createElement('p');
      div.appendChild(description);
      description.innerHTML = element.description;
    });

    dataCV.experience.forEach(element => {
      const div = document.createElement('div');
      document.getElementById('experience').appendChild(div);
      const years = document.createElement('p');
      div.appendChild(years);
      years.innerHTML = element.start_date + ' - ' + element.end_date;
      const company = document.createElement("h3");
      div.appendChild(company);
      company.innerHTML = element.company;
      const position = document.createElement('p')
      div.appendChild(position);
      position.innerHTML = element.position;
      const description = document.createElement('p');
      div.appendChild(description);
      description.innerHTML = element.description;
    });

    dataCV.skills.forEach(element => {
      const skill = document.createElement('li');
      document.getElementById('skill').appendChild(skill);
      skill.innerHTML = element;
    })

    dataCV.languages.forEach(element => {
      const language = document.createElement('li');
      document.getElementById('language').appendChild(language);
      language.innerHTML = element;
    })

    console.log(data);
  })
  .catch(error => console.error(error));



  