var platform;
var config =
    {
        type: Phaser.AUTO,
        width: 1500,
        height: 3000,
        physics:
            {
                default: 'arcade',
                arcade:
                    {
                        gravity: { y: 300 },
                        debug: false
                    }
            },
        scene:
            {
                preload: preload,
                create: create//,
                // uncomment when we make the game interactive
                // update: update
            }
    };

var game = new Phaser.Game(config);

function preload()
{
    this.load.image('cave', './images/cave.png');
    this.load.image('tunnel', './images/tunnel.png');
    this.load.image('person', './images/person.png');
}


function create()
{
    platform = this.physics.add.staticGroup();
    platform.create(300, 300, 'ground');
    game.add.image(100, 100, 'cave');

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    this.ball = game.add.sprite(game.world.centerX, game.world.centerY, 'ball');
    this.ball.anchor.set(0.5, 0.5);
}

function update()
{
    // Use this function when making the game interactive
}