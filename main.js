var game = new Phaser.Game(400,500);


var mainState = {
	preload: function () {
		game.load.image('koko','bird.png');
		// wrzucanie pliku z obrazkami i audio
	},

	create: function(){
		game.stage.backgroundColor = '#ffcee1';//kolor tła
		game.physics.startSystem(Phaser.Physics.ARCADE);//włączamy fizykę arkadową (grafika 2d)

		this.bird= game.add.sprite(100, 400,'koko');

		game.physics.arcade.enable(this.koko);// włączyliśmy fizykę dla naszego ptaka

		this.bird.body.gravity.y= 1000;


		//ustawianie na miejscu obiektów które mają się pojawić po starcie gry

	},
	upload: function(){
		// co ma się zmieniać w czasie 

	},

};


game.state.add('main', mainState);
game.state.start('main');