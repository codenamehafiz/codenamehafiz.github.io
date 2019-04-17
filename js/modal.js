function loadModal(name) {
    headerModal(name);
    
    var xhttp;
    if (window.XMLHttpRequest) {
      // code for modern browsers
      xhttp = new XMLHttpRequest();
    } else {
      // code for IE6, IE5
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("modal-main").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "modal/" +name+ ".html", true);
    xhttp.send();

    $('#detailsModal').modal('show');
}

function headerModal(name){
  if(name == 'gargeon'){
    $('#project-img').attr('src', 'img/project/'+name+'.png');
    $('#project-name').html('GarGeon');
    $('#project-desc').html('An online-based waste & recycling platform that solves the challenges of the oldest waste industry by using technology.');
  }

  if(name == 'shtj'){
    $('#project-img').attr('src', 'img/project/'+name+'.png');
    $('#project-name').html('Sistem Hasil Tanah Johor (SHTJ)');
    $('#project-desc').html('A web application that track, calculate and manage the land tax of 14 different district in the state of Johor, Malaysia.');
  }

  if(name == 'kiasu'){
    $('#project-img').attr('src', 'img/project/'+name+'.png');
    $('#project-name').html('Kiasu Perks');
    $('#project-desc').html('A mobile application that let users to get discount coupons to be used in many different shops & services all around the world.');
  }

  if(name == 'ptnj'){
    $('#project-img').attr('src', 'img/project/'+name+'.png');
    $('#project-name').html('PTNJ Booking System');
    $('#project-desc').html('An online booking form for a trip to Desaru from Singapore or vise versa.');
  }
}