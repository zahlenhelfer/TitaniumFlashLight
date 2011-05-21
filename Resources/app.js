/*
	Titanium Flash Light
	app.js ist der Startpunkt jeder Titanium Mobile App
*/

// erstellen des Namespace "tfl"
var tfl = {};

// Laden der Datei ui.js
Ti.include(
	'ui.js' // Datei für die UI
);

// Ti.API.info ist quasi die Logger-Klasse von TM.
// "warn" und "debug" sind auch verfügbar.
Ti.API.info('Appstart unter '+Ti.Platform.osname);

// Die erstellt eine Instanz der Methode createApplicationWindow
// und startet dann das Window-Objekt.
var win = tfl.ui.createApplicationWindow();
// start UI things
win.open();