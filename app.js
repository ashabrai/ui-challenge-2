'use strict'

let uiFunctions = {};

uiFunctions.toggleCheckbox = () => {
    $('#checkedbox').on('click', '.check', function(){
        $(this).prev().click()
    })
}

uiFunctions.selectRadio =() =>{
    $('#radio').on('click', '.radio', function(){
        $(this).prev().click()
    })
}
uiFunctions.preventRefresh =() =>{
    $('#ui-challenge').submit((e)=>{
        return false;
    })
}

uiFunctions.initIndexPage =() =>{
    uiFunctions.toggleCheckbox();
    uiFunctions.selectRadio();
    uiFunctions.preventRefresh();
}