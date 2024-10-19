export const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
  if (!ref.current) return;

  const isBiggerThanWindow =
    ref.current.getBoundingClientRect().height > window.innerHeight;
  if (isBiggerThanWindow) {
    const top = ref.current.getBoundingClientRect().top + window.scrollY;
    const thirdOfWindowHeight = window.innerHeight / 5;

    window.scrollTo({
      top: top - thirdOfWindowHeight,
      behavior: "smooth",
    });
  } else {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};
