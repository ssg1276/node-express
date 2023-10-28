
    let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        for (let ta of tablinks) {
            ta.classList.remove("active-link");
        }
        for (let tab of tabcontents) {
            tab.classList.remove("activetab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("activetab");
    }

    let sidemenu=document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
        sidemenu.style.right="-200px";
    }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwxn-25rE1p75WeyBIE6RTfb6-wPccLCpGUo3UA8uGj9JCr7N51GV1EesLT0tvKiU2D/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => 
        {msg.innerHTML="Submitted Successfully"
    setTimeout(function(){
        msg.innerHTML=""
    },5000)
    form.reset()
})
      .catch(error => console.error('Error!', error.message))
  })
