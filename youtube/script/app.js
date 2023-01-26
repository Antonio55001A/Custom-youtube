let counter=0;
let navItems = document.getElementsByName('link-nav');
let rotateItem;
let pages=["NoPages","sitePages/page1.html","sitePages/page2.html","sitePages/page3.html","sitePages/page4.html","sitePages/page5.html","sitePages/page6.html","sitePages/page7.html"];


function OpenMenu(){
    console.log(counter)
    rotateItem = document.getElementById('open');

    if(counter==0){

        rotateItem.classList.add("rotate");
        document.getElementById('nav').style.width="12%";

        navItems.forEach(element => {

            element.style.flexDirection = "row";
            
        });
        counter+=1;

    }else{
        counter-=1;
        document.getElementById('nav').style.width="8%";

        navItems.forEach(element => {

            element.style.flexDirection = "column";
        });
        rotateItem.classList.remove("rotate");

    }
}

function showDiv(idInfo) {
    var div_View = document.getElementById('cont1');

    navItems.forEach(element => {
        element.style.backgroundColor = "white";
    });

    div_View.innerHTML="";
    $(div_View).load(pages[idInfo]);
          
    document.getElementById('nav'+idInfo).style.backgroundColor = 'var(--clr-grey-9)';

  }
