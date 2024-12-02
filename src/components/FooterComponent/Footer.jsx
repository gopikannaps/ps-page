import React from 'react'
import Widget from './Widget'
import NewsLetter from './NewsLetter'
import Copyright from './Copyright'


function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
     <div className=" pl-custom-left pr-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 mt-10 py-6">

        <Widget
          title="Other Services"
          links={[
            'Property Consultant',
            'Interior Support',
            'Legal Advisory Support',
            'Housing Loan Support',
            'Property Management Support',
          ]}
        />
        <Widget
          title="Useful Links"
          links={[
            'About Us',
            'Ad Space Sales',
            'Docs & Guides',
            'News & Blogs',
            'Contact Us',
          ]}
        />
        <Widget
          title="Become"
          links={[
            'Brand',
            'Channel Partner',
            'An Affiliate',
            'Privacy Policy',
            'Terms & Condition',
          ]}
        />
        <NewsLetter />
      </div>
      <Copyright />
    </footer>
  )
}

export default Footer
