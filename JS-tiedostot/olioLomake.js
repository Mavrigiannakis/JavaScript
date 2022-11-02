var uusiNimi, enimi, snimi, puh;
function Henkilo(etunimi, sukunimi, puhelin)
{
  this.etunimi = etunimi;
  this.sukunimi = sukunimi;
  this.puhelin = puhelin;
}

function tayta()
{
  enimi = document.getElementById('enimi').value;
  snimi = document.getElementById('snimi').value;
  puh = document.getElementById('puh').value;
  uusiNimi = enimi+snimi;
  this[uusiNimi] = new Henkilo(enimi, snimi, puh);
  console.log(uusiNimi);
  console.log(StylianosMavrigiannakis.etunimi);
  console.log("\n"+StylianosMavrigiannakis.sukunimi);
  console.log("\n"+StylianosMavrigiannakis.puhelin);
}
