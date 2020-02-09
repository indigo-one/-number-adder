window.onload = function(e) {
  let btn = document.querySelector('input[name=calc]');
  let inp1 = document.querySelector('input[name=num1]');
  let inp2 = document.querySelector('input[name=num2]');
  let span = document.querySelector('.res');

  btn.onclick = function() {
   let res = parseInt(inp1.value) + parseInt(inp2.value);
   span.innerHTML = res;
   // this.disabled = true;
  }
/*
  inp1.oninput = function() {
    btn.disabled = false;
  }

  inp2.oninput = function() {
    btn.disabled = false;
  }
     */
}



