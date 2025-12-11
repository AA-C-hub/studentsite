document.addEventListener('DOMContentLoaded', () => {

    //ENABLE MOBILE MENU BUTTON
    const sitenav = document.querySelector(".site-nav");
    const menubutton = document.querySelector(".menubutton");

    console.log(sitenav);
    console.log(menubutton);

    menubutton.onclick = () => {
  
    // IF MENU IS CLOSED, OPEN IT, ELSE CLOSE IT
    if (sitenav.getAttribute("data-menustate") === "open") {
    sitenav.setAttribute("data-menustate", "closed");
    } else {
    sitenav.setAttribute("data-menustate", "open");
    };
    };
    //Remove the data-attriute on resize
    window.onresize = () => {
        sitenav.removeAttribute("data-menustate");
    };

    //SCROLL TRIGGER ANIMATION
    // CHANGE ACTIVE STATE FOR ALL TARGET ELEMENTS WITH INTERSECTION OBSERVER
    const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
         entry.target.setAttribute("data-viewstate", "active");
        } else {
         entry.target.setAttribute("data-viewstate", "innactive");
        };   
        });  
    });
  
    const mytargets = document.querySelectorAll('.observe-me');
        mytargets.forEach((el) => {
        myobserver.observe(el);
    });

});