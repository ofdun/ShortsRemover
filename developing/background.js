window.onload = function () {
    function check_for_shorts(link) {
        return link.slice(24)[0] === 's';
    }

    function app_working(callback) {
        chrome.storage.sync.get(['checkbox'], (items) => {
            callback(items['checkbox'] === 'true');
        })
    }

    app_working(function (result) {
        if (!result) return;
        const interval = setInterval(function () {
            if (window.location.href === 'https://www.youtube.com/feed/subscriptions') {
                clearInterval(interval);
                console.log('Script started!');
                const videos = document.getElementsByTagName("ytd-grid-video-renderer");
                Array.from(videos).forEach(function (item) {
                    const thumbnail_html = item.getElementsByTagName('a')[0];
                    const videos_href = thumbnail_html.href;
                    if (check_for_shorts(videos_href)) {
                        item.remove();
                    }
                })
            }
        }, 1000);
    })
}