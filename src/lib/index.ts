export const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    const navbarHeight = 150;
    if (element) {
        window.scrollTo({
            top: element.offsetTop - navbarHeight,
            behavior: "smooth",
        });
    }
};
