function esimerkkiTaulukko()
{
  var autot = [];
  var caarat = ["Tesla", "VWi3", "Hyundai ionic"];
  autot.push("Jeep");
  document.write(caarat[1] + " " +autot[0] + "<br />");
  document.write("Caara = " + caarat + "<br />");
  document.write("Autot = " + autot + "<br />");
  var siirettava = caarat.pop();
  document.write("Siirettävä = " + siirettava);
  document.write("<br />Caarat taulukko = " + caarat);
  autot.unshift(siirettava);
  document.write("<br />Autot taulukko = " + autot);
  document.write("<br />Caarat taulukko = " + caarat + "<br />Autot taulukko = " + autot);


}
