/*
	Titanium Flash Light
	app.js ist der Startpunkt jeder Titanium Mobile App
*/

/*
	Hier wird eine Instanz eines Window-Objektes erstellt.
	Dabei wird die Hintergrundgfarbe auf weiss gesetzt.
*/

// Ti.API.info ist quasi die Logger-Klasse von TM.
// "warn" und "debug" sind auch verfügbar.
Ti.API.info('Appstart unter '+Ti.Platform.osname);

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
win.open();