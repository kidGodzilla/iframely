module.exports = {

    re: [
        /^https?:\/\/(?:www\.)?vid\.ly\/([a-z0-9\-]+)/i,
        /^https?:\/\/(?:\w+\.cdn\.)?vid\.ly\/([a-z0-9\-]+)\/?.*/i
    ],

    mixins: ['domain-icon'],

    getLink: function(urlMatch) {

        return [{
            href: "https://d132d9vcg4o0oh.cloudfront.net/embeded.html?link=" + urlMatch[1] + "&new=1&autoplay=false",
            type: CONFIG.T.text_html,
            rel: [CONFIG.R.player, CONFIG.R.html5],
            "aspect-ratio": 640 / 360
        }, {
            href: "//vid.ly/" + urlMatch[1] + "/poster",
            type: CONFIG.T.image,
            rel: CONFIG.R.thumbnail
        }];
    },

    tests: [
        "http://vid.ly/3m6w0r"
    ]
};