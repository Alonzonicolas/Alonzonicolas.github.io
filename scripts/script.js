fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.education.forEach(element => {
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

    console.log(data);
  })
  .catch(error => console.error(error));



  