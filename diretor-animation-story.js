function carregarConteudo(htmlFile, jsFile) {
    const container = document.getElementById('conteudo-dinamico');
    const menu = document.getElementById('menu'); // <- adiciona isso

    fetch(htmlFile)
        .then(res => res.text())
        .then(html => {
            container.innerHTML = html;

            // Esconde o menu ao carregar conteúdo
            menu.style.display = 'none';

            if (jsFile) {
                const script = document.createElement('script');
                script.src = jsFile;
                script.defer = true;
                container.appendChild(script);
            }
        })
        .catch(err => console.error('Erro ao carregar conteúdo:', err));
}
