const projectName = 'random-quote-machine';
let quotesData;


var colors = [
'#16a085',
'#27ae60',
'#2c3e50',
'#f39c12',
'#e74c3c',
'#9b59b6',
'#FB6964',
'#342224',
'#472E32',
'#BDBB99',
'#77B1A9',
'#73A857'];


var currentQuote = '',
currentAuthor = '';

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: 'application/json' },

    url: 'https://gist.githubusercontent.com/vladana-perlic/a580c0528d60136a3cfa3fe0ed2c7f0e/raw/e2727e184e216df7deaca658a3b8e573d95a4a4f/quotes.json',
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData');
        console.log(quotesData);
      }
    } });

}

function getRandomQuote() {
  return quotesData.quotes[
  Math.floor(Math.random() * quotesData.quotes.length)];

}

function getQuote() {
  let randomQuote = getRandomQuote();


  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;


  $('#tweet-quote').attr(
  'href',
  'https://twitter.com/intent/tweet?hashtags=quotes&related=vladanaperlić&text=' +
  encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));


  $('#tumblr-quote').attr(
  'href',
  'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,vladanaperlić&caption=' +
  encodeURIComponent(currentAuthor) +
  '&content=' +
  encodeURIComponent(currentQuote) +
  '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');



  $('.quote-text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(randomQuote.quote);
  });

  $('.quote-author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').html(randomQuote.author);
  });


  // Ovo je dio koji podesava background image
  //  $("#quote-box").css({"background-image": "url(" + randomQuote.image + ")"});

  $("body").css({ "background-image": "url(" + randomQuote.image + ")" });


  var color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
  {
    backgroundColor: colors[color],
    color: colors[color] },

  1000);

  $('.footer').animate(
  {
    backgroundColor: colors[color],
    color: colors[color] },

  1000);

  $('.button').animate(
  {
    backgroundColor: colors[color] },

  1000);

}

$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });

  $('#new-quote').on('click', getQuote);
});