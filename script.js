var submitt = $('.submitBtn');
var cont= $('.theEvent');

submitt.on("click", concludeEvent);

function concludeEvent () {

  var eventName= $(".eventName").val();
  var eventDes= $(".eventDes").val();
  var eventPlace= $(".eventPlace").val();

  // var faunaImg= $(".faunaImg").val();
  // var floraImg= $(".floraImg").val();
  var orgImg= $(".orgImg").val();
  var eventImg= $(".eventImg").val();
  var orgLink= $(".orgLink").val();
  // var faunaDes= $("faunaDes").val();
  // var floraDes= $("floraDes").val();
  // var eventDate= $("eventDate").val();

  cont.append(`<div class="e-cont">
      <div class="e-info1">
         <div class="e-img">
         <img src="${eventImg}" alt="">
         </div>

         <div class="about-info">
          <h1>Event: ${eventName}</h1>
          <h3>${eventDes}</h3>
          <h4>Place ${eventPlace}</h4>
        </div>
      </div>

       <div class="e-info2">
          <img src="${orgImg}" alt="">
          <br> <br>
          <button class="orgbtn"><a href="${orgLink}"></a></button>
      </div>
    </div>`);

  event.preventDefault();
}

//FILTTER

var vol9 = document.getElementById("vo9");

vol9.addEventListener('click', voL9);

function voL9() {
  document.getElementById("event1").style.display = "none";
}