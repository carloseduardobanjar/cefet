$(function(){
	let url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";
	$.get(url,function(data){
		$.each(data,function(index,filme){
			let $divFilme = $("<div>").addClass("filme");
			let $filmeTitulo = $("<h2>").text(filme.titulo);
			let $resumo = $("<p>").html("<b>Resumo:</b> " + filme.resumo);
			let $generos = $("<ul>");
			$.each(filme.generos,function(ind, genero){
				let $genero = $("<li>").text(genero);
				$generos.append($genero);
			});
			
			let $div = $("<div>");
			$.each(filme.titulosSemelhantes, function(index, semelhantes){
                $.each(data, function(index, semelho){
                    if(semelhantes==semelho.id){
                    	let $figuraSemelhante = $ ("<img>").attr('src',semelho.figura).css({"heigth:":"100","width":"100"}).addClass("imgRedonda");
                    	$div.append($figuraSemelhante);
                    }
                })
            });

			if(filme.classificacao == '0')
				var $figuraClassificacao = $("<img>").attr('src', './images/classificacao-livre-logo.png').css({"heigth:":"50","width":"50"}).addClass("filmeClassificacao");
			if(filme.classificacao == '10')
				var $figuraClassificacao = $("<img>").attr('src', './images/classificacao-10-anos-logo.png').css({"heigth:":"50","width":"50"}).addClass("filmeClassificacao");
			if(filme.classificacao == '12')
				var $figuraClassificacao = $("<img>").attr('src', './images/classificacao-12-anos-logo.png').css({"heigth:":"50","width":"50"}).addClass("filmeClassificacao");
			if(filme.classificacao == '14')
				var $figuraClassificacao = $("<img>").attr('src', './images/classificacao-14-anos-logo.png').css({"heigth:":"50","width":"50"}).addClass("filmeClassificacao");
			if(filme.classificacao == '16')
				var $figuraClassificacao = $("<img>").attr('src', './images/classificacao-16-anos-logo.png').css({"heigth:":"50","width":"50"}).addClass("filmeClassificacao");
			if(filme.classificacao == '18')
				var $figuraClassificacao = $("<img>").attr('src', './images/classificacao-18-anos-logo.png').css({"heigth:":"50","width":"50"}).addClass("filmeClassificacao");

			let $figura = $("<img>").attr('src',filme.figura);
			let $elenco = $("<ul>");
			$.each(filme.elenco,function(ind, artista){
				let $artista = $("<li>").text(artista);
				$elenco.append($artista);
			});
			let $opinioes = $("<div>");
			$.each(filme.opinioes, function(ind, op){
				if(op.rating == 5)
					var $opiniao = $("<p>").html("<img src='./images/5.jpg' style='width:100px;'>" + "   " + op.descricao);
				if(op.rating == 4)
					var $opiniao = $("<p>").html("<img src='./images/4.jpg' style='width:100px;'>" + "   " + op.descricao);
				if(op.rating == 3)
					var $opiniao = $("<p>").html("<img src='./images/3.png' style='width:100px;'>" + "   " + op.descricao);
                $opinioes.append($opiniao);
            });

			$divFilme.append($figuraClassificacao);
			$divFilme.append($filmeTitulo);
			$divFilme.append($figura);
			$divFilme.append($resumo);
			let $pElenco = $("<p>").html("<b>Elenco:</b> ");
			$divFilme.append($pElenco);
			$divFilme.append($elenco);
			let $pGeneros = $("<p>").html("<b>Gêneros:</b> ");
			$divFilme.append($pGeneros);
			$divFilme.append($generos);
			let $pTitulosSemelhantes = $("<p>").html("<b>Títulos semelhantes:</b> ");
			$divFilme.append($pTitulosSemelhantes);
			$divFilme.append($div);
			let $pReviews = $("<p>").html("<b>Reviews:</b> ");
			$divFilme.append($pReviews);
			$divFilme.append($opinioes);

			$("body").append($divFilme);
		})
	})
})