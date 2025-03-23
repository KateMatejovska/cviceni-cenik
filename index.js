const selectPlan = (planNumber) => {
    const elRemove1 = document.querySelector('#plan1');
    elRemove1.classList.remove('plan--selected');
    const elRemove2 = document.querySelector('#plan2');
    elRemove2.classList.remove('plan--selected');
    const elRemove3 = document.querySelector('#plan3');
    elRemove3.classList.remove('plan--selected');    
    
    const elPlan = document.getElementById(planNumber);
    elPlan.classList.add('plan--selected');    
}

selectPlan ('plan1');
selectPlan ('plan2');
selectPlan ('plan3');