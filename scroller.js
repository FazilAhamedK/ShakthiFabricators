let scrollToTopButton = document.getElementById("scroll-to-top-button");
console.log(scrollToTopButton);

window.onscroll = () => scrollFunction();

function scrollFunction()
{
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250)
    {
        scrollToTopButton.style.display = "flex";
    }
    else
    {
        scrollToTopButton.style.display = "none";
    }
}

scrollToTopButton.addEventListener("click", () =>
                                            {
                                                document.body.scrollTop = 0;
                                                document.documentElement.scrollTop = 0;
                                            });