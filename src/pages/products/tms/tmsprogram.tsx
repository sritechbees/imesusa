import React from 'react'
import ProductOverview from './productoverview'
import MedSpaWellnessProgram from './MedSpaWellnessProgram'
import App_layout from '@/component/layout/app_layout'
import TMSTreatment from './TMSTreatment'
import KeyBenefitsFeatures from './TMSbenefits'
import RequestInfo from './RequestInfo'



function Tmsprogram() {
  return (
   <App_layout>
 <div className='mt-16'>
    <ProductOverview/>
<MedSpaWellnessProgram/>
  <TMSTreatment/>
   <KeyBenefitsFeatures/> 
   <RequestInfo/>
 </div>

</App_layout>
   
  )
}

export default Tmsprogram