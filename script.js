function submitData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name == "") {
        return alert("Nama harus diisi ")
    }   else if (email === "") {
        return alert("Email harus diisi ")
    }   else if (number === "") {
        return alert("Nomor Handphone harus diisi ")
    }   else if (subject === "") {
        return alert("Subject harus diisi ")
    }   else if (message === "") {
        return alert("Pesan harus diisi ")
    }

    let emailReceiver = "fadil.nurridzki24@gmail.com"

    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject= ${subject}&body= Halo, nama saya ${name}, ${message}. Silahkan hubungi saya di ${number}.Terimakasih`;
    a.click();
    console.log(name);
    console.log(email);
    console.log(number);
    console.log(subject);
    console.log(message);
  }
 
  let emailer = {
    name,
    email,
    number,
    subject,
    message,

  };

  console.log(emailer);


