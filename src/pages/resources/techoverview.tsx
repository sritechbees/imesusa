import App_layout from '@/component/layout/app_layout'
import React from 'react'
import TechnologyTimeline from './TechnologyTimeline'
import DoctorTestimonials from './DoctorTestimonials'

function techoverview() {
  return (
          <App_layout>
    <div className='mt-16'>
  
            <TechnologyTimeline/>
            <DoctorTestimonials/>
          
    </div>
      </App_layout>
  )
}

export default techoverview