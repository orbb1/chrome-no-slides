chrome.runtime.onInstalled.addListener(async () => {
    chrome.contextMenus.create({
      id: '123',
      title: 'Open without slides',
      contexts: ['link'],
    });
});

chrome.contextMenus.onClicked.addListener((item) => {
  console.log(item.linkUrl)
});