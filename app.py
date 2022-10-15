import eel # Interface Gráfica
import datetime
eel.init(f'web') # pasta onde estão os arquivos da interface grafica

@eel.expose
def geraHtml(infos):
    agora = datetime.datetime.now().strftime("%Y%m%d %H%M%S.html")
    print(infos)
    file = open('web/templateEmail/HTML_Biofios_Variaveis.html').read()
    newHtml = file
    
    newHtml = newHtml.replace("{{Imagem-topo}}", infos['Imagemtopo'])
    newHtml = newHtml.replace("{{Texto-topo-1}}", infos['Textotopo1'])
    newHtml = newHtml.replace("{{Texto-topo-2}}", infos['Textotopo2'])
    
    newHtml = newHtml.replace("{{Imagem-produto-1}}", infos['Imagemproduto1'])
    newHtml = newHtml.replace("{{Nome-produto-1}}", infos['Nomeproduto1'])
    newHtml = newHtml.replace("{{Bullets-produto-1}}", infos['Bulletsproduto1'])
    newHtml = newHtml.replace("{{Link-produto-1}}", infos['Linkproduto1'])
    
    newHtml = newHtml.replace("{{Imagem-produto-2}}", infos['Imagemproduto2'])
    newHtml = newHtml.replace("{{Nome-produto-2}}", infos['Nomeproduto2'])
    newHtml = newHtml.replace("{{Bullets-produto-2}}", infos['Bulletsproduto2'])
    newHtml = newHtml.replace("{{Link-produto-2}}", infos['Linkproduto2'])
    
    newHtml = newHtml.replace("{{Nome-banner2}}", infos['Imagemproduto3'])
    newHtml = newHtml.replace("{{Bullets-banner2}}", infos['Nomeproduto3'])
    newHtml = newHtml.replace("{{Link-banner2}}", infos['Bulletsproduto3'])
    
    newHtml = newHtml.replace("{{Imagem-produto-3}}", infos['Linkproduto3'])
    newHtml = newHtml.replace("{{Nome-produto-3}}", infos['Imagemproduto4'])
    newHtml = newHtml.replace("{{Bullets-produto-3}}", infos['Nomeproduto4'])
    newHtml = newHtml.replace("{{Link-produto-3}}", infos['Bulletsproduto4'])
    
    newHtml = newHtml.replace("{{Imagem-produto-4}}", infos['Linkproduto4'])
    newHtml = newHtml.replace("{{Nome-produto-4}}", infos['Nomebanner2'])
    newHtml = newHtml.replace("{{Bullets-produto-4}}", infos['Bulletsbanner2'])
    newHtml = newHtml.replace("{{Link-produto-4}}", infos['Linkbanner2'])
    
    newFile = open(f'web/files/{agora}', 'w').write(newHtml)
    return f'web/files/{agora}'
eel.start('index.html',port=7777,mode='chrome') # inicia o programa no chrome fullscreen
