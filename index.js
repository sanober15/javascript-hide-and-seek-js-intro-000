function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('div.target')[0]

}

function increaseRankBy(n){
  const x = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < x.length; i++) {
      let children = x[i].children

      for (var j = 0; j < children.length; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n;
      }
    }
  }
