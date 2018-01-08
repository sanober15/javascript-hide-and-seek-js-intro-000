function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('div.target')[0]

}

function deepestChild(){
  const x = document.getElementById('grand-node').querySelectorAll();
  for (var i = 0; i < x.length; i++) {
    return x[i].innerHTML = (i).toString();
  }
}

function increaseRankBy(){

}
