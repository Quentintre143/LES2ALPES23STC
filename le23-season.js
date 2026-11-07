
/* Saison automatique : hiver 21 déc–19 mars, printemps 20 mars–20 juin, été 21 juin–21 sept, automne 22 sept–20 déc. */
(function () {
  var now = new Date(), m = now.getMonth() + 1, d = now.getDate(), s;
  var md = m * 100 + d;
  if (md >= 1221 || md <= 319) s = 'winter';
  else if (md <= 620) s = 'spring';
  else if (md <= 921) s = 'summer';
  else s = 'autumn';
  document.documentElement.setAttribute('data-season', s);
  document.documentElement.setAttribute('data-mode', s === 'winter' ? 'winter' : 'summer');
})();
