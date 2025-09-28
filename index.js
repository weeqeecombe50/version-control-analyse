const fs = require('fs');
const path = require('path');

// Hauptfunktion für die Analyse
function analyzeRepository(repoPath) {
    // Hier würde die Logik zur Analyse des Git-Repositories implementiert werden.
    console.log(`Analysiere das Repository: ${repoPath}`);
    // Beispiel für Ausgabe:
    // - Anzahl der Commits, Beitragende, etc.
}

// Command-Line-Argumente verarbeiten
const args = process.argv.slice(2);
if (args.length < 2 || args[0] !== '--path') {
    console.error('Verwendung: node index.js --path /pfad/zum/repository');
    process.exit(1);
}

const repoPath = args[1];
if (!fs.existsSync(repoPath)) {
    console.error(`Der angegebene Pfad existiert nicht: ${repoPath}`);
    process.exit(1);
}

// Repository analysieren
analyzeRepository(repoPath);