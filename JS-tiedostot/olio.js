function Henkilo(etu, suku, los, pnro, ptp, puh, email)
{
	this.etunimi = etu;
  this.sukunimi = suku;
  this.lahiosoite = los;
  this.postinumero = pnro;
  this.postitp = ptp;
  this.puhelin = puh;
  this.email = email;
  this.tiedot = nayta;

}
function nayta()
  {
  	document.write(
      this.etunimi + " " +this.sukunimi + "<br />" +
      this.lahiosoite + "<br />" +
      this.postinumero + " " + this.postitp + "<br />" +
      this.puhelin+ "<br />" +
      this.email + "<br />");
  }
var Stylianos = new Henkilo("Stylianos","Mavrigiannakis","Jotain 3", "04300", "Kerava", 3581931039, "stylianos.mavrigiann@keuda.fi");
var Joku = new Henkilo("Joku","Joku","Keskikatu 3", "04300", "Kerava", 35812313131, "joku".joku@keuda.fi");
