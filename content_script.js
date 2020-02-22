console.log('content scriptt running..')

 

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {

  let paragraphs = document.getElementsByTagName('p')
  for(ele of paragraphs) {
    ele.style['background'] = 'yellow'
  }
  
}