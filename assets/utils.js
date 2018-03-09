
export const optimizeGitHubLink = (html, author, name) => {
  const prefix = `https://github.com/${author}/${name}/blob/master/`
  const suffix = '?raw=true'
  const dom = document.createElement('div')
  dom.innerHTML = html
  const imgs = dom.querySelectorAll('img')
  imgs.forEach(img => {
    const src = img.getAttribute('src')
    if (!src.includes('http')) {
      img.src = prefix + src + suffix
    }
  })
  return dom.innerHTML
}