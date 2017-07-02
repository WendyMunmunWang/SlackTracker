chrome.storage.onChanged.addListener(function(changes) {
    chrome.browserAction.setBadgeText({"text": changes.total.newValue.toString() });
});