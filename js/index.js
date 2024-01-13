const mh = document.querySelector('.mh');
const header = document.querySelector('.header');
const info = document.querySelector('.project .info');
const txtInfo = document.querySelector('.project .info .txt');
let projects = document.querySelector('.projects');
const projects_array = [
    {
        nome: 'Bibliotech',
        img_url: './img/bibliotech.png',
        technologies: [{ nome: 'logos:react' }, { nome: 'logos:nodejs-icon' }, { nome: 'logos:mysql' }],
        sinopse: `Bibliotech é um site que desenvolvi pensando num sistema escolar
        para
        que os alunos
        pudessem adquirir
        livros pelo site da escola/biblioteca, mas, o alunos nesse caso, não fariam o download do PDF, mas
        pegariam o seu livro na própria biblioteca após adquiri-lo.`,
        link_project: 'https://labrary-management-system-front.vercel.app/'
    },
    {
        nome: 'Administrativo',
        img_url: './img/auth.png',
        technologies: [{ nome: 'devicon:angular' }],
        sinopse: `Administrativo foi uma projeto feito emm colaboração com alguns colegas da escola, com a orientação de uma professor - quanto às funções, eu fiquei com o front-end - ele é, basicamente, um site administrativo com sistema de cadastro e login.`,
        link_project: 'https://auth-admin-p.netlify.app'
    },
    {
        nome: 'EVPFLIX',
        img_url: '/img/evpflix.png',
        technologies: [{ nome: 'devicon:angular' }],
        sinopse: `EVPFLIX foi um projeto que fiz com alguns colegas de classe, é um projeto feito com o consumo da API do youtube com o objetivo de fazer com que os alunos possam ter acesso apenas a aulas educativas.`,
        link_project: 'https://labrary-management-system-front.vercel.app/'
    },
    {
        nome: 'Jacarta',
        img_url: './img/jacarta.png',
        technologies: [{ nome: 'devicon:angular' }],
        sinopse: `Jacarta é um site no qual é consumida uma api de filme da TMDB com uma proposta de o usuário ver em tempo real os principais filmes da atualidade.`,
        link_project: 'https://jacarta.netlify.app'
    },
    {
        nome: 'Tailwind Bank',
        img_url: './img/tailwind.png',
        technologies: [{ nome: 'devicon:html5' }, { nome: 'vscode-icons:file-type-tailwind' }],
        sinopse: `T.B. é um projeto que fiz quando fui aprender o básico sobre tailwind, como foi uma projeto experimental, decidi não deixá-lo resposivo.`,
        link_project: 'https://taillwind-project.netlify.app'
    },
    {
        nome: ' Lamborghini Remake',
        img_url: './img/lambo.png',
        technologies: [{ nome: 'logos:react' }, { nome: 'vscode-icons:file-type-typescript-official' }],
        sinopse: `L.B. é um projeto que fiz como atividade escolar, no qual teríamos que fazer uma landing page em React.`,
        link_project: 'https://lamb-remake.netlify.app'
    }
];

mh.addEventListener('click', () => {
    header.classList.toggle('actived')
    mh.classList.toggle('actived')
})

projects_array.map(p => {
    projects.innerHTML += `  
    <div class="project rounded-[20px] duration-200 relative z-2 p-0 hover:translate-y-[-10px]">
        <a target="_blank" href="${p.link_project}">
        <img src="${p.img_url}" alt="" class="h-full w-full brightness-[30%] object-cover rounded-[20px]">
        <div class="info w-full min-h-full rounded-[20px] absolute z-2 top-0 left-0 overflow-hidden">
            <div class="txt">
                <h2 class="font-semibold mb-3">${p.nome}</h2>
                <p class="flex items-center gap-3">
                    Tecnologias:
                    ${p.technologies.map(t => {
                        return `<iconify-icon icon="${t.nome}" width="30" height="30"></iconify-icon>`
                    })}
                </p>
                <div>${p.sinopse}</div>
            </div>
        </div>
        </a>
    </div>
    `
})