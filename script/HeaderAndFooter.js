window.onload = function() {
    addHeader();
    addFooter();

    function addHeader() {
        const template = document.createElement('template');
        template.innerHTML = `
            <div id="header-container">
                <div id="header-line-container">
                    <a href="/" id="header-left"><h1>Antonin Laclautre</h1></a>
                    <nav id="header-right">
                        <a href="/" class="link-header">Home</a>
                        <a href="./template/projects" class="link-header">Projects</a>
                        <a href="./template/contact" class="link-header">Contact</a>
                        <a href="https://www.linkedin.com/in/antonin-laclautre/" class="link-header" id="linkedin-header"><i class="fa-brands fa-linkedin" style="color: #0965c1;"></i></a>
                    </nav>
                </div>
            </div>
        `
        document.getElementById("header").appendChild(template.content.cloneNode(true));

        var current_page = document.getElementById("page").getAttribute("data");
        switch (current_page) {
            case "Home":
                document.getElementsByClassName("link-header")[0].classList.add("active");
                break;
            case "Projects":
                document.getElementsByClassName("link-header")[1].classList.add("active");
                break;
            case "Contact":
                document.getElementsByClassName("link-header")[2].classList.add("active");
                break;
        }
    }

    function addFooter(){
        const template = document.createElement('template');
        template.innerHTML = `
            <div id="footer-container">
                <div id="footer-line-container">
                    <strong>
                        Developed by Antonin Laclautre | 2024
                        <br>
                        Heavily inspired by Joeb Rogers
                    </strong>
                </div>
            </div>
        `
        document.getElementById("footer").appendChild(template.content.cloneNode(true));
    }
}





