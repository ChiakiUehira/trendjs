
export default (to, from) => {
  const fromLen = [...new Set(from.fullPath.split('/'))].length
  const toLen = [...new Set(to.fullPath.split('/'))].length
  return +fromLen < +toLen ? 'slide-left' : 'slide-right'
}