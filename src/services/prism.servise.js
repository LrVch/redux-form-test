const isDeploy = process.env.REACT_APP_GH_PAGES
const projectName = process.env.REACT_APP_PROJECT_NAME

const root = isDeploy ? `/${projectName}` : ''

export default class PrismService {
  static styleRef = null
  static stylePrevRef = null

  static changeTheme(theme) {
    this.stylePrevRef = this.styleRef
    this.styleRef = document.createElement('link')
    this.styleRef.rel = 'stylesheet'
    this.styleRef.type = 'text/css'
    document.head.appendChild(this.styleRef)

    return new Promise((res, rej) => {
      this.styleRef.href = `${root}/styles/prismjs/themes/${theme}.css`

      this.styleRef.onload = () => {
        this.stylePrevRef && document.head.removeChild(this.stylePrevRef)
        setTimeout(() => {
          res(theme)
        })
        // console.log('theme loaded ', theme)
      }

      this.styleRef.onerror = () => rej()
    })
  }
}