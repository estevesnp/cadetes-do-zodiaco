const internals = {
    handlers: {},
    elements: {}
};

export const externals = {};

internals.createButton = function () {
    return '<button class="random-player">Random Trivia Question</button>';
};

internals.createPlayerCard = function (player) {

    console.log('[PLAYER]', player);

    let result = (
        '<div>' +
        '<p><strong>First Name: </strong>' +
        player.first_name +
        '</p>' +
        '<p><strong>Last Name: </strong>' +
        player.last_name +
        '</p>' +
        '<p><strong>Position: </strong>' +
        player.position +
        '</p>' +
        '<p><strong>Guess the team: </strong></p>'
    );

    player.teamOptions.forEach(element => {
        
        result += '<button class=';
        
        if (element === player.team.full_name) {
            result += '"correctBtn"';
        } else {
            result += '"incorrectBtn"';
        }
        
        result += ` >${element}</button>`

    })

    result += '</div>'
    
    return result;
};

internals.removeGameImage = function() {
    $('#game-result').remove();
}

internals.teamOptionsButtonsOnClick = function() {
    $('.correctBtn').click(function() {
        $('#game-result').remove();
        let element = '<img id="game-result" src="/img/unsade.jpg">'
        $(element).appendTo("#app");
    });
    $('.incorrectBtn').click(function() {
        $('#game-result').remove();
        let element = '<img id="game-result" src="/img/sade.jpg">'
        $(element).appendTo("#app");
    })
}

internals.renderPlayer = function (player) {
    if (internals.elements.playerCard) {
        internals.elements.playerCard.empty();
        internals.removeGameImage();
    }

    internals.elements.playerCard = $(internals.createPlayerCard(player));
    internals.elements.app.append(internals.elements.playerCard);
};

internals.renderOptions = function(player) {}

internals.renderButton = function () {
    if (internals.elements.button) {
        return;
    }

    internals.elements.button = $(internals.createButton());
    internals.elements.button.click(internals.handlers['button']);
    internals.elements

    internals.elements.app.append(internals.elements.button);
};

externals.bind = function (event, handler) {
    internals.handlers[event] = handler;
};

externals.render = function (player) {
    internals.elements.app = $('#app');
    internals.renderButton();

    if (player) {
        internals.renderPlayer(player);
        internals.teamOptionsButtonsOnClick();
    }
};