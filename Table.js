const callPriceList = {
    50: 50,
    100: 70,
    150: 85,
    300: 95
};
const smsPriceList = {
    50: 0,
    150: 25,
    200: 40,
    400: 45
};



const call = document.getElementById("call")
const sms = document.getElementById("sms")
const callCharge = document.getElementById("callCharge")
const smsCharge = document.getElementById("smsCharge")
const total = document.getElementById("total")
const submit = document.getElementById("submit");


submit.addEventListener("click", () => {
    let callPrice = call.value
    let smsPrice = sms.value
    let priceOfCall = 0;
    let priceOfSMS = 0;

    for (let key of Object.keys(callPriceList)) {
        let temp = callPrice;
        callPrice = callPrice - key;
        if (callPrice >= 50) {
            priceOfCall += callPriceList[key] * key;
        }
        if (callPrice < 0) {
            priceOfCall += temp * callPriceList[key];
            break;
        }
    }
    for (let key of Object.keys(smsPriceList)) {
        let temp = smsPrice;
        smsPrice = smsPrice - key;
        if (smsPrice >= 50) {
            priceOfSMS += smsPriceList[key] * key;
        }
        if (smsPrice < 0) {
            priceOfSMS += temp * smsPriceList[key];
            break;
        }
    }
    callCharge.innerText = priceOfCall / 100;
    smsCharge.innerText = priceOfSMS / 100;
    total.innerText = (priceOfCall + priceOfSMS) / 100;
})