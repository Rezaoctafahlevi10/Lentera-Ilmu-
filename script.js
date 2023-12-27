function validate(){
    var name = document.getElementById("nama").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("pesan").value;
    var error_message = document.getElementById("error_message");
    
    const submit = document.getElementById('submit')
    submit.onclick = function(){
    document.body.style.backgroundColor="Orange";
}
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Tolong Nama Anda Tidak Sesuai";
      error_message.innerHTML = text;
      alert('Ada kesalahan dalam penulisan')
      return false;
    }
    if(subject.length < 10){
      text = "Tolong Subject yang Anda masukkan tidak sesuai";
      alert('Ada kesalahan dalam penulisan')
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Tolong masukkan No Telepon dengan benar";
      alert('Ada kesalahan dalam penulisan')
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Tolong masukkan email anda yang benar";
      alert('Ada kesalahan dalam penulisan')
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Pesan anda terlalu singkat";
      alert('Ada kesalahan dalam penulisan')
      error_message.innerHTML = text;
      return false;
    }
    alert("Hore berhasil!");
    return true;
  }

