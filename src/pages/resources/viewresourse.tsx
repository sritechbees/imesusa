import App_layout from '@/component/layout/app_layout'
import React from 'react'
import ProductVideos from './resourcespages'
import DownloadBrochures from './downloadbrochures'
import FDACompliance from './fda'
import TechnologyTimeline from './TechnologyTimeline'
import DoctorTestimonials from './DoctorTestimonials'

function viewresourse() {
  return (
     <App_layout>
    <div className='py-16'>    
            <ProductVideos/>
            <DownloadBrochures/>
            <FDACompliance/>
            <TechnologyTimeline/>
            <DoctorTestimonials/>    
    </div>
     </App_layout>
  )
}

export default viewresourse