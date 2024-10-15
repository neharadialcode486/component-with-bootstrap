const contentData = {
  beginner: {
    title: "Investisseur néophyte",
    text: "Dans ce module dédié aux débutants, on passe en revue les principes de bases de ce marché avec de nombreuses vidéos sur le bitcoin, les stratégies d'investissement les plus efficaces et la psychologie à adopter pour réussir. L'objectif est d'Acquérir les bases pour bien débuter en Investissement !",
  },
  profitable: {
    title: "Investisseur rentable",
    text: "Ce module se concentre sur des stratégies pour maximiser vos gains. Vous apprendrez à analyser le marché et à développer une approche de trading durable.",
  },
  experienced: {
    title: "Investisseur expérimenté",
    text: "Destiné aux investisseurs avec un peu plus d'expérience, ce module explore des techniques avancées et des outils pour affiner vos stratégies.",
  },
  smart: {
    title: "Investisseur malin",
    text: "Apprenez à investir intelligemment en utilisant des outils et des stratégies qui maximisent votre retour sur investissement tout en minimisant le risque.",
  },
  independent: {
    title: "Investisseur indépendant",
    text: "Ce module vous guidera pour devenir un investisseur autonome, capable de prendre des décisions éclairées et stratégiques.",
  },
};

function showContent(level) {
  const content = contentData[level];
  document.getElementById("content-title").textContent = content.title;
  document.getElementById("content-text").textContent = content.text;
}
