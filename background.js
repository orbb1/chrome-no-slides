chrome.runtime.onInstalled.addListener(async () => {
    chrome.contextMenus.create({
      id: '123',
      title: 'Open without slides',
      contexts: ['link'],
    });
});

chrome.contextMenus.onClicked.addListener((item) => {
  const suffix = 'http://localhost:3000/results'
  const params = new URLSearchParams()
  params.append('url', item.linkUrl)
  const url = suffix + "?" + params.toString()
  chrome.tabs.create({ url })
});