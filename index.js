var items = [];
var btn_clear = document.querySelector('button[name=limpar]');

document.querySelector('input[type=submit]').addEventListener('click',()=>{
   var nome_produto = document.querySelector('input[name=nome_produto]');
   var preco_produto = document.querySelector('input[name=preco_produto]');
   var preco_total = document.querySelector('.soma-produto h1');

   //alert(nome_produto + ' ' + preco_produto)

   items.push({
       nome: nome_produto.value,
       valor: preco_produto.value
   });

   var listaProdutos = document.querySelector('.lista-produtos')
   var soma = 0;

   listaProdutos.innerHTML = ""
   items.map((val)=>{
       soma+=parseFloat(val.valor);
    listaProdutos.innerHTML += `
    <div class="lista-produto-single">
            <h3>${val.nome}</h3>
            <span>R$${val.valor}</span>
        </div><!--lista-produto-single-->
    `
   })
   soma.toFixed(2);

   nome_produto.value = "";
   preco_produto.value = "";
   preco_total.innerHTML = "Total: R$" + soma;

//    alert(items[1].nome)
//    alert(items[1].valor)
})

btn_clear.addEventListener('click',()=>{
    var listaProdutos = document.querySelector('.lista-produtos')
    var preco_total = document.querySelector('.soma-produto h1');
    // if(listaProdutos == ""){
    //     location.reload();
    // }
    items = [];
    listaProdutos.innerHTML = "";
    preco_total.innerHTML = "Total: R$0,00";
})
