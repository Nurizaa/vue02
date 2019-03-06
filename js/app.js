var main = new Vue({
    el: '#app',
    data: {
        message: "Flowers",
        image1: 'assets/images/bir.jpg',
        beautiful: true,
        datails: [' A red rose is an unmistakable expression of love.','The Peony is best known by its scientific name, Paeonia',
                  'A Daisy symbolizes innocence and purity.'],
        variants: [
            {
                'id': '1',
                'variant': 'Rose',
                'imageVariant': 'assets/images/bir.jpg',
            },
            {
                'id': '2',
                'variant': 'Peony',
                'imageVariant': 'assets/images/eki.jpg',
            },
            {
                'id': '3',
                'variant': 'Daisy',
                'imageVariant': 'assets/images/uch.jpg',
            },
        ]
    },
    methods: {
        updateImage(image) {
            this.image1 = image
        }
    }
});