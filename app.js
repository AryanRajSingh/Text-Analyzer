function getAverageWordLength(tokens) {
   var totalLength = tokens.join("").length;
  return (totalLength / tokens.length).toFixed(2);
}

function countDistinctWords(tokens) {
  var distinctWords = [];
  for (var i=0; i<tokens.length; i++) {
    if (distinctWords.indexOf(tokens[i]) === -1){
      distinctWords.push(tokens[i]);
    }
  }
  return distinctWords.length;
}

function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

function reportOnText(text) {
  var tokens = tokenizeText(text);
  var numDistinctWords = countDistinctWords(tokens);
  var numTotalWords = tokens.length;
  var averageWordLength = getAverageWordLength(tokens);
  var textReport = $('.js-txt-report');
  textReport.find('.js-unique-word-count').text(numDistinctWords);
  textReport.find('.js-word-count').text(numTotalWords);
  textReport.find('.js-average-word-length').text(
    averageWordLength + " characters");
  textReport.removeClass('hidden');
}

function watchFormSubmissions() {
  $('.js-txt-form').submit(function(event) {
    event.preventDefault();
    var userText = $(this).find('#user-text').val();
    reportOnText(removeReturns(userText));
  });
}

$(function() {
  watchFormSubmissions();
});