// Inizializza EmailJS con il tuo User ID
(function() {
  emailjs.init("ArSOPzqel7lQ7Cic6");  // Sostituisci con il tuo User ID
})();

// Funzione per inviare l'email tramite EmailJS
function sendMail() {
  var params = {
    from_name: document.getElementById("name").value,   // Nome dell'utente
    from_email: document.getElementById("email").value,  // Email dell'utente
    message: document.getElementById("message").value    // Messaggio
  };

  const serviceID = "kayrondevelopment.it";  // Il tuo Service ID
  const templateID = "template_c4o4b0f";     // Il tuo Template ID

  // Invio dell'email
  emailjs.send(serviceID, templateID, params)
    .then(res => {
      // Pulisci i campi del modulo dopo l'invio
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      console.log(res);
      alert("La tua email è stata inviata correttamente!");
    })
    .catch(err => {
      console.log(err);
      alert("Si è verificato un errore durante l'invio.");
    });
}
