// const debounce = require('lodash.debounce');
const throttle = require('lodash.throttle');
const form = document.querySelector('form.feedback-form');
const dataKey = `feedback-form-state`;
// const dataSeparator = `::::::::::`;
const dataObj = getDataFromLocaleStorage();

fillFormField(form, dataObj);

// const onInputDebounce = debounce(onInput, 500);
const onInputThrottle = throttle(onInput, 500);

// console.log(form);

form.addEventListener('input', onInputThrottle)
form.addEventListener('submit', onSubmit)
// form.textContent

function onSubmit(event){
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const data = {};
    formData.forEach((value, name) =>{
        data[name] = value;
    });

    console.log(data);
    // console.log(email, password);    
    event.currentTarget.reset();
    localStorage.clear();
}

function onInput(event){
    const form = event.target.closest('form');
    // console.log(event);
    // console.log(form, event.target);
    // const {email, message} = form.elements;

    const formData = new FormData(form)
    // console.log(formData);
    const data = {};
    formData.forEach((value, name) =>{
        data[name] = value;
    });
    // console.log(email,message);
    // console.log(data);
    // console.log(String(data));
    // console.log(...data);
    // console.log(data.toString());
    // console.log([...data].join(';'));
    // const res = JSON.stringify(data);
    // const res2 = JSON.parse(res);
    // console.log(res,res2);
    // localStorage.setItem(dataKey,`${data.email}${dataSeparator}${data.message}`)
    localStorage.setItem(dataKey, JSON.stringify(data))
    
}

function getDataFromLocaleStorage(){
    const storageData = localStorage.getItem(dataKey);
    // console.log(storageData);
    return JSON.parse(storageData);
    // console.log(localStorage.getItem(dataKey));
    // console.log(JSON.parse(null));
    // return storageData ? JSON.parse(storageData) : null

    // if (storageData){
    //     const arr = storageData.split(dataSeparator);
    //     const email = arr[0];
    //     const message = arr[1];
    //     console.log('getDataFromLocaleStorage', email, message);
    //     return {email, message}
    // }
    // return null;
}

function fillFormField(form, data){

    const mail = form.querySelector('input');   
    const message = form.querySelector('textarea');

    // console.log(data);

    if (data) {
        // console.log("mail==>",mail);
        mail.value = data.email;
        message.value = data.message;
    }
}