// Fonction qui créé la config pour la requete avec
// les valeurs des input renséeignés par l'utilisateur
const createDataConfig = function (
  base,
  location,
  isDepartment,
  isFrenchState,
  minRange,
  responseToken,
  experience,
  contractType,
  isCity
) {
  let url =
    "https://api.francetravail.io/partenaire/offresdemploi/v2/offres/search?codeROME=M1805,M1802,M1801,M1806,M1803,E1205,E1104,E1101,M1705,E1402,E1401,M1403,M1402,M1810,D1406,D1402";
  // ****** BASES
  if (base) {
    url += `&motsCles=${base}`;
  }
  // ***** LOCATION
  if (location && isCity) {
    url += `&commune=${location}&distance=30`;
  } else if (location && isDepartment) {
    url += `&departement=${location}`;
  } else if (location && isFrenchState) {
    url += `&region=${location}`;
  }
  // ***** FILTERS
  if (experience) {
    url += `&experience=${experience}`;
  }
  if (contractType) {
    if (contractType === "CDI" || contractType === "CDD") {
      url += `&typeContrat=${contractType}`;
    } else if (contractType === "alternate") {
      url += "&natureContrat=E2";
    }
  }
  url += `&sort=2&range=${minRange}-${minRange + 14}`;
  console.log(url, "hello");
  return {
    method: "get",
    url: url,
    headers: {
      Authorization: `Bearer ${responseToken.data.access_token}`,
    },
  };
};

module.exports = createDataConfig;
