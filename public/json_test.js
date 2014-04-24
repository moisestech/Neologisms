var words = [
	'water',
	'ocean',
	'sea',
	'burning',
	'heat',
	'flame',
	'grass',
	'forest',
	'trees'
];


// JSONObject
var images_to_words = {
	'water.jpg': {
		words: [
			'water',
			'ocean',
			'sea',
		]
	},
	'fire.jpg': {
		words: [
			'burning',
			'heat',
			'flame',
		]
	},
	'grass.jpg': {
		words: [
			'grass',
			'forest',
			'trees',
		]
	}
};

var words_to_images = {
	water: [
		'water.jpg'
	],
	ocean: [
		'water.jpg'
	],
	sea: [
		'water.jpg'
	],
	burning: [
		'fire.jpg'
	],
	heat: [
		'fire.jpg'
	],
	flame: [
		'fire.jpg'
	],
	grass: [
		'grass.jpg'
	],
	forest: [
		'grass.jpg'
	],
	trees: [
		'grass.jpg'
	]
};

// for (var image in images_to_words) {
// 	console.log(image);

// 	for (var word in images_to_words[image.words]) {
// 		console.log(word);
// 	}
// }

// for images in images_to_words {
// 	for word in words {
// 		console.log(word);
// 	}
// };

// console.log(images_to_words);
var rand_word_1 = words[Math.floor(Math.random()* words.length)],
	rand_word_2 = words[Math.floor(Math.random()* words.length)],
	rand_word_1_image = words_to_images[rand_word_1],
	rand_word_2_image = words_to_images[rand_word_2];

console.log(rand_word_1);
console.log(rand_word_2);
console.log(rand_word_1_image);
console.log(rand_word_2_image);



	// function to call to create specific combination
	function createRandWordType() {
		rand_word_type = Math.floor( 0 + (Math.random() * 1));
		appendNewRandWordType(rand_word_type);
		console.log('rand word type index: ' + rand_word_type);
	}


	// function to call to append specific combination
	function appendNewRandWordType( RandWordType ) {
		switch (RandWordType) {
			case 0:
				checkCurrentWord();
				$('.neomeme').append('<article class="word-1"><h1>' + rand_word_1      + '</h1><video autoplay loop muted class="video" id="video-1"><source src="video/TransAd_2.mp4" type="video/mp4"; codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				$('.neomeme').append('<article class="word-3"><h1>' + rand_word_2        + '</h1><video autoplay loop muted class="video" id="video-2"><source src="video/TransAd_2.mp4" type="video/mp4"; codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				load_2_vids();
				break;
			case 1:
				$('.neomeme').append('<article class="word-1"><h1>' + rand_prefix      + '</h1><video autoplay loop muted class="video" id="video-1"><source src="video/TransAd_2.mp4" type="video/mp4;" codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				$('.neomeme').append('<article class="word-3"><h1>' + rand_adjective   + '</h1><video autoplay loop muted class="video" id="video-2"><source src="video/TransAd_2.mp4" type="video/mp4;" codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				load_2_vids();
				break;

			case 2:
				$('.neomeme').append('<article class="word-1"><h1>' + rand_adjective   + '</h1><video autoplay loop muted class="video" id="video-1"><source src="video/TransAd_2.mp4" type="video/mp4;" codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				$('.neomeme').append('<article class="word-3"><h1>' + rand_noun        + '</h1><video autoplay loop muted class="video" id="video-2"><source src="video/TransAd_2.mp4" type="video/mp4;" codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				load_2_vids();
				break;

			case 3:
				$('.neomeme').append('<article class="word-1"><h1>' + rand_prefix     + '</h1><video autoplay loop muted class="video" id="video-1"><source src="video/TransAd_2.mp4" type="video/mp4;" codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				$('.neomeme').append('<article class="word-2"><h1>' + rand_adjective  + '</h1><video autoplay loop muted class="video" id="video-2"><source src="video/TransAd_3.mp4" type="video/mp4;" codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				$('.neomeme').append('<article class="word-3"><h1>' + rand_noun       + '</h1><video autoplay loop muted class="video" id="video-3"><source src="video/TransAd_2.mp4" type="video/mp4;" codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				load_3_vids();
				break;

			case 4:
				$('.neomeme').append('<article class="word-1"><h1>' + rand_prefix     + '</h1><video autoplay loop muted class="video" id="video-1"><source src="video/TransAd_2.mp4" type="video/mp4;" codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				$('.neomeme').append('<article class="word-3"><h1>' + rand_prefix_2   + '</h1><video autoplay loop muted class="video" id="video-2"><source src="video/TransAd_2.mp4" type="video/mp4;" codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				load_2_vids();
				break;

			case 5:
				$('.neomeme').append('<article class="word-1"><h1>' + rand_prefix     + '</h1><video autoplay loop muted class="video" id="video-1"><source src="video/TransAd_2.mp4" type="video/mp4;" codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				$('.neomeme').append('<article class="word-3"><h1>' + rand_sufix      + '</h1><video autoplay loop muted class="video" id="video-2"><source src="video/TransAd_2.mp4" type="video/mp4;" codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				load_2_vids();
				break;

			case 6:
				$('.neomeme').append('<article class="word-1"><h1>' + rand_noun       + '</h1><video autoplay loop muted class="video" id="video-1"><source src="video/TransAd_2.mp4" type="video/mp4;" codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				$('.neomeme').append('<article class="word-3"><h1>' + rand_noun_2     + '</h1><video autoplay loop muted class="video" id="video-2"><source src="video/TransAd_2.mp4" type="video/mp4;" codecs="avc1.42E01E, mp4a.40.2"/></video></article>');
				load_2_vids();
				break;

			case 7:
				$('.neomeme').append('<article class="word-1"><h1>' + rand_prefix     + '</h1><video autoplay loop muted class="video" id="video-1"><source src="video/TransAd_2.mp4" type="video/mp4;"/></video></article>');
				$('.neomeme').append('<article class="word-3"><h1>' + rand_verb       + '</h1><video autoplay loop muted class="video" id="video-2"><source src="video/TransAd_2.mp4" type="video/mp4;"/></video></article>');
				load_2_vids();
				break;

			case 8:
				$('.neomeme').append('<article class="word-1"><h1>' + rand_prefix     + '</h1><video autoplay loop muted class="video" id="video-1"><source src="video/TransAd_2.mp4" type="video/mp4;"/></video></article>');
				$('.neomeme').append('<article class="word-2"><h1>' + rand_prefix_2   + '</h1><video autoplay loop muted class="video" id="video-2"><source src="video/TransAd_3.mp4" type="video/mp4;"/></video></article>');
				$('.neomeme').append('<article class="word-3"><h1>' + rand_noun       + '</h1><video autoplay loop muted class="video" id="video-3"><source src="video/TransAd_2.mp4" type="video/mp4;"/></video></article>');
				load_3_vids();
				break;

			case 9:
				$('.neomeme').append('<article class="word-1"><h1>' + rand_prefix     + '</h1><video autoplay loop muted class="video" id="video-1"><source src="video/TransAd_2.mp4" type="video/mp4;"/></video></article>');
				$('.neomeme').append('<article class="word-2"><h1>' + rand_prefix_2   + '</h1><video autoplay loop muted class="video" id="video-2"><source src="video/TransAd_3.mp4" type="video/mp4;"/></video></article>');
				$('.neomeme').append('<article class="word-3"><h1>' + rand_adjective  + '</h1><video autoplay loop muted class="video" id="video-3"><source src="video/TransAd_2.mp4" type="video/mp4;"/></video></article>');
				load_3_vids();
				break;

			case 10:
				$('.neomeme').append('<article class="word-1"><h1>' + rand_prefix     + '</h1><video autoplay loop muted class="video" id="video-1"><source src="video/TransAd_2.mp4" type="video/mp4;"/></video></article>');
				$('.neomeme').append('<article class="word-2"><h1>' + rand_prefix_2   + '</h1><video autoplay loop muted class="video" id="video-2"><source src="video/TransAd_3.mp4" type="video/mp4;"/></video></article>');
				$('.neomeme').append('<article class="word-3"><h1>' + rand_verb       + '</h1><video autoplay loop muted class="video" id="video-3"><source src="video/TransAd_2.mp4" type="video/mp4;"/></video></article>');
				load_3_vids();
				break;
			default:
				console.log("error on switch statement");	
		}
	}
	
	createRandWords();
	createRandWordType();





function load_2_vids() {
	document.getElementById('video-1').addEventListener('loadedmetadata', function() {
		video1 = this;
		this.currentTime = Math.floor(Math.random()* this.duration);
	}, false);

	document.getElementById('video-2').addEventListener('loadedmetadata', function() {
		video2 = this;
		this.currentTime = Math.floor(Math.random()* this.duration);
	}, false);
}

function load_3_vids() {
	document.getElementById('video-1').addEventListener('loadedmetadata', function() {
		video1 = this;
		this.currentTime = Math.floor(Math.random()* this.duration);
	}, false);

	document.getElementById('video-2').addEventListener('loadedmetadata', function() {
		video2 = this;
		this.currentTime = Math.floor(Math.random()* this.duration);
	}, false);

	document.getElementById('video-3').addEventListener('loadedmetadata', function() {
		video3 = this;
		this.currentTime = Math.floor(Math.random()* this.duration);
	}, false);
}



	
	// KEYPRESS
	$('.neomeme').on('click', function() {


		console.log($(this).children().length);
		video1.currentTime = Math.floor(Math.random()* 4050);
		video2.currentTime = Math.floor(Math.random()* 4050);

		// console.log(video1);
	});

		setInterval( function() {
			location.reload();
		}, 10000);



