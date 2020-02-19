document.addEventListener("DOMContentLoaded", function (event) {
    window.addEventListener('scroll',function () {
        if(window.pageYOffset>=60){

            document.getElementsByClassName("second_tier")[0].style.position="fixed";
            document.getElementsByClassName("second_tier")[0].style.boxShadow="0px 5px 20px rgba(50, 50, 50, 0.75)";
            document.getElementsByClassName("first_tier")[0].style.marginBottom="50px";

        }else{
            document.getElementsByClassName("second_tier")[0].style.position="inherit";
            document.getElementsByClassName("first_tier")[0].style.marginBottom="0";
            document.getElementsByClassName("second_tier")[0].style.boxShadow="none";

        }

    })

})