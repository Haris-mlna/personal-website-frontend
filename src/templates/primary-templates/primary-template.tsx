import './primary-template.css'
import SiteNav from '@/layouts/site-nav/site-nav'
import SiteFooter from '@/layouts/site-footer/site-footer'

interface TemplateProps {
  children : React.ReactNode,
}

const TemplatePrimary = ({children} : TemplateProps) => {
  return (
    <body className={'template-primary'}>
      <SiteNav/>
      {children}
      <SiteFooter/>
    </body>
  )
}

export default TemplatePrimary