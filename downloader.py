import os
import requests

# Diretório onde as imagens serão salvas
output_dir = 'assets'

# Lista de URLs das imagens e seus caminhos, categorizadas
images = [
    # Imagens de Boss
    {
        'category': 'boss',
        'name': 'Raikou',
        'url': 'https://wiki.pokexgames.com/images/2/28/Card_Boss-Fight-Raikou.png',
        'path': 'Card_Boss-Fight-Raikou.png'
    },
    {
        'category': 'boss',
        'name': 'Suicune',
        'url': 'https://wiki.pokexgames.com/images/8/8b/Card_Boss-Fight-Suicune.png',
        'path': 'Card_Boss-Fight-Suicune.png'
    },
    {
        'category': 'boss',
        'name': 'Entei',
        'url': 'https://wiki.pokexgames.com/images/c/c4/Card_Boss-Fight-Entei.png',
        'path': 'Card_Boss-Fight-Entei.png'
    },
    # Imagens de DZ
    {
        'category': 'dz',
        'name': 'Décima primeira semana',
        'url': 'https://wiki.pokexgames.com/images/4/49/Card_DZ_D%C3%A9cima-Primeira-Semana.png',
        'path': 'Card_DZ_D%C3%A9cima-Primeira-Semana.png'
    },
    {
        'category': 'dz',
        'name': 'Décima segunda semana',
        'url': 'https://wiki.pokexgames.com/images/1/11/Card_DZ_D%C3%A9cima-Segunda-Semana.png',
        'path': 'Card_DZ_D%C3%A9cima-Segunda-Semana.png'
    },
    {
        'category': 'dz',
        'name': 'Primeira semana',
        'url': 'https://wiki.pokexgames.com/images/b/b2/Card_DZ_Primeira-Semana.png',
        'path': 'Card_DZ_Primeira-Semana.png'
    },
    {
        'category': 'dz',
        'name': 'Segunda semana',
        'url': 'https://wiki.pokexgames.com/images/9/97/Card_DZ_Segunda-Semana.png',
        'path': 'Card_DZ_Segunda-Semana.png'
    },
    {
        'category': 'dz',
        'name': 'Terceira semana',
        'url': 'https://wiki.pokexgames.com/images/f/fd/Card_DZ_Terceira-Semana.png',
        'path': 'Card_DZ_Terceira-Semana.png'
    },
    {
        'category': 'dz',
        'name': 'Quarta semana',
        'url': 'https://wiki.pokexgames.com/images/1/17/Card_DZ_Quarta-Semana.png',
        'path': 'Card_DZ_Quarta-Semana.png'
    },
    {
        'category': 'dz',
        'name': 'Quinta semana',
        'url': 'https://wiki.pokexgames.com/images/4/40/Card_DZ_Quinta-Semana.png',
        'path': 'Card_DZ_Quinta-Semana.png'
    },
    {
        'category': 'dz',
        'name': 'Sexta semana',
        'url': 'https://wiki.pokexgames.com/images/2/23/Card_DZ_Sexta-Semana.png',
        'path': 'Card_DZ_Sexta-Semana.png'
    },
    {
        'category': 'dz',
        'name': 'Sétima semana',
        'url': 'https://wiki.pokexgames.com/images/f/f2/Card_DZ_S%C3%A9tima-Semana.png',
        'path': 'Card_DZ_S%C3%A9tima-Semana.png'
    },
    {
        'category': 'dz',
        'name': 'Oitava semana',
        'url': 'https://wiki.pokexgames.com/images/9/97/Card_DZ_Oitava-Semana.png',
        'path': 'Card_DZ_Oitava-Semana.png'
    },
    {
        'category': 'dz',
        'name': 'Nona semana',
        'url': 'https://wiki.pokexgames.com/images/b/b3/Card_DZ_Nona-Semana.png',
        'path': 'Card_DZ_Nona-Semana.png'
    },
    {
        'category': 'dz',
        'name': 'Décima semana',
        'url': 'https://wiki.pokexgames.com/images/3/30/Card_DZ_D%C3%A9cima-Semana.png',
        'path': 'Card_DZ_D%C3%A9cima-Semana.png'
    },
    # Imagens de Merchant
    {
        'category': 'merchant',
        'name': 'Merchant em Cerulean',
        'url': 'https://wiki.pokexgames.com/images/8/86/Card_Merchant-Cerulean.png',
        'path': 'Card_Merchant-Cerulean.png'
    },
    {
        'category': 'merchant',
        'name': 'Merchant em Pewter',
        'url': 'https://wiki.pokexgames.com/images/1/1c/Card_Merchant-Pewter.png',
        'path': 'Card_Merchant-Pewter.png'
    },
    {
        'category': 'merchant',
        'name': 'Merchant em Viridian',
        'url': 'https://wiki.pokexgames.com/images/c/c0/Card_Merchant-Viridian.png',
        'path': 'Card_Merchant-Viridian.png'
    },
    {
        'category': 'merchant',
        'name': 'Merchant em Fuchsia',
        'url': 'https://wiki.pokexgames.com/images/a/aa/Card_Merchant-Fuchsia.png',
        'path': 'Card_Merchant-Fuchsia.png'
    },
    {
        'category': 'merchant',
        'name': 'Merchant em Cinnabar',
        'url': 'https://wiki.pokexgames.com/images/1/1c/Card_Merchant-Cinnabar.png',
        'path': 'Card_Merchant-Cinnabar.png'
    },
    {
        'category': 'merchant',
        'name': 'Merchant em Pallet',
        'url': 'https://wiki.pokexgames.com/images/6/6d/Card_Merchant-Pallet.png',
        'path': 'Card_Merchant-Pallet.png'
    },
    {
        'category': 'merchant',
        'name': 'Merchant em Lavender',
        'url': 'https://wiki.pokexgames.com/images/2/2b/Card_Merchant-Lavender.png',
        'path': 'Card_Merchant-Lavender.png'
    },
]

# Cria o diretório principal se não existir
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

def download_image(url, category, path):
    try:
        # Faz o download da imagem
        response = requests.get(url)
        response.raise_for_status()  # Verifica se ocorreu um erro na requisição

        # Cria o diretório da categoria se não existir
        category_dir = os.path.join(output_dir, category)
        os.makedirs(category_dir, exist_ok=True)

        # Cria o caminho completo para salvar a imagem
        file_path = os.path.join(category_dir, path)
        os.makedirs(os.path.dirname(file_path), exist_ok=True)

        # Salva a imagem no diretório
        with open(file_path, 'wb') as file:
            file.write(response.content)
        print(f"Imagem salva em {file_path}")

    except requests.RequestException as e:
        print(f"Erro ao baixar {url}: {e}")

# Baixa todas as imagens da lista
for image in images:
    download_image(image['url'], image['category'], image['path'])
