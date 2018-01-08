function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('div.target')[0]

}

function increaseRankBy(n){
  const x = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < x.length; i++) {
    x.forEach((index)=>{
    x[index] = parseInt(x[index].innerHTML, 10) + n;
  });
}
}
