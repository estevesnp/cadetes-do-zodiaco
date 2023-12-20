export const externals = {};
const internals = {};

externals.start = function() {
    console.log("[QUESTION VIEW HERE]")
}

externals.renderQuestion = function(question, correctAnswer, options) {

    $("#question").empty();

    console.log('[Question]', question);
    console.log('[Correct Answer]', correctAnswer);
    console.log('[Options]', options);

    let element = (
        '<p><strong>' +
        question +
        '</strong></p>'
    );

    options.forEach(res => {
        element += '<button class=';

        if (res === correctAnswer) {
            element += '"correctBtn"';
        } else {
            element += '"incorrectBtn"';
        }
        
        element += ` >${res}</button>`
    });


    
    $(element).appendTo('#question');
}