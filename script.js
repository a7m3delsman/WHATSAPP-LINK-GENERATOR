const PhoneNumber = document.getElementById('phone').value;
function generateWhatsAppLink() {
    var countryCode = document.getElementById('countryCode').value;
    var phoneNumber = document.getElementById('phone').value;
    var message = encodeURIComponent(document.getElementById('message').value);
    
    var whatsappLink = "https://wa.me/" + countryCode + phoneNumber + "?text=" + message;
    if (!phoneNumber|| countryCode <=-1) {
      
      hideButton("copyButton");
      hideDiv("whatsappLink");
      hideLink("download-button");
      document.getElementById('error').textContent = 'Please Choose a Country Code and Enter Phone Numper.';
      document.getElementById('error').style.color ='gold'
      document.getElementById('error').style.fontSize = '20px';
      hideDiv("qr-code");
      hideLink("download-button")
      return ;   
    }else{
      document.getElementById('error').textContent = '';
      nohideDiv("whatsappLink")
      nohideButton_b("copyButton");
      nohideDiv("qr-code");
      nohideLink("download-button")
    }

    document.getElementById('whatsappLink').value = whatsappLink;
  }
     
  function copyWhatsAppLink() {
    var textToCopy = document.getElementById("whatsappLink").value;
  
    navigator.clipboard.writeText(textToCopy)
      .then(function() {
        // تم نسخ النص بنجاح
        console.log("Text copied to clipboard");
        var copyButton = document.getElementById("copyButton");
        copyButton.textContent = "Copied!";
        
        setTimeout(function() {
          copyButton.textContent = "Copy Text";
          
        }, 1500);
      })
      .catch(function(error) {
        // حدث خطأ أثناء النسخ
        console.error("An error occurred while copying ", error);
      });
  }
  const generateButton = document.getElementById('generate-button');
  const qrCodeDiv = document.getElementById('qr-code');
  const qrInput = document.getElementById('whatsappLink');
  const downloadButton = document.getElementById('download-button');
  generateButton.addEventListener('click', () => {
    const url = qrInput.value;
    const countryCode = document.getElementById('countryCode').value;
 
    if (url && countryCode !=-1 && PhoneNumber !=null)  {
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const qrCodeImage = new Image();
        qrCodeImage.crossOrigin = 'Anonymous';
        qrCodeImage.onload = () => {
            canvas.width = qrCodeImage.width;
            canvas.height = qrCodeImage.height;
            
           
            context.fillStyle = 'fillRect'; 
            context.fillRect(0, 0, canvas.width, canvas.height);
            
           
            context.drawImage(qrCodeImage, 0, 0);
            
            const dataURL = canvas.toDataURL('image/png');
            downloadButton.href = dataURL;
           
           
        };
        qrCodeImage.src = apiUrl;
       
        qrCodeDiv.innerHTML = '';
        qrCodeDiv.appendChild(canvas);
      
    }
});
 
function Doownload(){
  
  document.getElementById('download-button').textContent = "Downloaded!";
  setTimeout(function() {
    document.getElementById('download-button').textContent = "Download QR Code";
  }, 1500);
}
function nohideButton(buttonId) {
  var button = document.getElementById(buttonId);
  if (button) {
     
    button.style.display = "inline";
  }
}

function nohideButton_b(buttonId) {
  var button = document.getElementById(buttonId);
  if (button) {
     
    button.style.display = 'block';
    button.style.marginLeft = '35%';
    button.style.marginRight = '30%';
  }
}
function hideButton(buttonId) {
  var button = document.getElementById(buttonId);
  if (button) {
     
    button.style.display = "none";
  }
}
function nohideDiv(divId) {
  var div = document.getElementById(divId);
  if (div) {
     
    div.style.display = "inline";
  }
}
function hideDiv(divId) {
  var div = document.getElementById(divId);
  if (div) {
     
    div.style.display = "none";
  }
}
function hideLink(linkId) {
  var link = document.getElementById(linkId);
  if (link) {
    link.style.display = "none";
  }
}
function nohideLink(linkId) {
  var link = document.getElementById(linkId);
  if (link) {
    link.style.display = "inline-block";
    link.style.marginLeft = "auto";
    link.style.marginRight = "auto";
  }
}

  var audio = new Audio('button-click.mp3');
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.getElementById('user-icon');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0%';
}
function close(){
    mainMenu.style.top = '-150%';
    return;
}
