class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: 'scene1' });
    }
    preload() {
        this.load.image('kenny', './kennyBlue.png')
    }
    create() {
        this.dlg = this.add.nineslice(
            -10,
            10,
            this.cameras.main.width + 20,
            100,
            'kenny',
            [35, 15, 15]
        );

        this.dlg = this.add.nineslice(
            150,
            150,
            100,
            100,
            'kenny',
            [35, 15, 15]
        )
    }
}