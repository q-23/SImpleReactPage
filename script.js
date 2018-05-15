var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    img: 'http://www.efilmy.tv/images/thumbs/big/b9365482e4ee5372dd03603e9610f4e6.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
  },
  {
  	id:3,
  	title: 'Skyfall',
  	desc: 'Ekranizacja przygód agenta 007',
  	img: 'http://1.fwcdn.pl/po/12/44/451244/7494882.3.jpg'
  },
  {
  	id: 4,
  	title: "Buffalo'66",
  	desc: 'Film o byłym więźniu',
  	img: 'http://1.fwcdn.pl/po/46/65/34665/6922269.3.jpg'
  }
];


var Movie = React.createClass({
	render: function() {
		var moviesElements = movies.map(function (movie) {
			return React.createElement(MovieList, {key: movie.id, movie: movie})
		});
		return (React.createElement("ul", {}, moviesElements)
		)
	}
});

var MovieTitle = React.createClass({
	propTypes: {movie: React.PropTypes.object.isRequired},
	render: function() {
		return (React.createElement("h1", {}, this.props.movie.title))
	}
});

var MovieDescription = React.createClass({
	propTypes: {movie: React.PropTypes.object.isRequired},
	render: function() {
		return (React.createElement("p", {}, this.props.movie.desc))
	}
});

var MoviePoster = React.createClass({
	propTypes: {movie: React.PropTypes.object.isRequired},
	render: function() {
		return (React.createElement("img", {src: this.props.movie.img}))
	}
});

var MovieList = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('li', {},
				React.createElement(MovieTitle, {movie: this.props.movie}),
				React.createElement(MovieDescription, {movie: this.props.movie}),
				React.createElement(MoviePoster, {movie: this.props.movie})
			)
		)
	}
});

var element = React.createElement(Movie, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));