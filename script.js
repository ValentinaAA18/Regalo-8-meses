$(document).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
        showMessage("Felices 8 meses mi cielo, te amo.");
    });
    btn_reset.click(function() {
        close();
        showMessage("Reset realizado.");
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }

    function showMessage(message) {
        var messageElement = $("<div class='message'>" + message + "</div>").hide();
        $("body").append(messageElement);
        messageElement.fadeIn(1000).delay(2000).fadeOut(1000, function() {
            $(this).remove();
        });
    }
   
});

// Agregamos el estilo CSS directamente en el script
$("head").append("<style>.message { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(255, 255, 255, 0.8); padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); z-index: 9999; }</style>");

