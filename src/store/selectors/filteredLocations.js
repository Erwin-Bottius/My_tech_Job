const getFilterdLocation = (locationInputValue, locationsArray) => {
  // Si l'utilisateur n'a pas renseigné de localistation, on renvoit tous les départements/régions
  if (!locationInputValue) return locationsArray;

  const filteredLocations = locationsArray.filter((location) => (
    // Ici on compare la chaine de charactere entrée par le user avec celle
    // de nos tabelaux des departements et régions, on mettant tout en minuscule
    // et sans accent
    location.nom.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '')
      .includes(locationInputValue.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ''))
  ));
  return filteredLocations;
};

export default getFilterdLocation;
