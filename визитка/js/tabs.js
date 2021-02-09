let tabHeader = document.getElementsByClassName("tabs")[0];
let tabBody = document.getElementsByClassName("content")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

$(".portfolio").hide();
$(".contact").hide();

for (let i=0; i<tabsPane.length; i++){
    tabsPane[i].addEventListener("click", function() {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");
        $(".content").children("div").hide();
        $(".content").children("div").eq(i).show();
        });
};
