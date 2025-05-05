export const handleScroll = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbarHeight = document.querySelector("nav").offsetHeight;
    const offsetTop =
      section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};
