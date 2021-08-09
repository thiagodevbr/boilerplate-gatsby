import * as React from 'react'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
