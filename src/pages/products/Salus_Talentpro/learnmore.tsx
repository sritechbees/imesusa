import React from 'react'
import PainManagement from './PainManagement'
import TechnologyFeatures from './TechnologyFeatures'
import ClinicalBenefits from './ClinicalBenefits'
import HealthcareSettings from './HealthcareSettings'
import RemedOverview from './salus_talentpro'
import App_layout from '@/component/layout/app_layout'

function Learnmore() {
  return (
    <App_layout>
    <div className='mt-28'>
        <RemedOverview/>
        <PainManagement/>
        <TechnologyFeatures/>
        <ClinicalBenefits/>
        <HealthcareSettings/>
        </div>
        </App_layout>
  )
}

export default Learnmore