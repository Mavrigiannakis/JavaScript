function armstrong()
{

  var arm = [];
  var luku;
  var temp = 0;
  var tulosta = "";

  for(var i = 100; i <=999; i++)
  {

    luku = i.toString().split('');

    for(var k = 0; k < luku.length; k++)
    {
      temp += luku[k] * luku[k] * luku[k];
    }

    if(temp == i)
    {
      arm.push(i);
    }

    temp = 0;
    luku = 0;
  }

  for(var a = 0; a < arm.length-1; a++)
  {
    tulosta += arm[a] + ", ";
  }

  tulosta += arm[arm.length-1];
  
  document.getElementById('t1').innerHTML = tulosta;
}
