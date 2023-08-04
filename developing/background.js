window.onload = function () {
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
                const videos = document.getElementsByTagName("ytd-rich-section-renderer");
                Array.from(videos).forEach(function (item) {
                    const shorts = item.getElementsByTagName('ytd-rich-shelf-renderer');
                    if (shorts !== undefined) {
                        item.remove();
                    }
                })
            }
        }, 1000);
    })
}