
(function() {

    function classAnimation(elems, waitinms) {

        let current = 0;

        setInterval(() => {
            current = current === (elems.length -1)  ? 0 : current + 1;

            elems.forEach((elem, ind) => {
                if(ind === current) {
                    elem.classList.remove("hidden");
                    //console.log("Show:", current, elem.classList);
                } else {
                    elem.classList.add("hidden");
                }
            })


        }, waitinms)

    }

    // Animate logos at the top
    classAnimation([
        document.querySelector("#devconLogo"),
        // document.querySelector("#devconTitle")
    ], 5000);


    //Responsive menu toggler



    document.querySelector("#burgerMenu").addEventListener('click', (e) => {
        //console.log("CLICK!");
        document.querySelector("nav").classList.toggle("hidden");

    });


    window.addEventListener('click', (e) => {
        const elem = e.target;
        //console.log("CLICK on window!", elem.classList.contains("burger-menu"));
        if(!elem.classList.contains("burger-menu")) {
            const navigation = document.querySelector("nav");
            if(!navigation.classList.contains("hidden")) {
                document.querySelector("nav").classList.add("hidden");
            }

        }




    });


})();

