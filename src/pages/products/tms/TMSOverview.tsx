import App_layout from "@/component/layout/app_layout";
import TMSTechnology from "./MedSpaWellnessProgram";
import TMSTreatment from "./TMSTreatment";
import TMSSafety from "./TMSbenefits";
import RequestInfo from "./RequestInfo";
import TMSHero from "./tmshero";
import ProductOverview from "./productoverview";
import KeyBenefitsFeatures from "./TMSbenefits";


export default function TMSOverview() {
  return (
    <App_layout>
    
    <TMSHero/>
    <ProductOverview/>
    <TMSTechnology/>
    <TMSTreatment/>
   <KeyBenefitsFeatures/>
  <RequestInfo/>

</App_layout>
  );

}