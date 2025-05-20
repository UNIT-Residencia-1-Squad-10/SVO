    import { renderNewsCards, CardSize } from './script.js';
export async function load_news () {
    try {
        const response = await fetch('../data/news.json');
        if (!response.ok) throw new Error('Erro HTTP: ' + response.status);
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar a notícia:", error);
        return null;
    }
}
function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}
export async function renderpage (){
    const div = document.createElement('div')
    div.classList.add('noticia-container')
    const data_news =  await load_news()
    const id = getIdFromUrl();
        const noticia = data_news.find(n => n.id == id);
    console.log(id); 
    div.innerHTML= `
    <section class="intro-noticia">
        <h1 class="titulo-noticia">${noticia.title}</h1>
        <p class="subtitulo-noticia">
        ${noticia.content}
        </p>
        <div class="autor-info">
          <img src="assets/3971219.png" alt="Pedro Ximenes">
          <div>
            <p class="autor-nome">${noticia.author}</p>
           <div class="redes-sociais">
  <a href="https://instagram.com" target="_blank" class="btn-social" aria-label="Instagram">
    <i class="fi fi-brands-instagram"></i>
  </a>
  <a href="https://facebook.com" target="_blank" class="btn-social" aria-label="Facebook">
    <i class="fi fi-brands-facebook"></i>
  </a>
  <a href="https://twitter.com" target="_blank" class="btn-social" aria-label="Twitter">
    <i class="fi fi-brands-twitter-alt-circle"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" class="btn-social" aria-label="LinkedIn">
    <i class="fi fi-brands-linkedin"></i>
  </a>
  <a href="mailto:email@exemplo.com" class="btn-social" aria-label="E-mail">
    <i class="fi fi-sr-envelope"></i>
  </a>
</div>
          </div>
        </div>
        <div class="imagem-noticia">
          <img src="${noticia.image}" alt="Nova sede do SVO">
        </div>
      </section>

      <div class="texto-da-noticia">
        <article>
          A iniciativa faz parte de um projeto de expansão que busca oferecer serviços mais acessíveis e eficientes na análise de causas de morte. De acordo com a coordenação do SVO, a nova unidade conta com tecnologia de ponta para a digitalização de registros, exames laboratoriais avançados e modernização dos laboratórios para análises histopatológicas. Essas melhorias vão agilizar a emissão de laudos e garantir diagnósticos mais precisos, beneficiando tanto os familiares dos falecidos quanto o sistema de saúde como um todo.
          Além da modernização estrutural, a nova sede do SVO em Aracaju fortalecerá a integração com órgãos de saúde pública e instituições acadêmicas, permitindo o compartilhamento de dados epidemiológicos e contribuindo para o desenvolvimento de estratégias de prevenção de doenças.
          A expansão do SVO para Aracaju é um passo importante para aprimorar a transparência e confiabilidade dos registros de mortalidade, além de garantir um atendimento mais ágil e humanizado. A expectativa é que a nova unidade melhore significativamente a capacidade de investigação de óbitos de causa desconhecida ou natural na região.
          Impacto na Saúde Pública
          Com a nova sede, o SVO poderá atender um número maior de casos, reduzindo a sobrecarga de outras unidades e permitindo uma investigação mais detalhada de óbitos sem causa evidente. Isso contribuirá diretamente para o aprimoramento das estatísticas de saúde e para o desenvolvimento de políticas públicas mais eficazes na prevenção de doenças.
          Especialistas da área destacam que a ampliação do serviço também terá impacto positivo na formação de novos profissionais, já que a unidade em Aracaju oferecerá oportunidades para estudantes e pesquisadores da área médica realizarem estudos e treinamentos voltados à patologia.
          Atendimento e infraestrutura
          A nova sede do SVO contará com uma estrutura moderna, equipada com laboratórios de última geração e um ambiente projetado para proporcionar um atendimento humanizado às famílias que buscam esclarecimentos sobre as causas dos óbitos de seus entes queridos. Além disso, a unidade contará com uma equipe multidisciplinar altamente qualificada para garantir eficiência e precisão nos laudos periciais.
          Para mais informações sobre os novos serviços oferecidos pela sede do SVO em Aracaju, os interessados podem acessar o site oficial ou entrar em contato com a unidade.
        </article>
      </div>

      <h1 class="leia-mais-titulo">Leia mais</h1>
      <div class="underline"></div>
      <div class="grid-leia-mais">
        <!-- Os cards serão carregados dinamicamente aqui -->
      </div>
    `
        document.querySelector('main').appendChild(div);
renderNewsCards('.grid-leia-mais', CardSize.SMALL, 'main');
}