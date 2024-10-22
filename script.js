document.getElementById('ausfallForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let lehrerName = document.getElementById('lehrerName').value;
    let ausfallGrund = document.getElementById('ausfallGrund').value;
    alert('Ausfall für ' + lehrerName + ' wegen ' + ausfallGrund + ' wurde erfasst.');
});

function erstelleVertretungsplan() {
    document.getElementById('stundenplanOutput').innerHTML = '<p>Der Vertretungsplan wird generiert...</p>';
    // Hier würde später die Logik zur Erstellung des Vertretungsplans stehen
}
