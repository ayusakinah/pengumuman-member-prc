var input = true;
while (input) {
  // Menangkap masukan nama camamber
  var p = prompt('Write your full name: *Capitalize Each Word');

  // Menangkap data nama terpilih
  var lolos = {
    robotic: ['Dadan Hidayatuloh', 'Stephanie Claudia', 'Ienyen Nandha Galuhsusan', 'Joel Pangaribuan'],
    scientificResearch: ['Muhammad Rizal Nurromdhoni', 'Reynaldi Ariza', 'Riana Ayu Noviana'],
    dataScience: ['Sugih Pratama Nugraha', 'Adib Danu Wirawan', 'Nanda Putra Niko Rizaldi', 'Selly Novianti Putri Permana', 'Rifqi Asril Nurrachman'],
    webDev: ['Yohannes Mangaradot', 'Fadhly Naufandy Lathif', 'M Syahrul Amin'],
  };

  var result = '';
  if (p == lolos.robotic[0] || p == lolos.robotic[1] || p == lolos.robotic[2] || p == lolos.robotic[3]) {
    result = "Congratulation you're a member of Robotic PRC 2022, " + p + ' !';
  } else if (p == lolos.scientificResearch[0] || p == lolos.scientificResearch[1] || p == lolos.scientificResearch[2]) {
    result = "Congratulation you're a member of Scientific Research PRC 2022, " + p + ' !';
  } else if (p == lolos.dataScience[0] || p == lolos.dataScience[1] || p == lolos.dataScience[2] || p == lolos.dataScience[3] || p == lolos.dataScience[4]) {
    result = "Congratulation you're a member of Data Science PRC 2022, " + p + ' !';
  } else if (p == lolos.webDev[0] || p == lolos.webDev[1] || p == lolos.webDev[2]) {
    result = "Congratulation you're a member of Web Development PRC 2022, " + p + ' !';
  } else if (p.length <= 0) {
    result = 'Please input your name correctly';
  } else {
    result = "We're so sorry to tell you that it's not your times";
  }

  // Tampilkan result
  alert(result);

  input = confirm('Wanna check again?');
}

alert("Thank's for your patience in waiting for this result ;))");
