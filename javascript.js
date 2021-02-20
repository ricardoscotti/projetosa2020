//Direciona usuário que não tem login para a tela de cadastro

function gerenciadorFuncionarios(){
	window.location.href = "gerenciadordefuncionarios.html"
}

//As duas funções abaixo fazem a validação do email informado pelo usuário

function validarEmail(){

	var email = document.querySelector('#clienteemail');
	var error = document.querySelector('#error-email');
	if(!email.checkValidity()){
		error.innerHTML = "Email Inválido"
	}

}

function redefinirMsg(){

	var error = document.querySelector('#error-email');
	if(error.innerHTML == "Email Inválido"){
		error.innerHTML = "";
	}

}

let servicosgato = [{id: "500", servico: "Tosa", valor: "50,00"},
					{id: "501", servico: "Banho e Tosa", valor: "100,00"},
					{id: "502", servico: "Banho e Tosa Higiênica", valor: "70,00"}]

let servicoscachorro = [{id: "10", servico: "Tosa porte P", valor: "40,00"},
						{id: "11", servico: "Tosa porte M", valor: "50,00"},
						{id: "12", servico: "Tosa porte G", valor: "60,00"},
					{id: "13", servico: "Banho e Tosa porte P", valor: "80,00"},
					{id: "14", servico: "Banho e Tosa porte M", valor: "100,00"},
					{id: "15", servico: "Banho e Tosa porte G", valor: "120,00"},
					{id: "16", servico: "Banho e Tosa Higiênica porte P", valor: "50,00"},
					{id: "17", servico: "Banho e Tosa Higiênica porte M", valor: "70,00"},
					{id: "18", servico: "Banho e Tosa Higiênica porte G", valor: "90,00"}]

let funcionarios = [{nome: "Ricardo Scotti", email: "ricardo@petmanager.com", senha: "123"},
					{nome: "Douglas", email: "douglas@petmanager.com", senha: "456"},
					{nome: "Eliot", email: "eliot@petmanager.com", senha: "789"}]

let cadastroclientes = [{Nome: "Mariela", Email: "mariela@gmail.com", Telefone: "(48) 99986-3041"}];


function constroiCadastroFuncionario(nomefuncionario, emailfuncionario, senhafuncionario) {
    this.nome = nomefuncionario;
    this.email = emailfuncionario;
    this.senha = senhafuncionario;
  }


function cadastrarNovoFuncionario(){

			

			let nomefuncionario = document.getElementById("nomefuncionario").value;
			var error = document.getElementById("error-email3").innerHTML;
			let senhafuncionario = document.getElementById("senhafuncionario").value;
			let emailfuncionario = document.getElementById("emailfuncionario").value;

			let funcionarios2 = JSON.parse(localStorage.getItem("funcionarios"));
			

			for(let j = 0 ; j < funcionarios2.length ; j++)
			if(emailfuncionario == funcionarios2[j].email) {
			alert("Este Email já é cadastrado");			
			var flag  = 1;
			var bandera = 1;
			break;

		}

			if (nomefuncionario.length < 3) {
				alert("Informe o nome completo")
			}else if (error == "Email Inválido" || emailfuncionario == "") {
				alert("Informe um email válido")
			}else if (flag !== 1){
				if(senhafuncionario == "") {
				alert("Crie a senha")
			}
			else if(bandera !== 1) {
				var add = new constroiCadastroFuncionario(nomefuncionario, emailfuncionario, senhafuncionario)

				if(!localStorage.funcionarios){
            	funcionarios = []
        		} else {
            	funcionarios = JSON.parse(localStorage.funcionarios)
        		}


    			funcionarios.push(add)

    			console.log(Object.values(funcionarios))
    			alert("Funcionário cadastrado com sucesso")
    			localStorage.setItem("funcionarios", JSON.stringify(funcionarios));

    			document.getElementById("nomefuncionario").value = null;
    			document.getElementById("emailfuncionario").value = null;
    			document.getElementById("senhafuncionario").value = null;
			}}	
}


function constroiCliente(nomecompleto, clienteemail, clientetelefone) {
    this.Nome = nomecompleto;
    this.Email = clienteemail;
    this.Telefone = clientetelefone;
  }

let emails = [];

function cadastrarNovoCliente() {

	let nomecompleto = document.getElementById("clientenomecompleto").value;
	let clienteemail = document.getElementById("clienteemail").value;
	let clientetelefone = document.getElementById("clientetelefone").value;
	let cadastroclientes4 = JSON.parse(localStorage.getItem("clientes"));

				
				
				for(let i = 0 ; i < cadastroclientes4.length ; i++){
					if(clienteemail == cadastroclientes4[i].Email){ 
						alert("Este email já é cadastrado");
						var flag = 1;
						break;
					}
				}

					if(clientetelefone.length < 14){
						alert("Número de telefone inválido");
						var flag = 1
					}
			
				if(flag !== 1){
				if (nomecompleto.length < 3) {
				alert("Informe o nome completo")
				document.getElementById("clientenomecompleto").value = null;
				}else if (document.getElementById("error-email").innerHTML == "Email Inválido" || clienteemail == "") {
				alert("Informe um email válido")
				var flag = 1		

				}else if(flag !== 1){

				var add = new constroiCliente(nomecompleto, clienteemail, clientetelefone)

				
        		if(!localStorage.clientes){
            	cadastroclientes = []
        		} else {
            	cadastroclientes = JSON.parse(localStorage.clientes)
        		}
    			
    			cadastroclientes.push(add)
    			console.log(Object.values(cadastroclientes))
    			localStorage.setItem("clientes", JSON.stringify(cadastroclientes));
    			document.getElementById("clientenomecompleto").value = null;
    			document.getElementById("clienteemail").value = null;
    			document.getElementById("clientetelefone").value = null;
    			emails.push(clienteemail)
    			alert("Cadastro efetuado com sucesso")
    			console.log(emails)
}}}

function direcionaServicos(){
	window.location.href = "agendarservico.html"
}


function acessoLogin(){
	let emailfuncionario = document.getElementById("emailfuncionario1").value
	let senhafuncionario = document.getElementById("senhafuncionario1").value

	let funcionarios2 = JSON.parse(localStorage.getItem("funcionarios"));
	
	for (let i = 0; i <= funcionarios2.length; i++){
        if(i == funcionarios2.length){
            alert("Login Incorreto");
        }
        else if (funcionarios2[i].email == emailfuncionario){
            if(funcionarios2[i].senha == senhafuncionario){
            if(JSON.parse(localStorage.getItem("validalocal")) !== "zero"){
            	localStorage.setItem("servicosgato", JSON.stringify(servicosgato));
            	localStorage.setItem("servicoscachorro", JSON.stringify(servicoscachorro));
            	localStorage.setItem("clientes", JSON.stringify(cadastroclientes));
            	var bandera = "zero"
            	localStorage.setItem("validalocal", JSON.stringify(bandera));
                window.location.href="centraldeservicos.html";
            }else if(JSON.parse(localStorage.getItem("validalocal")) == "zero"){
            	window.location.href="centraldeservicos.html";
            }
            }
            else{
                alert("Senha Incorreta");
            }
            break;
        } 
    }}

function logOut(){
	window.location.href = "telalogin.html"
}
function retornaCentraldeServicos(){
	window.location.href = "centraldeservicos.html"
}
function gerenciadorClientes(){
	window.location.href = "gerenciadordeclientes.html"
}
function gerenciadorServicos(){
	window.location.href = "gerenciadordeservicos.html"
}
function cotacaoServicos(){
	window.location.href = "cotacaodeservicos.html"
}
function cadastraNovoCliente(){
	window.location.href = "cadastronovocliente.html"
}
function alteracaoCliente(){
	var clienteparaalterar = prompt("Informe o email do cliente");
	localStorage.setItem("clienteparaalterar", JSON.stringify(clienteparaalterar));
	window.location.href = "alteracaodecliente.html"
}
function novoFuncionario(){
	window.location.href = "cadastronovofuncionario.html"
}
function relacaoClientes(){
	window.location.href = "relacaoclientes.html"
}
function retornaGerenciadorClientes(){
	window.location.href = "gerenciadordeclientes.html"
}
function avancaRelacaoClientes(){
	window.location.href = "relacaoclientes.html"	
}

function imprimirClientes(){

		function criaTag(elemento){

        return document.createElement(elemento)
    }

        let tabela = document.getElementById("relacaoclientes");
        var linha = criaTag("tr");
        let coluna = criaTag("td");        

        let cadastroclientes2 = JSON.parse(localStorage.getItem("clientes"));

        cadastroclientes2.sort((a, b) => {
        	const nomeAA = a.Nome.toLowerCase();
        	const nomeBB = b.Nome.toLowerCase();
        	if(nomeAA < nomeBB){
        		return -1;
        	}
        	if(nomeAA > nomeBB){
        		return 1;
        	}

        	return 0;
        });

        let cabecalho = ["Nome", "Email","Telefone"];

        function criaCelula (tag, text){
            tag = criaTag(tag);
            tag.textContent = text;
            return tag;
        }

        // let linhacabecalho = criaTag("tr")

        // for(let i = 0; i < cabecalho.length; i++){

        //     let th = criaCelula("th", cabecalho[i]);

        //     linhacabecalho.appendChild(th);
        //     }
        //     tabela.appendChild(linhacabecalho)
            
            let nome = "";
            let email = "";
            let telefone = "";    

        for(let j = 0; j < cadastroclientes2.length; j++){

            var linha = criaTag("tr");
            tabela.appendChild(linha);
            nome = criaCelula("td", cadastroclientes2[j].Nome);
            linha.appendChild(nome);
            email = criaCelula("td", cadastroclientes2[j].Email);
            linha.appendChild(email);
            telefone = criaCelula("td", cadastroclientes2[j].Telefone);
            linha.appendChild(telefone);

        }
}

function deletaCliente(){

let cadastroclientes2 = JSON.parse(localStorage.getItem("clientes"));

let clienteadeletar = prompt("Digite o email do cliente a ser deletado");

let cadastroclientes3 = [];

	for(let i = 0 ; i < cadastroclientes2.length ; i++){
		if(clienteadeletar == cadastroclientes2[i].Email){

	
		for(let item of cadastroclientes2){
		if(item.Email !== clienteadeletar){
			cadastroclientes3.push(item);
		}
	}
	localStorage.setItem("clientes", JSON.stringify(cadastroclientes3));
	alert("Cliente Removido com Sucesso")
	var flag = 1;
	location.reload();
}
}
	if(flag !== 1){
	for(let j = 0 ; j < cadastroclientes2.length ; j++){
		if(clienteadeletar !== cadastroclientes2[j].Email){
	alert("Este cliente não existe")
	break;

}
}
}
}

function clienteAlterar(){
	let clienteparaalterar = JSON.parse(localStorage.getItem("clienteparaalterar"));
	let cadastroclientes2 = JSON.parse(localStorage.getItem("clientes"));

	for(let i = 0 ; i < cadastroclientes2.length ; i++){
			if(clienteparaalterar == cadastroclientes2[i].Email){

				var flag = 1;
				document.getElementById("nomeaalterar").value = cadastroclientes2[i].Nome
				document.getElementById("emailaalterar").value = cadastroclientes2[i].Email
				document.getElementById("telefoneaalterar").value = cadastroclientes2[i].Telefone
				document.getElementById("emailoriginal").innerHTML = cadastroclientes2[i].Email 

			}
	}
	if(flag !== 1){
	for(let j = 0 ; j < cadastroclientes2.length ; j++){
		if(clienteparaalterar !== cadastroclientes2[j].Email){
	alert("Este email não foi localizado")
	window.location.href = "gerenciadordeclientes.html"
	break;
}
}
}
}

function alterarNome(){

	document.getElementById("nomeaalterar").value = "";	
	
		//if(document.getElementById("nomeaalterar").value.length < 3){
		//alert("Informe o nome completo");

		//for(let i = 0 ; i < cadastroclientes2.length ; i++){
		//if(document.getElementById("emailoriginal").textContent == cadastroclientes2[i].Email){

		//document.getElementById("nomeaalterar").innerHTML = cadastroclientes2[i].Nome
		//break;
	//}
//}
//}
}
function alterarEmail(){
	
	document.getElementById("emailaalterar").value = "";
	

}
function alterarTelefone(){
	
	document.getElementById("telefoneaalterar").value = "";
}

function efetuaAlteracaoCliente(){

	let cadastroclientes2 = JSON.parse(localStorage.getItem("clientes"));
	let clienteparaalteracao = document.getElementById("emailoriginal").textContent

	for(let j = 0 ; j < cadastroclientes2.length ; j++)
		if(document.getElementById("emailaalterar").value == cadastroclientes2[j].Email && document.getElementById("emailaalterar").value !== clienteparaalteracao) {
			alert("Este Email já é cadastrado");			
			var mapa  = 1;
			break;

		}
		
		if(document.getElementById("nomeaalterar").value.length < 3){
			alert("Informe o nome completo");
			var bandera = 1;
		}

		if(document.getElementById("telefoneaalterar").value.length < 14){
			alert("Número de telefone inválido");
			var bandera = 1;
		}

	 	if (document.getElementById("error-email2").innerHTML == "Email Inválido" || document.getElementById("emailaalterar").value == ""){
			alert("Informe um Email válido")
			var flag = 1;
		}


	if(flag != 1 && bandera != 1 && mapa !=1){
		for(let i = 0 ; i < cadastroclientes2.length ; i++){
			if(clienteparaalteracao == cadastroclientes2[i].Email){
				cadastroclientes2[i].Email = document.getElementById("emailaalterar").value
				cadastroclientes2[i].Nome = document.getElementById("nomeaalterar").value
				cadastroclientes2[i].Telefone = document.getElementById("telefoneaalterar").value
				alert("Cliente atualizado com Sucesso")
				localStorage.setItem("clientes", JSON.stringify(cadastroclientes2));
				window.location.href = "gerenciadordeclientes.html"

			}
		}
	}
}


function clienteAlterar2(){
	let clienteparaalterar = document.getElementById("emailoriginal").textContent;
	let cadastroclientes2 = JSON.parse(localStorage.getItem("clientes"));

for(let i = 0 ; i < cadastroclientes2.length ; i++){
		if(clienteparaalterar == cadastroclientes2[i].Email){

	var flag = 1;
	document.getElementById("nomeaalterar").value = cadastroclientes2[i].Nome
	document.getElementById("emailaalterar").value = cadastroclientes2[i].Email
	document.getElementById("telefoneaalterar").value = cadastroclientes2[i].Telefone
	document.getElementById("emailoriginal").innerHTML = cadastroclientes2[i].Email 

}
}
	if(flag !== 1){
	for(let j = 0 ; j < cadastroclientes2.length ; j++){
		if(clienteparaalterar !== cadastroclientes2[j].Email){
	alert("Este email não foi localizado")
	window.location.href = "gerenciadordeclientes.html"
	break;
}
}
}
}
function validarEmail2(){

	var email = document.querySelector('#emailaalterar');
	var error = document.querySelector('#error-email2');
	if(!email.checkValidity()){
		error.innerHTML = "Email Inválido"
	}

}

function redefinirMsg2(){

	var error = document.querySelector('#error-email2');
	if(error.innerHTML == "Email Inválido"){
		error.innerHTML = "";
	}

}

function imprimiFuncionarios(){


	function criaTag(elemento){

        return document.createElement(elemento)
    }


        let tabela = document.getElementById("tabelafuncionarios");
        var linha = criaTag("tr");
        let coluna = criaTag("td");        

        let funcionarios2 = JSON.parse(localStorage.getItem("funcionarios"));

        funcionarios2.sort((a, b) => {
        	const nomeA = a.nome.toLowerCase();
        	const nomeB = b.nome.toLowerCase();
        	if(nomeA < nomeB){
        		return -1;
        	}
        	if(nomeA > nomeB){
        		return 1;
        	}

        	return 0;
        });

        let cabecalho = ["Nome", "Email"];

        function criaCelula (tag, text){
            tag = criaTag(tag);
            tag.textContent = text;
            return tag;
        }
        // 	let linhacabecalho = criaTag("tr")

        // for(let i = 0; i < cabecalho.length; i++){

        //     let th = criaCelula("th", cabecalho[i]);

        //     linhacabecalho.appendChild(th);
        //     }
        //     tabela.appendChild(linhacabecalho)
            
            let nome = "";
            let email = "";    

        for(let j = 0; j < funcionarios2.length; j++){

            var linha = criaTag("tr");
            tabela.appendChild(linha);
            nome = criaCelula("td", funcionarios2[j].nome);
            linha.appendChild(nome);
            email = criaCelula("td", funcionarios2[j].email);
            linha.appendChild(email);
            

        }

}

function validarEmail3(){

	var email = document.querySelector('#emailfuncionario');
	var error = document.querySelector('#error-email3');
	if(!email.checkValidity()){
		error.innerHTML = "Email Inválido"
	}

}

function redefinirMsg3(){

	var error = document.querySelector('#error-email3');
	if(error.innerHTML == "Email Inválido"){
		error.innerHTML = "";
	}

}
function deletarFuncionario(){

let funcionarios2 = JSON.parse(localStorage.getItem("funcionarios"));

let funcionarioadeletar = prompt("Informe o email do funcionário a ser deletado");

let funcionarios3 = [];

	for(let i = 0 ; i < funcionarios2.length ; i++){
		if(funcionarioadeletar == funcionarios2[i].email){

	
		for(let item of funcionarios2){
		if(item.email !== funcionarioadeletar){
			funcionarios3.push(item);
		}
	}
	localStorage.setItem("funcionarios", JSON.stringify(funcionarios3));
	alert("Funcionario Removido com Sucesso")
	var flag = 1;
	location.reload()

}
}
	if(flag !== 1){
	for(let j = 0 ; j < funcionarios2.length ; j++){
		if(funcionarioadeletar !== funcionarios2[j].email){
	alert("Email não localizado")
	break;
}
}
}
}
function atualizaFuncionario(){
	var funcionarioparaalterar = prompt("Informe o email do funcionário");
	localStorage.setItem("funcionarioalterar", JSON.stringify(funcionarioparaalterar));

	window.location.href = "alteracaodefuncionario.html"
	}

function funcionarioAlterar(){

	let funcionarioparaalterar = JSON.parse(localStorage.getItem("funcionarioalterar"));	
	let funcionarios2 = JSON.parse(localStorage.getItem("funcionarios"));

for(let i = 0 ; i < funcionarios2.length ; i++){
		if(funcionarioparaalterar == funcionarios2[i].email){

	var flag = 1;
	document.getElementById("nomefuncionario").value = funcionarios2[i].nome
	document.getElementById("emailfuncionarioalterar").value = funcionarios2[i].email
	document.getElementById("senhaalterar").value = funcionarios2[i].senha
	document.getElementById("emailoriginalfuncionario").innerHTML = funcionarios2[i].email 

}
}

	if(flag !== 1){
	for(let j = 0 ; j < funcionarios2.length ; j++){
		if(funcionarioparaalterar !== funcionarios2[j].email){
	alert("Este email não foi localizado")
	window.location.href = "gerenciadordefuncionarios.html"
	break;
}
}
}
}


function funcionarioRestaurar(){

	let funcionarioparaalterar = document.getElementById("emailoriginalfuncionario").textContent
	let funcionarios2 = JSON.parse(localStorage.getItem("funcionarios"));

for(let i = 0 ; i < funcionarios2.length ; i++){
		if(funcionarioparaalterar == funcionarios2[i].email){

	document.getElementById("nomefuncionario").value = funcionarios2[i].nome
	document.getElementById("emailfuncionarioalterar").value = funcionarios2[i].email
	document.getElementById("senhaalterar").value = funcionarios2[i].senha	 
}}}

function validarEmail4(){

	var email = document.querySelector('#emailfuncionarioalterar');
	var error = document.querySelector('#error-email4');
	if(!email.checkValidity()){
		error.innerHTML = "Email Inválido"
}	}

function redefinirMsg4(){

	var error = document.querySelector('#error-email4');
	if(error.innerHTML == "Email Inválido"){
		error.innerHTML = "";
}	}

function efetuaAlteracaoFuncionario(){

	let funcionarios2 = JSON.parse(localStorage.getItem("funcionarios"));
	let funcionarioparaalteracao = document.getElementById("emailoriginalfuncionario").textContent

	for(let j = 0 ; j < funcionarios2.length ; j++)
		if(document.getElementById("emailfuncionarioalterar").value == funcionarios2[j].email && document.getElementById("emailfuncionarioalterar").value !== funcionarioparaalteracao) {
			alert("Este Email já é cadastrado");			
			var mapa  = 1;
			break;

		}
		
		if(document.getElementById("nomefuncionario").value.length < 3){
			alert("Informe o nome completo");
			var bandera = 1;
		}

	
	 	if (document.getElementById("error-email4").innerHTML == "Email Inválido" || document.getElementById("emailfuncionarioalterar").value == ""){
			alert("Informe um Email válido")
			var flag = 1;
		}

		if (document.getElementById("senhaalterar").value == ""){
			alert("Informe a nova senha")
			var globo = 1;
		}


	if(flag != 1 && bandera != 1 && mapa !=1 && globo !=1){
		for(let i = 0 ; i < funcionarios2.length ; i++){
			if(funcionarioparaalteracao == funcionarios2[i].email){
				funcionarios2[i].email = document.getElementById("emailfuncionarioalterar").value
				funcionarios2[i].nome = document.getElementById("nomefuncionario").value
				funcionarios2[i].senha = document.getElementById("senhaalterar").value
				alert("Funcionário atualizado com Sucesso")
				localStorage.setItem("funcionarios", JSON.stringify(funcionarios2));
				window.location.href = "gerenciadordefuncionarios.html"

			}
		}
	}
}
	function imprimiServicos(){

		var formatter = new Intl.NumberFormat([], {
						style: 'currency',
						currency: 'BRL'
						})		

		function criaTag(elemento){

        return document.createElement(elemento)
    }

        let tabela = document.getElementById("tabelacachorro");
        let tabela2 = document.getElementById("tabelagato");
        var linha = criaTag("tr");
        let coluna = criaTag("td");        

        let servicoscachorro2 = JSON.parse(localStorage.getItem("servicoscachorro"));
        let servicosgato2 = JSON.parse(localStorage.getItem("servicosgato"));

        servicoscachorro2.sort(ordenacao);

        servicosgato2.sort(ordenacao);

        let cabecalho = ["Id", "Serviço", "Valor"];

        function criaCelula (tag, text){
            tag = criaTag(tag);
            tag.textContent = text;
            return tag;
        }

        //     var linhacabecalho = criaTag("tr")
        //     var linhacabecalho2 = criaTag("tr")

        // for(let i = 0; i < cabecalho.length; i++){
        //     let th = criaCelula("th", cabecalho[i]);
        //     linhacabecalho.appendChild(th);
        //     }
        //     tabela.appendChild(linhacabecalho)


        // for(let p = 0; p < cabecalho.length; p++){
        //     let th = criaCelula("th", cabecalho[p]);
        //     linhacabecalho2.appendChild(th);
        //     }
        //     tabela2.appendChild(linhacabecalho2)
            
            let id = "";
            let servico = "";
            let valor = "";    

        for(let j = 0; j < servicoscachorro2.length; j++){

            var linha = criaTag("tr");
            tabela.appendChild(linha);
            id = criaCelula("td", servicoscachorro2[j].id);
            linha.appendChild(id);
            servico = criaCelula("td", servicoscachorro2[j].servico);
            linha.appendChild(servico);
            valor = criaCelula("td", formatter.format(parseFloat(servicoscachorro2[j].valor)));
            linha.appendChild(valor);

        }

            let idgato = "";
            let servicogatotabela = "";
            let valortabela = "";    

        for(let k = 0; k < servicosgato2.length; k++){

            var linha = criaTag("tr");
            tabela2.appendChild(linha);
            idgato = criaCelula("td", servicosgato2[k].id);
            linha.appendChild(idgato);
            servicogatotabela = criaCelula("td", servicosgato2[k].servico);
            linha.appendChild(servicogatotabela);
            valortabela = criaCelula("td", formatter.format(parseFloat(servicosgato2[k].valor)));
            linha.appendChild(valortabela);        
	}
}

function novoServiço(){
window.location.href = "cadastrodeservicos.html"	
}

function retornaGerenciadordeServicos(){

	window.location.href = "gerenciadordeservicos.html"
}

function constroiServico(idservico, nomeservico, valorservico) {
    this.id = idservico;
    this.servico = nomeservico;
    this.valor = valorservico;
  }

function cadastrarNovoServico(){

	switch (document.getElementById("gatooucachorroservico").selectedIndex){
		case 1:		

			let nomeservico = document.getElementById("nomedoservico").value; 
			let valorservico = document.getElementById("valordoservico").value;
			let servicosgato2 = JSON.parse(localStorage.getItem("servicosgato"));
			let servicoscachorro2 = JSON.parse(localStorage.getItem("servicoscachorro"));
			let idservico = parseFloat(servicosgato2[servicosgato2.length - 1].id) + 1			

			for(let j = 0 ; j < servicosgato2.length ; j++)
			if(idservico == servicosgato2[j].id) {
			alert("Este ID já é cadastrado");			
			var flag  = 1;
			var bandera = 1;
			break;

		}
		for(let i = 0 ; i < servicoscachorro2.length ; i++)
			if(idservico == servicoscachorro2[i].id) {
			alert("Este ID já é cadastrado");			
			var flag  = 1;
			var bandera = 1;
			break;

		}

			if (nomeservico == "") {
				alert("Informe o serviço")
				var globo = 1;
			
			}else if (flag !== 1){
				if(idservico == "") {
				alert("Crie o ID")
			}else if (globo !== 1){
				if(valorservico == "") {
				alert("Informe o valor")
			}else if(globo !== 1)
				if(parseFloat(valorservico) < 0){
				alert("Valor não pode ser negativo")
				

			}else if(bandera !== 1 && flag !==1 && globo !==1) {
				var add = new constroiServico(String(idservico), nomeservico, valorservico)

				if(!localStorage.servicosgato){
            	servicosgato = []
        		} else {
            	servicosgato = JSON.parse(localStorage.servicosgato)
        		}


    			servicosgato.push(add)

    			console.log(Object.values(servicosgato))
    			alert("Serviço cadastrado com sucesso")
    			localStorage.setItem("servicosgato", JSON.stringify(servicosgato));

    			document.getElementById("nomedoservico").value = null;
    			//document.getElementById("iddoservico").value = null;
    			document.getElementById("valordoservico").value = null;
    			location.reload();
			}}}	

		break
		case 2:
		
			let nomeservico2 = document.getElementById("nomedoservico").value;
			let valorservico2 = document.getElementById("valordoservico").value;
			let servicosgato3 = JSON.parse(localStorage.getItem("servicosgato"));
			let servicoscachorro3 = JSON.parse(localStorage.getItem("servicoscachorro"));	
			let idservico2 = parseFloat(servicoscachorro3[servicoscachorro3.length - 1].id) + 1		

			for(let j = 0 ; j < servicosgato3.length ; j++)
			if(idservico2 == servicosgato3[j].id) {
			alert("Este ID já é cadastrado");			
			var flag  = 1;
			var bandera = 1;
			break;

		}
		for(let i = 0 ; i < servicoscachorro3.length ; i++)
			if(idservico2 == servicoscachorro3[i].id) {
			alert("Este ID já é cadastrado");			
			var flag  = 1;
			var bandera = 1;
			break;

		}

			if (nomeservico2 == "") {
				alert("Informe o serviço")
				var globo = 1;
			
			}else if (flag !== 1){
				if(idservico2 == "") {
				alert("Crie o ID")
			}else if (globo !== 1){
				if(valorservico2 == "") {
				alert("Informe o valor")
			}else if(globo !== 1)
				if(parseFloat(valorservico2) < 0){
				alert("Valor não pode ser negativo")

			}else if(bandera !== 1 && flag !==1 && globo !==1) {
				var add = new constroiServico(String(idservico2), nomeservico2, valorservico2)

				if(!localStorage.servicoscachorro){
            	servicoscachorro = []
        		} else {
            	servicoscachorro = JSON.parse(localStorage.servicoscachorro)
        		}


    			servicoscachorro.push(add)

    			console.log(Object.values(servicoscachorro));
    			alert("Serviço cadastrado com sucesso");
    			localStorage.setItem("servicoscachorro", JSON.stringify(servicoscachorro));
    			location.reload();
			}}}

		break
		case 0:
		alert("Selecione se é gato ou cachorro")
		break
		
	}
}

function deletarServico(){

let servicosgato2 = JSON.parse(localStorage.getItem("servicosgato"));
let servicoscachorro2 = JSON.parse(localStorage.getItem("servicoscachorro"));

let servicoadeletar = prompt("Informe o ID do serviço a ser deletado");

let servicosgato3 = [];
let servicoscachorro3 = [];

	if(servicoadeletar == "500"){
		alert("Este serviço não pode ser deletado, somente editado.")
		var mundo = 1;
	}
	if(mundo !==1){

	for(let i = 0 ; i < servicosgato2.length ; i++){
		if(servicoadeletar == servicosgato2[i].id){

	
		for(var item of servicosgato2){
		if(item.id !== servicoadeletar){
			servicosgato3.push(item);
		}
	}
	localStorage.setItem("servicosgato", JSON.stringify(servicosgato3));
	alert("Serviço removido com sucesso (gato)")
	var bandera = 1;
	location.reload()
}}}

	if(bandera !==1)
	if(servicoadeletar == "10"){
		alert("Este serviço não pode ser deletado, somente editado.")
		var orbita = 1 
	}
	if (orbita !==1){
	{

		for(let j = 0 ; j < servicoscachorro2.length ; j++){
		if(servicoadeletar == servicoscachorro2[j].id){

	
		for(var item of servicoscachorro2){
		if(item.id !== servicoadeletar){
			servicoscachorro3.push(item);
		
	}}

	localStorage.setItem("servicoscachorro", JSON.stringify(servicoscachorro3));
	alert("Serviço removido com sucesso (cachorro)")
	var globo = 1;
	location.reload()
	}

}}}

	if(bandera !== 1 && globo !== 1 && mundo !== 1 && orbita !== 1){
	for(let k = 0 ; k < servicosgato2.length ; k++){
		if(servicoadeletar !== servicosgato2[k].id){
	alert("ID não localizado")
	var mapa = 1
	break;
}
}
}
if(bandera !== 1 && globo !== 1 && mundo !== 1 && orbita !== 1 && mapa !== 1){
	for(let m = 0 ; m < servicoscachorro2.length ; m++){
		if(servicoadeletar !== servicoscachorro2[m].id){
	alert("ID não localizado")
	break;
}
}}}

function atualizaServico(){
	var servicoparaatualizar = prompt("Informe o ID do serviço");
	localStorage.setItem("servicoparaatualizar", JSON.stringify(servicoparaatualizar));

	window.location.href = "alteracaodeservico.html"
	}

function servicoAlterar(){

	let servicoparaatualizar2 = JSON.parse(localStorage.getItem("servicoparaatualizar"));	
	let servicosgato2 = JSON.parse(localStorage.getItem("servicosgato"));
	let servicoscachorro2 = JSON.parse(localStorage.getItem("servicoscachorro"));

for(let i = 0 ; i < servicosgato2.length ; i++){
		if(servicoparaatualizar2 == servicosgato2[i].id){

	var flag = 1;
	document.getElementById("servicoparaalterar").value = servicosgato2[i].servico
	document.getElementById("valorparaalterar").value = servicosgato2[i].valor
	//document.getElementById("idparaalterar").value = servicosgato2[i].id
	document.getElementById("idalteracao").textContent = servicoparaatualizar2
	document.getElementById("frasealteracao").textContent = `ID: ${servicosgato2[i].id}.`

}
}
	if(flag !==1){
		for(let k = 0 ; k < servicoscachorro2.length ; k++){
		if(servicoparaatualizar2 == servicoscachorro2[k].id){

	var bandera = 1;
	document.getElementById("servicoparaalterar").value = servicoscachorro2[k].servico
	document.getElementById("valorparaalterar").value = servicoscachorro2[k].valor
	//document.getElementById("idparaalterar").value = servicoscachorro2[k].id
	document.getElementById("idalteracao").textContent = servicoparaatualizar2
	document.getElementById("frasealteracao").textContent = ` ID: ${servicoscachorro2[k].id}.`

	}}}

	if(flag !== 1 && bandera !== 1){
	for(let j = 0 ; j < servicosgato2.length ; j++){
		if(servicoparaatualizar2 !== servicosgato2[j].id){
	alert("ID não existente.")
	window.location.href = "gerenciadordeservicos.html"
	var globo = 1;
	break;
}
}
}
	if(flag !== 1 && bandera !== 1 && globo !== 1){
	for(let m = 0 ; m < servicoscachorro2.length ; m++){
		if(servicoparaatualizar2 !== servicoscachorro2[m].id){
	alert("ID não existente.")
	window.location.href = "gerenciadordeservicos.html"

	break;
}}}
}

function servicoRestaurar(){

	let idalteracao = document.getElementById("idalteracao").textContent
	let servicoscachorro2 = JSON.parse(localStorage.getItem("servicoscachorro"));
	let servicosgato2 = JSON.parse(localStorage.getItem("servicosgato"));

for(let i = 0 ; i < servicoscachorro2.length ; i++){
		if(idalteracao == servicoscachorro2[i].id){

	document.getElementById("servicoparaalterar").value = servicoscachorro2[i].servico
	document.getElementById("valorparaalterar").value = servicoscachorro2[i].valor
	//document.getElementById("idparaalterar").value = servicoscachorro2[i].id	 
}}
for(let j = 0 ; j < servicosgato2.length ; j++){
		if(idalteracao == servicosgato2[j].id){

	document.getElementById("servicoparaalterar").value = servicosgato2[j].servico
	document.getElementById("valorparaalterar").value = servicosgato2[j].valor
	//document.getElementById("idparaalterar").value = servicosgato2[j].id

}}}

function efetuaAlteracaoServico(){

	let servicoscachorro2 = JSON.parse(localStorage.getItem("servicoscachorro"));
	let servicosgato2 = JSON.parse(localStorage.getItem("servicosgato"));
	let idalteracao = document.getElementById("idalteracao").textContent

	//for(let j = 0 ; j < servicoscachorro2.length ; j++)
		//if(document.getElementById("idparaalterar").value == servicoscachorro2[j].id && document.getElementById("idparaalterar").value !== idalteracao) {
			//alert("Este ID já é cadastrado");			
			//var mapa  = 1;
			//break;

		
		//if(mapa !== 1){
			//for(let m = 0 ; m < servicosgato2.length ; m++)
		//if(document.getElementById("idparaalterar").value == servicosgato2[m].id && document.getElementById("idparaalterar").value !== idalteracao) {
			//alert("Este ID já é cadastrado");			
			//var mundo  = 1;
			//break;

		
		
		if(document.getElementById("servicoparaalterar").value == ""){
			alert("Informe o serviço");
			var bandera = 1;
		}
		if(bandera != 1){
		if (document.getElementById("valorparaalterar").value == ""){
			alert("Informe o valor")
			var globo = 1;
		}}
		if (parseFloat(document.getElementById("valorparaalterar").value) < 0){
			alert("Valor não pode ser negativo")
			var planeta = 1;
		}

		//if(bandera != 1 && globo != 1 && planeta !=1){	
		//if (document.getElementById("idparaalterar").value == ""){
			//alert("Informe o novo ID")
			//var flag = 1;
		//}}


	if(bandera != 1 && globo !=1 && planeta != 1){
		for(let i = 0 ; i < servicoscachorro2.length ; i++){
			if(idalteracao == servicoscachorro2[i].id){
				servicoscachorro2[i].servico = document.getElementById("servicoparaalterar").value
				servicoscachorro2[i].valor = document.getElementById("valorparaalterar").value
				//servicoscachorro2[i].id = document.getElementById("idparaalterar").value
				alert("Serviço atualizado com Sucesso")
				localStorage.setItem("servicoscachorro", JSON.stringify(servicoscachorro2));
				var planeta = 1;
				window.location.href = "gerenciadordeservicos.html"

			}
		}
	}

	if(bandera != 1 && globo !=1 && planeta != 1){
		for(let v = 0 ; v < servicosgato2.length ; v++){
			if(idalteracao == servicosgato2[v].id){
				servicosgato2[v].servico = document.getElementById("servicoparaalterar").value
				servicosgato2[v].valor = document.getElementById("valorparaalterar").value
				//servicosgato2[v].id = document.getElementById("idparaalterar").value
				alert("Serviço atualizado com Sucesso")
				localStorage.setItem("servicosgato", JSON.stringify(servicosgato2));
				window.location.href = "gerenciadordeservicos.html"

}}}}


function ordenacao(a, b){
	return a.id - b.id;
}

function servicoGatoOuCachorro(){

	switch (document.getElementById("gatooucachorrocotacao").selectedIndex){
		case 1:		
		
		let servicosgato2 = JSON.parse(localStorage.getItem("servicosgato"));

		var option = document.createElement("option");
		var select = document.getElementById("servicogatooucachorro");
		option.text = "Selecione o Serviço"
		option.value = "Selecione o Serviço"
		select.appendChild(option);

			var select2 = document.getElementById("servicogatooucachorro");
			var length = select2.options.length;
			for (i = length-1; i >= 0; i--) {
  			select.options[i] = null;
			}

		option.text = "Selecione o Serviço"
		option.value = "Selecione o Serviço"
		select.appendChild(option);
		

		for (let i = 0 ; i < servicosgato2.length ; i++){
			var option = document.createElement("option");			
			option.text = servicosgato2[i].servico
			option.value = servicosgato2[i].servico
			select.appendChild(option);     
		}


		document.getElementById("frasevalorunitario").textContent = `Valor unitário: .`
		//document.getElementById('gatooucachorrocotacao').disabled = true;
		


    	
		break
		case 2:

		let servicoscachorro2 = JSON.parse(localStorage.getItem("servicoscachorro"));

		var option = document.createElement("option");
		var select = document.getElementById("servicogatooucachorro");
		option.text = "Selecione o Serviço"
		option.value = "Selecione o Serviço"
		select.appendChild(option);

		var select3 = document.getElementById("servicogatooucachorro");
		var length = select3.options.length;
		for (i = length-1; i >= 0; i--) {
  		select.options[i] = null;
		}

		option.text = "Selecione o Serviço"
		option.value = "Selecione o Serviço"
		select.appendChild(option);
		

		for (let j = 0 ; j < servicoscachorro2.length ; j++){
			var option = document.createElement("option");			
			option.text = servicoscachorro2[j].servico
			option.value = servicoscachorro2[j].servico
			select.appendChild(option);     
		}


		document.getElementById("frasevalorunitario").textContent = `Valor unitário: .`
		//document.getElementById('gatooucachorrocotacao').disabled = true;
			
		break
		case 0:
		console.log("selecione se é gato ou cachorro");
	
		
	}
}
function servicoGatoOuCachorroValor(){

	switch (document.getElementById("gatooucachorrocotacao").selectedIndex){
	case 1:		
	
	var select = document.getElementById("servicogatooucachorro");
	var value = select.options[select.selectedIndex].value;
	console.log(value);

	let servicosgato2 = JSON.parse(localStorage.getItem("servicosgato"));

	for (let i = 0 ; i < servicosgato2.length ; i++){
		if (value == servicosgato2[i].servico){
			var valordoservico = servicosgato2[i].valor
			break
		}
	}

	document.getElementById("frasevalorunitario").textContent = `Valor unitário: ${valordoservico}.`
	document.getElementById("valorunitario").textContent = valordoservico;
	break

	case 2:

	var select = document.getElementById("servicogatooucachorro");
	var value = select.options[select.selectedIndex].value;
	console.log(value);

	let servicoscachorro2 = JSON.parse(localStorage.getItem("servicoscachorro"));

	for (let j = 0 ; j < servicoscachorro2.length ; j++){
		if (value == servicoscachorro2[j].servico){
			var valordoservico = servicoscachorro2[j].valor
			break
		}
	}

	document.getElementById("frasevalorunitario").textContent = `Valor unitário: ${valordoservico}.`
	document.getElementById("valorunitario").textContent = valordoservico;
	break

}}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

function finalizaCotacao(){
	let datadacotacao = document.getElementById("datadacotacao").value
	let quantidade = document.getElementById("quantidade").value
	let botaofinaliza = document.getElementById("botaofinaliza")
	let botaosalva = document.getElementById("botaosalva")
	var data1 = new Date;
	var data2 = formatDate(data1);




	if (datadacotacao == ""){
		alert("Informe a data")
		var flag = 1
	}else if(datadacotacao < data2){
		alert("Essa data já passou!")
		var bandera = 1
	}else if(datadacotacao > "2020-12-31"){
		alert("Agenda 2021 não está aberta")
		var globo = 1
	}
		if(flag != 1 && globo != 1 && bandera != 1)
		if(document.getElementById("gatooucachorrocotacao").selectedIndex == 0){
		alert("Informe se é Gato ou Cachorro");
		var saturno = 1;
	}
	if(flag != 1 && globo != 1 && saturno !=1 && bandera != 1)
		if(document.getElementById("servicogatooucachorro").selectedIndex == 0){
		alert("Informe o serviço");
		var plutao = 1;
	}if(flag !== 1 && globo !== 1 && saturno !== 1 & plutao !== 1 && bandera != 1)
			if (quantidade == "" || quantidade == 0){
			alert("Informe a quantidade");
			var planeta = 1
		}

	if(flag != 1 && globo != 1 && planeta != 1 && saturno !=1 && plutao !=1 && bandera != 1){

	let valortotal = parseFloat(document.getElementById("valorunitario").textContent) * parseFloat(document.getElementById("quantidade").value)
	
	document.getElementById("totalcotacao").textContent = `O valor total é R$ ${valortotal},00.`

	document.getElementById('datadacotacao').readOnly = true;
	document.getElementById('gatooucachorrocotacao').disabled = true;
	document.getElementById('servicogatooucachorro').disabled = true;
	document.getElementById('quantidade').readOnly = true;
	document.getElementById("botaosalva").disabled = false;
	document.getElementById("botaoedita").disabled = false;
	

}}

function reload(){
	location.reload();
}

function constroiCotacao(datacotacaoformatada, emailclientecotacao, valortotal) {
    this.datadacotacao = datacotacaoformatada;
    this.emailclientecotacao = emailclientecotacao;
    this.valortotal = valortotal;
  }

let outubro = [];
let novembro = [];
let dezembro = [];


function salvaCotacao(){

	let botaosalva = document.getElementById("botaosalva")
	var emailclientecotacao = prompt("Informe o Email do cliente");
	let clientes3 = JSON.parse(localStorage.getItem("clientes"));
	let datadacotacao = document.getElementById("datadacotacao").value
	let valortotal = parseFloat(document.getElementById("valorunitario").textContent) * parseFloat(document.getElementById("quantidade").value)
    
    var datadacotacao1 = new Date(datadacotacao)
    datacotacaoformatada = datadacotacao1.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
	
	var clienteounao = clientes3.filter(clientecota => clientecota.Email == emailclientecotacao)
	if(clienteounao == ""){
		alert("Este cliente não é cadastrado")
		var flag = 1;
	}

	if(flag !== 1){
	 if (datadacotacao >= "2020-10-01" && datadacotacao <= "2020-10-31"){

		var add = new constroiCotacao(datacotacaoformatada, emailclientecotacao, valortotal)

				if(!localStorage.outubro){
            	outubro = []
        		} else {
            	outubro = JSON.parse(localStorage.outubro)
        		}

    			outubro.push(add)    	
    			localStorage.setItem("outubro", JSON.stringify(outubro));
				alert("Cotação salva com sucesso")
				location.reload();


	}else if(datadacotacao >= "2020-11-01" && datadacotacao <= "2020-11-30"){
		
				var add = new constroiCotacao(datacotacaoformatada, emailclientecotacao, valortotal)

				if(!localStorage.novembro){
            	novembro = []
        		} else {
            	novembro = JSON.parse(localStorage.novembro)
        		}

    			novembro.push(add)    	
    			localStorage.setItem("novembro", JSON.stringify(novembro));
				alert("Cotação salva com sucesso")
				location.reload();


	}else if(datadacotacao >= "2020-12-01" && datadacotacao <= "2020-12-31"){
		
				var add = new constroiCotacao(datacotacaoformatada, emailclientecotacao, valortotal)

				if(!localStorage.dezembro){
            	dezembro = []
        		} else {
            	dezembro = JSON.parse(localStorage.dezembro)
        		}

    			dezembro.push(add)    	
    			localStorage.setItem("dezembro", JSON.stringify(dezembro));
				alert("Cotação salva com sucesso")
				location.reload();
				

	}}}


function relatorioCotacoes(){

	window.location.href = "relatoriodecotacoes.html"
}


function imprimiRelatorios(){

	switch (document.getElementById("mesrelatorio").selectedIndex){
	case 0:

	console.log("escolha o mes")	
	var linhas = document.getElementById('tabelaagendamentos').rows;
	for (let i = linhas.length - 1 ; i >= 0 ; i--) {
	document.getElementById('tabelaagendamentos').deleteRow(i);

	}
	document.getElementById("tabelaagendamentos").deleteTHead();
	
	break

	case 1:

	var linhas = document.getElementById('tabelaagendamentos').rows;
	for (let i = linhas.length - 1 ; i >= 0 ; i--) {
	document.getElementById('tabelaagendamentos').deleteRow(i);

	}
	document.getElementById("tabelaagendamentos").deleteTHead();
	
	var formatter = new Intl.NumberFormat([], {
						style: 'currency',
						currency: 'BRL'
						})
	


	function criaTag(elemento){

        return document.createElement(elemento)
    }

        var tabela = document.getElementById("tabelaagendamentos");
        var header = tabela.createTHead();

        var linha = criaTag("tr");
        var coluna = criaTag("td");        

        let outubro2 = JSON.parse(localStorage.getItem("outubro"));
        outubro2.sort(ordenaData);

        var cabecalho = ["Data", "Email", "Valor da cotação"];

        function criaCelula (tag, text){
            tag = criaTag(tag);
            tag.textContent = text;
            return tag;
        }

        // for(let i = 0; i < cabecalho.length; i++){

        //     let th = criaCelula("th", cabecalho[i]);

        //     header.appendChild(th);
        //     }
            
            var data = "";
            var email = "";
            var valordacotacao = "";    

        for(let j = 0; j < outubro2.length; j++){

            var linha = criaTag("tr");
            tabela.appendChild(linha);
            data = criaCelula("td", outubro2[j].datadacotacao);
            linha.appendChild(data);
            email = criaCelula("td", outubro2[j].emailclientecotacao);
            linha.appendChild(email);
            valordacotacao = criaCelula("td", formatter.format(outubro2[j].valortotal));
            linha.appendChild(valordacotacao);            

        }

	break

	case 2:

	var linhas = document.getElementById('tabelaagendamentos').rows;
	for (let i = linhas.length - 1 ; i >= 0 ; i--) {
	document.getElementById('tabelaagendamentos').deleteRow(i);

	}
	document.getElementById("tabelaagendamentos").deleteTHead();

	var formatter = new Intl.NumberFormat([], {
						style: 'currency',
						currency: 'BRL'
						})	


	function criaTag(elemento){

        return document.createElement(elemento)
    }

        var tabela = document.getElementById("tabelaagendamentos");
        var header = tabela.createTHead();

        var linha = criaTag("tr");
        var coluna = criaTag("td");        

        let novembro2 = JSON.parse(localStorage.getItem("novembro"));
        novembro2.sort(ordenaData);

        var cabecalho = ["Data", "Email", "Valor da cotação"];

        function criaCelula (tag, text){
            tag = criaTag(tag);
            tag.textContent = text;
            return tag;
        }

        // for(let i = 0; i < cabecalho.length; i++){

        //     let th = criaCelula("th", cabecalho[i]);

        //     header.appendChild(th);
        //     }
            
            var data = "";
            var email = "";
            var valordacotacao = "";    

        for(let j = 0; j < novembro2.length; j++){

            var linha = criaTag("tr");
            tabela.appendChild(linha);
            data = criaCelula("td", novembro2[j].datadacotacao);
            linha.appendChild(data);
            email = criaCelula("td", novembro2[j].emailclientecotacao);
            linha.appendChild(email);
            valordacotacao = criaCelula("td", formatter.format(novembro2[j].valortotal));
            linha.appendChild(valordacotacao);            

        }

	break

	case 3:

	var linhas = document.getElementById('tabelaagendamentos').rows;
	for (let i = linhas.length - 1 ; i >= 0 ; i--) {
	document.getElementById('tabelaagendamentos').deleteRow(i);

	}
	document.getElementById("tabelaagendamentos").deleteTHead();

	var formatter = new Intl.NumberFormat([], {
						style: 'currency',
						currency: 'BRL'
						})		


	function criaTag(elemento){

        return document.createElement(elemento)
    }

        var tabela = document.getElementById("tabelaagendamentos");
        var header = tabela.createTHead();

        var linha = criaTag("tr");
        var coluna = criaTag("td");        

        let dezembro2 = JSON.parse(localStorage.getItem("dezembro"));
        dezembro2.sort(ordenaData);

        var cabecalho = ["Data", "Email", "Valor da cotação"];

        function criaCelula (tag, text){
            tag = criaTag(tag);
            tag.textContent = text;
            return tag;
        }

        // for(let i = 0; i < cabecalho.length; i++){

        //     let th = criaCelula("th", cabecalho[i]);

        //     header.appendChild(th);
        //     }
            
            var data = "";
            var email = "";
            var valordacotacao = "";    

        for(let j = 0; j < dezembro2.length; j++){

            var linha = criaTag("tr");
            tabela.appendChild(linha);
            data = criaCelula("td", dezembro2[j].datadacotacao);
            linha.appendChild(data);
            email = criaCelula("td", dezembro2[j].emailclientecotacao);
            linha.appendChild(email);
            valordacotacao = criaCelula("td", formatter.format(dezembro2[j].valortotal));
            linha.appendChild(valordacotacao);            

        }

	break

}}

function desativaBotao(){
	document.getElementById("botaosalva").disabled = true;
	document.getElementById("botaoedita").disabled = true;
}

function ordenaData(a, b){
	return new Date (a.datadacotacao) - new Date (b.datadacotacao)
}

function carregaFuncionarios(){

	var flag = "zero"

	if(JSON.parse(localStorage.getItem("validafuncionario")) !== "um"){

	localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
	var flag = "um"
	localStorage.setItem("validafuncionario", JSON.stringify(flag));

}else{}
}

function onlynumber(evt) {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode( key );
   //var regex = /^[0-9.,]+$/;
   var regex = /^[0-9.]+$/;
   if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
   }
}

function editarCotacao(){

	document.getElementById("botaosalva").disabled = true;
	document.getElementById("botaoedita").disabled = true;
	document.getElementById('datadacotacao').readOnly = false;
	document.getElementById('gatooucachorrocotacao').disabled = false;
	document.getElementById('servicogatooucachorro').disabled = false;
	document.getElementById('quantidade').readOnly = false;
	
}
