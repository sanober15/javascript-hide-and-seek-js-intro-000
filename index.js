function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('div.target')[0]

}

function deepestChild(){

document.getElementById('grand-node').querySelectorAll('div.grand-node').innerHTML;
}


function increaseRankBy(n){
  const l = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < l.length; i++) {
    let e = l[i].e;

    for (var j = 0; j < e.length; j++) {
      e[j].innerHTML = parseInt(e[j].innerHTML) + n;
    }
  }
}
