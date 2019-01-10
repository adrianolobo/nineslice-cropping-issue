class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: 'scene1' });
    }
    preload() {
        this.load.image('kenny', './kennyBlue.png')
    }
    create() {
        // creating a object with the width 20 pixels larger than the canvas
        // notice the right side cropping
        this.add.nineslice(
            -10,
            10,
            this.cameras.main.width + 20,
            100,
            'kenny',
            [35, 15, 15]
        );
        // creating a object 10px larger than the width but scaling 0.5
        // notice the right side cropping
        this.add.nineslice(
            150,
            150,
            this.cameras.main.width + 10,
            100,
            'kenny',
            [35, 15, 15]
        ).setScale(0.5);

        // creating a normal object for comparison
        this.add.nineslice(
            150,
            300,
            100,
            100,
            'kenny',
            [35, 15, 15]
        )

        // the cropping issue occours on height too
    }
}