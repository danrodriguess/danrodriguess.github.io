function parseTxtContent(content) {
    const lines = content.trim().split('\n');
    const nomeConst = lines[0].trim();
    const columns = lines[1].split('\t').map(col => col.trim());

    const projects = lines.slice(2).map(line => {
        const values = line.split('\t').map(value => value.trim());
        const projectObj = {};
        columns.forEach((col, index) => {
            projectObj[col] = values[index];
        });
        return projectObj;
    });

    const result = {};
    result[nomeConst] = { "projetos": projects };
    return result;
}

function parseDate(dateString) {
    return dateString;
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function marcarComoConcluido(event) {
    const li = event.target;
    li.style.textDecoration = 'line-through';
    const projectName = li.textContent.replace(/-|_/g, ' ').trim();
    copyToClipboard(projectName);
}

function compararProjetos() {
    const web4Content = document.getElementById('web4TextArea').value;
    const demoContent = document.getElementById('demoTextArea').value;

    const web4 = parseTxtContent(web4Content);
    const demo = parseTxtContent(demoContent);

    const projetosWeb4 = web4[Object.keys(web4)[0]].projetos.reduce((map, projeto) => {
        map[projeto.PROJETO] = parseDate(projeto['DATA']);
        return map;
    }, {});

    const projetosDemo = demo[Object.keys(demo)[0]].projetos.reduce((map, projeto) => {
        map[projeto.PROJETO] = parseDate(projeto['DATA']);
        return map;
    }, {});

    const projetosDesatualizados = Object.keys(projetosDemo).filter(projeto =>
        projetosWeb4[projeto] && projetosDemo[projeto] < projetosWeb4[projeto]
    );

    const projetosFront = [];
    const projetosBack = [];
    const frontKeywords = ["front", "app", "assets", "ipaam", "slim-portal"];

    projetosDesatualizados.forEach(projeto => {
        if (frontKeywords.some(keyword => projeto.toLowerCase().includes(keyword))) {
            projetosFront.push(projeto);
        } else {
            projetosBack.push(projeto);
        }
    });

    const resultadoUl = document.getElementById('resultado');
    resultadoUl.innerHTML = '';

    // Adiciona título e projetos de back
    if (projetosBack.length > 0) {
        const backTitle = document.createElement('h3');
        backTitle.textContent = `Projetos de Back(${projetosBack.length})`;
        resultadoUl.appendChild(backTitle);
        projetosBack.forEach(projeto => {
            const li = document.createElement('li');
            li.textContent = projeto;
            li.addEventListener('click', marcarComoConcluido);
            resultadoUl.appendChild(li);
        });
    }

    // Adiciona título e projetos de front
    if (projetosFront.length > 0) {
        const frontTitle = document.createElement('h3');
        frontTitle.textContent = `Projetos de Front(${projetosFront.length})`;
        resultadoUl.appendChild(frontTitle);
        projetosFront.forEach(projeto => {
            const li = document.createElement('li');
            li.textContent = projeto;
            li.addEventListener('click', marcarComoConcluido);
            resultadoUl.appendChild(li);
        });
    }
}
