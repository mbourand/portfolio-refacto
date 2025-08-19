export const scrollToId = (id: string) => {
  const element = document.getElementById(id)
  if (!element) return

  const isBiggerThanWindow = element.getBoundingClientRect().height > window.innerHeight
  if (isBiggerThanWindow) {
    const top = element.getBoundingClientRect().top + window.scrollY
    const thirdOfWindowHeight = window.innerHeight / 5

    window.scrollTo({
      top: top - thirdOfWindowHeight,
      behavior: 'smooth'
    })
  } else {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }
}
