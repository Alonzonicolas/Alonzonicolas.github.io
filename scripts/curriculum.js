let myData;

fetch('data.json')
  .then(response => response.json())
  .then(dataCV => {

    document.getElementById('nav-img-profile').src = dataCV.picture;

    const img = document.createElement('img');
    document.getElementById('profile').appendChild(img);
    img.setAttribute('class', 'rounded');
    img.setAttribute('id', 'profile-img');
    img.src = dataCV.picture;
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

      const divButtons = document.createElement('div');
      div.appendChild(divButtons);
      divButtons.setAttribute('class', 'button_float hidden');
      const buttonPen = document.createElement('button');
      divButtons.appendChild(buttonPen);
      buttonPen.setAttribute('class', 'button_edition');
      const iPen = document.createElement('i');
      buttonPen.appendChild(iPen);
      iPen.setAttribute('class', 'fa fa-pen');

      const buttonTrash = document.createElement('button');
      divButtons.appendChild(buttonTrash);
      buttonTrash.setAttribute('class', 'button_edition');
      const iTrash = document.createElement('i');
      buttonTrash.appendChild(iTrash);
      iTrash.setAttribute('class', 'fa fa-trash');

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

      buttonTrash.addEventListener('click', function() {
        const confirmDelete = confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
          div.remove();
        }
      });

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

    myData = dataCV;
    console.log(dataCV);
  })
  .catch(error => console.error(error));



  document.getElementById('edition').addEventListener('click', function() {
    const elements = document.getElementsByClassName('hidden');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'block';
    }
  });

  document.getElementById('confirm').addEventListener('click', function() {
    const elements = document.getElementsByClassName('hidden');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }
  });
  




let formProfile = false;

document.getElementById('btn-profile-img').addEventListener('click', function() {
  if (formProfile) {
    document.getElementById('profile').querySelector('form').remove();
    formProfile = false;
  } else {
    const form = document.createElement('form');
    document.getElementById('profile').appendChild(form);
    const link = document.createElement('label');
    form.appendChild(link);
    link.innerHTML = 'SRC: ';
    const imgLink = document.createElement('input');
    form.appendChild(imgLink);
    imgLink.setAttribute('type', 'text');

    const confirm = document.createElement('button');
    form.appendChild(confirm);
    confirm.setAttribute('type', 'submit');
    confirm.setAttribute('id', 'confirm-profile');
    confirm.innerHTML = 'Confirm';

    const cancel = document.createElement('button');
    form.appendChild(cancel);
    cancel.innerHTML = 'Cancel';
    cancel.addEventListener('click', function() {
      form.remove();
      formOpen = false;
    });

    confirm.addEventListener('click', function() {
      document.getElementById('profile-img').src = imgLink.value;
      form.remove();
      formProfile = false;
    });

    formProfile = true;
  }
});




let formContact = false;

document.getElementById('btn-contact').addEventListener('click', function() {
  if (formContact) {
    document.getElementById('contact').querySelector('form').remove();
    formContact = false;
  } else {
    const form = document.createElement('form');
    document.getElementById('contact').appendChild(form);
    const div1 = document.createElement('div');
    form.appendChild(div1);

    const location = document.createElement('label');
    div1.appendChild(location);
    location.innerHTML = 'Location: ';
    const locat = document.createElement('input');
    div1.appendChild(locat);
    locat.setAttribute('type', 'text');
    locat.style.width = '50%';
    locat.value = document.getElementById('location').textContent; 

    const div2 = document.createElement('div');
    form.appendChild(div2);
    const phone = document.createElement('label');
    div2.appendChild(phone);
    phone.innerHTML = 'Phone: ';
    const phon = document.createElement('input');
    div2.appendChild(phon);
    phon.setAttribute('type', 'text');
    phon.style.width = '50%';
    phon.value = document.getElementById('phone').textContent;

    const div3 = document.createElement('div');
    form.appendChild(div3);
    const email = document.createElement('label');
    div3.appendChild(email);
    email.innerHTML = 'Email: ';
    const mail = document.createElement('input');
    div3.appendChild(mail);
    mail.setAttribute('type', 'text');
    mail.style.width = '50%';
    mail.value = document.getElementById('email').textContent;

    const confirm = document.createElement('button');
    form.appendChild(confirm);
    confirm.setAttribute('type', 'submit');
    confirm.setAttribute('id', 'confirm-profile');
    confirm.innerHTML = 'Confirm';
    confirm.addEventListener('click', function() {
      document.getElementById('location').innerHTML = locat.value;
      document.getElementById('phone').innerHTML = phon.value;
      document.getElementById('email').innerHTML = mail.value;
      form.remove();
      formContact = false;
    });

    const cancel = document.createElement('button');
    form.appendChild(cancel);
    cancel.innerHTML = 'Cancel';
    cancel.addEventListener('click', function() {
      form.remove();
      formContact = false;
    });

    formContact = true;
  }
});




let formSummary = false;

document.getElementById('btn-summary').addEventListener('click', function() {
  if (formSummary) {
    document.getElementById('summary').querySelector('form').remove();
    formSummary = false;
  } else {
    const form = document.createElement('form');
    document.getElementById('summary').appendChild(form);
    const textarea = document.createElement('textarea');
    form.appendChild(textarea);
    textarea.setAttribute('rows', 10);
    textarea.innerHTML = document.getElementById('summary').textContent;   

    const confirm = document.createElement('button');
    form.appendChild(confirm);
    confirm.setAttribute('type', 'submit');
    confirm.setAttribute('id', 'confirm-summary');
    confirm.innerHTML = 'Confirm';
    confirm.addEventListener('click', function() {
      document.getElementById('summary').innerHTML = textarea.value;
      form.remove();
      formSummary = false;
    });

    const cancel = document.createElement('button');
    form.appendChild(cancel);
    cancel.innerHTML = 'Cancel';
    cancel.addEventListener('click', function() {
      form.remove();
      formSummary = false;
    });  
  
    formSummary = true;
  }
});




let formEducation = false;

document.getElementById('btn-education').addEventListener('click', function() {
  if (formEducation) {
    document.getElementById('education').querySelector('form').remove();
    formEducation = false;
  } else {
    const form = document.createElement('form');
    document.getElementById('education').appendChild(form);
    const div1 = document.createElement('div');
    form.appendChild(div1);

    const date = document.createElement('label');
    div1.appendChild(date);
    date.innerHTML = 'Start and End Date: ';
    const dat = document.createElement('input');
    div1.appendChild(dat);
    dat.setAttribute('type', 'text');
    dat.style.width = '50%';

    const div2 = document.createElement('div');
    form.appendChild(div2);
    const degree = document.createElement('label');
    div2.appendChild(degree);
    degree.innerHTML = 'Degree: ';
    const deg = document.createElement('input');
    div2.appendChild(deg);
    deg.setAttribute('type', 'text');
    deg.style.width = '50%';

    const div3 = document.createElement('div');
    form.appendChild(div3);
    const institution = document.createElement('label');
    div3.appendChild(institution);
    institution.innerHTML = 'Institution: ';
    const instit = document.createElement('input');
    div3.appendChild(instit);
    instit.setAttribute('type', 'text');
    instit.style.width = '50%';

    const div4 = document.createElement('div');
    form.appendChild(div4);
    const description = document.createElement('label');
    div4.appendChild(description);
    description.innerHTML = 'Description: ';
    const descrip = document.createElement('input');
    div4.appendChild(descrip);
    descrip.setAttribute('type', 'text');
    descrip.style.width = '50%';

    const confirm = document.createElement('button');
    form.appendChild(confirm);
    confirm.setAttribute('type', 'submit');
    confirm.setAttribute('id', 'confirm-profile');
    confirm.innerHTML = 'Confirm';
    confirm.addEventListener('click', function() {

      const div = document.createElement('div');
      document.getElementById('education').appendChild(div);

      const divButtons = document.createElement('div');
      div.appendChild(divButtons);
      divButtons.setAttribute('class', 'button_float hidden');
      const buttonPen = document.createElement('button');
      divButtons.appendChild(buttonPen);
      buttonPen.setAttribute('class', 'button_edition');
      const iPen = document.createElement('i');
      buttonPen.appendChild(iPen);
      iPen.setAttribute('class', 'fa fa-pen');

      const buttonTrash = document.createElement('button');
      divButtons.appendChild(buttonTrash);
      buttonTrash.setAttribute('class', 'button_edition');
      const iTrash = document.createElement('i');
      buttonTrash.appendChild(iTrash);
      iTrash.setAttribute('class', 'fa fa-trash');

      const years = document.createElement('p');
      div.appendChild(years);
      years.innerHTML = dat.value;
      const degree = document.createElement("h3");
      div.appendChild(degree);
      degree.innerHTML = deg.value;
      const institution = document.createElement('p')
      div.appendChild(institution);
      institution.innerHTML = instit.value;
      const description = document.createElement('p');
      div.appendChild(description);
      description.innerHTML = descrip.value;
      
      form.remove();
      formEducation = false;
    });

    

    const cancel = document.createElement('button');
    form.appendChild(cancel);
    cancel.innerHTML = 'Cancel';
    cancel.addEventListener('click', function() {
      form.remove();
      formEducation = false;
    });

    formEducation = true;
  }
});