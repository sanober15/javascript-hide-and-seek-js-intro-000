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
  const l = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < l.length; i++) {
    l[i].innerHTML += (i+1)+parseInt(n) 
  }
}
