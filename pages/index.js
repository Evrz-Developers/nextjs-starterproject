import React from 'react'
import Highlight from '../components/common/Highlight'
import Table from '../components/common/Table'
import ContentWrapper from '../components/layouts/ContentWrapper'
import DefaultLayout from '../components/layouts/DefaultLayout'
import Contents from '../contents/content'

const home = () => {
  return (
    <DefaultLayout className={'h-[calc(100vh-100px)] bg-slate-400'}>
      <div className='w-full h-full flex flex-col items-center'>
        {/* Text */}
        <div className='w-full h-full flex items-center justify-center text-white text-[7rem]'>
          Hi, Developer!
        </div>
        <a href='/help' className=' text-color-label-text text-[2rem]'>Need help?</a>

      </div>
    </DefaultLayout>
  )
}

export default home