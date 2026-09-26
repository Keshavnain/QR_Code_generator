const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrBody = document.querySelector('.qr-body');

let size = sizes.value;
 generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput()
});

sizes.addEventListener('change', (e)=>{
    size = e.target.value;
    isEmptyInput()
});

downloadBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log("btn clicked");

    let img = document.querySelector('.qr-body img');

    if(img != null){
        let link = document.createElement('a');
        link.href = img.src;
        link.download = 'QR_Code.png';
        link.click();
    }
});

function isEmptyInput(){
    if(qrText.value.length > 0){
            generateQRCode();
    }
    else{
        alert("Enter the text or URL to generate QR Code");
        qrBody.innerHTML = "";
    }

    // qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate QR Code");;
}
function generateQRCode(){
    qrBody.innerHTML = "";
     new QRCode(qrBody, {
    text: qrText.value,
    width: size,
    height: size ,
    colorDark : "#000",
    colorLight : "#fff",
});
}

