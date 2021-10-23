// Fonction qui transforme la date d'actualisation de l'offre d'emploi au bon format
const getDate = (actualisationDate, currentDate) => {
  const offerDate = new Date(actualisationDate).getTime();
  // ici on soustrait la date de publication (en seconde : timestamp )
  // à la date actuelle (en seconde : timestamp )
  // on soustrait également 2h par rapport à l'utc
  const delay = (currentDate - (offerDate - 7200000)) / 86400000;
  if (delay < 1) {
    return 'il y a moins de 24h';
  }
  if (delay < 7) {
    return `il y a ${Math.round(delay)} jours`;
  }
  if (delay < 30) {
    return `il y a ${Math.round(delay / 7)} semaines`;
  } if (delay >= 30) {
    return `il y a ${Math.round(delay / 30)} mois`;
  }
  const date = new Date(actualisationDate);
  return date.toLocaleDateString('fr');
};

export default getDate;
