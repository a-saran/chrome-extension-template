console.log('background script js')

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked (tab) {
  let msg = {
    tab,
    text:'hello'
  }
  chrome.tabs.sendMessage(tab.id, msg)
}