let options = {
    element: '#granim-canvas',
    states: {
        'default-state': {
            gradients: [
                ['#02AAB0', '#00CDAC'], // first gradient
                ['#0F2027', '#2C5364'], // second gradient
                ['#373B44', '#4286f4'] //third gradient
            ],
            transitionSpeed: 3000, //at what speed do the gradients transition
            loop: true // will gradients loops tru by default
        }
    },
    image: {
        source: './background.jpg',
        blendingMode: 'multiply',
        position: ['center', 'center'],
        stretchMode: ['stretch-if-bigger', 'stretch-if-bigger']
    }
}

let granimInstance = new Granim(options);