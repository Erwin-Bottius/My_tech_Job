// Fonction qui créé la config pour la requete avec
// les valeurs des input renséeignés par l'utilisateur
const createDataConfig = function (base,
  location,
  isDepartment,
  isFrenchState,
  minRange,
  responseToken,
  experience,
  contractType) {
  let url = 'https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?motsCles=M1805';
  if (base) {
    url += `,${base}`;
  }
  if (location && isDepartment) {
    url += `&departement=${location}`;
  }
  else if (location && isFrenchState) {
    url += `&region=${location}`;
  }
  if (experience) {
    console.log('ok');
    url += `&experience=${experience}`;
  }
  console.log(`******************* experience:${experience}`);
  console.log(`******************* contrat:${contractType}`);
  if (contractType) {
    if (contractType === 'CDI' || contractType === 'CDD') {
      url += `&typeContrat=${contractType}`;
    }
    else if (contractType === 'alternate') {
      url += '&natureContrat=E2';
    }
  }
  url += `&sort=2&range=${minRange}-${minRange + 14}`;
  console.log(url);
  return {
    method: 'get',
    url: url,
    headers: {
      Authorization: `Bearer ${responseToken.data.access_token}`,
    },
  };
};

module.exports = createDataConfig;
