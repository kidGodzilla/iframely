module.exports = {

    getMeta: function(oembed) {
        return {
            site: oembed.site_name || oembed.provider_name
        };
    }
}