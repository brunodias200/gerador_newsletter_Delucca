Imagemtopo = document.getElementById('Imagemtopo')
Textotopo1 = document.getElementById('Textotopo1')
Textotopo2 = document.getElementById('Textotopo2')
Imagemproduto1 = document.getElementById('Imagemproduto1')
Nomeproduto1 = document.getElementById('Nomeproduto1')
Bulletsproduto1 = document.getElementById('Bulletsproduto1')
Linkproduto1 = document.getElementById('Linkproduto1')
Imagemproduto2 = document.getElementById('Imagemproduto2')
Nomeproduto2 = document.getElementById('Nomeproduto2')
Bulletsproduto2 = document.getElementById('Bulletsproduto2')
Linkproduto2 = document.getElementById('Linkproduto2')
Imagemproduto3 = document.getElementById('Imagemproduto3')
Nomeproduto3 = document.getElementById('Nomeproduto3')
Bulletsproduto3 = document.getElementById('Bulletsproduto3')
Linkproduto3 = document.getElementById('Linkproduto3')
Imagemproduto4 = document.getElementById('Imagemproduto4')
Nomeproduto4 = document.getElementById('Nomeproduto4')
Bulletsproduto4 = document.getElementById('Bulletsproduto4')
Linkproduto4 = document.getElementById('Linkproduto4')
Nomebanner2 = document.getElementById('Nomebanner2')
Bulletsbanner2 = document.getElementById('Bulletsbanner2')
Linkbanner2 = document.getElementById('Linkbanner2')

btnGerar = document.getElementById('btnGerar')
btnGerar.addEventListener('click', geraHtml)

async function geraHtml(){
    if(Imagemtopo.value.length < 1 || Textotopo1.value.length < 1 || Textotopo2.value.length < 1 || Imagemproduto1.value.length < 1 || Nomeproduto1.value.length < 1 || Bulletsproduto1.value.length < 1 || Linkproduto1.value.length < 1 || Imagemproduto2.value.length < 1 || Nomeproduto2.value.length < 1 || Bulletsproduto2.value.length < 1 || Linkproduto2.value.length < 1 || Imagemproduto3.value.length < 1 || Nomeproduto3.value.length < 1 || Bulletsproduto3.value.length < 1 || Linkproduto3.value.length < 1 || Imagemproduto4.value.length < 1 || Nomeproduto4.value.length < 1 || Bulletsproduto4.value.length < 1 || Linkproduto4.value.length < 1 || Nomebanner2.value.length < 1 || Bulletsbanner2.value.length < 1 || Linkbanner2.value.length < 1){
        alert('Preencha TODOS os campos')
        return ''
    }
    infos = {
        'Imagemtopo':Imagemtopo.value,
        'Textotopo1':Textotopo1.value,
        'Textotopo2':Textotopo2.value,
        'Imagemproduto1':Imagemproduto1.value,
        'Nomeproduto1':Nomeproduto1.value,
        'Bulletsproduto1':Bulletsproduto1.value,
        'Linkproduto1':Linkproduto1.value,
        'Imagemproduto2':Imagemproduto2.value,
        'Nomeproduto2':Nomeproduto2.value,
        'Bulletsproduto2':Bulletsproduto2.value,
        'Linkproduto2':Linkproduto2.value,
        'Imagemproduto3':Imagemproduto3.value,
        'Nomeproduto3':Nomeproduto3.value,
        'Bulletsproduto3':Bulletsproduto3.value,
        'Linkproduto3':Linkproduto3.value,
        'Imagemproduto4':Imagemproduto4.value,
        'Nomeproduto4':Nomeproduto4.value,
        'Bulletsproduto4':Bulletsproduto4.value,
        'Linkproduto4':Linkproduto4.value,
        'Nomebanner2':Nomebanner2.value,
        'Bulletsbanner2':Bulletsbanner2.value,
        'Linkbanner2':Linkbanner2.value,
    }
    retorno = await eel.geraHtml(infos)()
    // window.open(retorno);
}

alert('finalizado arquivo salvo em: '+ caminho)