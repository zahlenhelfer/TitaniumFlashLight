/*
	Datei ui.js
	Sie enthält die Applikationslogik für alle 
	Benutzer-Interface Komponenten
*/
(function(){

// erstellen des Namespace "tfl.ui"
tfl.ui = {};

/*
	Hier wird eine Instanz eines Window-Objektes erstellt.
	Dabei wird die Hintergrundgfarbe auf weiss gesetzt.
*/
tfl.ui.createApplicationWindow = function(){
  var win = Ti.UI.createWindow({
    backgroundColor:'white'
  });

  // Nun noch ein Label erstellen um Text an zu zeigen
  var lbl = Ti.UI.createLabel({
    text: 'Titanium Flash Light...light up the dark!',
    height:'auto',
    width:'auto'
  });

  // Das Label wird auf das Window "geklebt"
  win.add(lbl);

  // Starte bzw. öffne das Fenster
  return win;
};

})();