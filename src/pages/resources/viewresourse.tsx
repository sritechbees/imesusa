import App_layout from '@/component/layout/app_layout'
import React from 'react'
import ProductVideos from './resourcespages'
import DownloadBrochures from './downloadbrochures'
import FDACompliance from './fda'
import TechnologyTimeline from './TechnologyTimeline'
import DoctorTestimonials from './DoctorTestimonials'

function viewresourse() {
  return (
    <div>
        <App_layout>
            <ProductVideos/>
            <DownloadBrochures/>
            <FDACompliance/>
            <TechnologyTimeline/>
            <DoctorTestimonials/>
        </App_layout>
    </div>
  )
}

export default viewresourse