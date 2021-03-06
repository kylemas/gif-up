let gifs = [
	'images/chan.gif',
	'images/cry.gif',
	'images/dog.gif',
	'images/original.gif',
	'images/tenor.gif',
	'images/doggo.gif',
	'images/cat.gif', 
	'images/treadmill.gif',
	'images/kitten.gif',
	'images/husky.gif',
	'images/pig.gif',
	'images/fox.gif',
	'images/massage.gif'
];

let quotes = [
	'You know youre in love when you cant fall asleep because reality is finally better than your dreams. - Dr. Suess',
	'Get busy living or get busy dying. - Stephen King',
	'Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. - Mark Twain',
	'Those who dare to fail miserably can achieve greatly. - John F. Kennedy',
	'It is hard to fail, but it is worse never to have tried to succeed. - Theodore Roosevelt',
	'Im a success today because I had a friend who believed in me and I didnt have the heart to let him down. - Abraham Lincoln',
	'Let us always meet each other with smile, for the smile is the beginning of love. - Mother Theresa',
	'Our greatest fear should not be of failure, but of succeeding at things in life that dont really matter. - Francis Chan',
	'It is our choices, that show what we truly are, far more than our abilities. - J. K Rowling',
	'Only put off until tomorrow what you are willing to die having left undone. - Pablo Picasso',
	'If you want to be happy, be. - Leo Tolstoy'
];

let colors = [
	'#FFB5E8',
	'#F3D1DC',
	'#F6A7C1',
	'#FCF0CF',
	'#FDCF76',
	'#89AEB2',
	'#F1E0B0',
	'#F1CDB0',
	'#E7CFC8',
	'#D2A3A9',
	'#E6DCE5',
	'#EBC3C1',
	'#ECAD8F',
	'#C8B4BA',
	'#F3DDB3',
	'#C1CD97',
	'#E18D96',
	'#38908F',
	'#B2EBE0',
	'#FFBFA3',,
	'#ECBE7A',
	'#F9E1E0'
]


function gifPicker(){
	let length = gifs.length;
	let gifIndex = Math.floor(Math.random() * length);
	let gifContent = document.getElementById('gif');
	let newGif = gifs[gifIndex];
	gifContent.src = newGif;
};

function quotePicker(){
	let length = quotes.length;
	let quoteIndex = Math.floor(Math.random() * length);
	let quoteContent = document.getElementById('quote');
	let newQuote = quotes[quoteIndex];
	quoteContent.innerHTML = newQuote;
}

function randomColor(){
	let length = colors.length;
	let newIndex = Math.floor(Math.random() * length);
	let newColor = colors[newIndex];
	document.body.style.backgroundColor = newColor;


}
window.onload = function(){
	gifPicker();
	quotePicker();
	randomColor();
};