import App_layout from '@/component/layout/app_layout'
import React from 'react'
import TechnologyTimeline from './TechnologyTimeline'
import DoctorTestimonials from './DoctorTestimonials'

function techoverview() {
  return (
    <div>
        <App_layout>
            <TechnologyTimeline/>
            <DoctorTestimonials/>
            </App_layout>
    </div>
  )
}

export default techoverview