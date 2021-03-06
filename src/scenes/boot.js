define([
    'phaser'
], function (Phaser) {
    'use strict';

    function Boot(game) {
    }

    Boot.prototype = {
        constructor: Boot,
        init: function () {

            //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
            this.input.maxPointers = 1;

            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop)
            {
                //  If you have any desktop specific settings, they can go in here
                this.scale.pageAlignHorizontally = true;
            }
            else
            {
                //  Same goes for mobile settings.
                //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.setMinMax(480, 260, 1024, 768);
                this.scale.forceLandscape = true;
                this.scale.pageAlignHorizontally = true;
            }

        },
        preload: function () {
            this.load.image('preloaderBar', 'assets/images/preloadr_bar.png');
            this.load.image('logo-bandeau', 'assets/images/logo-bandeau.png');
        },
        create: function () {
            this.game.add.text(16, 16, 'boot', {fontSize: '32px', fill: '#fff'});
            this.state.start('Preloader');
        }
    };

    return Boot;
});