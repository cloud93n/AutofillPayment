let securepay = document.getElementById("securepay");
let bpoint = document.getElementById("bpoint");

function securepayFill()
{
  document.getElementById('card_holder_value_input').value = 'user'
  document.getElementById("card_input_1").value = "4444"
  document.getElementById("card_input_2").value = "3333"
  document.getElementById("card_input_3").value = "2222"
  document.getElementById("card_input_4").value = "1111"
  document.getElementById("card_expiry_month").value = "12"
  document.getElementById("card_expiry_year").value = "36"
  document.getElementById("cvv_input").value = "123"
  
}

function bpointFill()
{
  document.getElementById('CardNumber').value = '4444333322221111'
  document.getElementById("ExpiryMonth").value = "99"
  document.getElementById("ExpiryYear").value = "00"
  document.getElementById("CVC").value = "123"
  
}

async function injectSecurepay() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  await chrome.scripting.executeScript({
  target: { tabId: tab.id },
  func: securepayFill,
});
}

async function injectBpoint() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  await chrome.scripting.executeScript({
  target: { tabId: tab.id },
  func: bpointFill,
});
}

securepay.onclick = injectSecurepay
bpoint.onclick = injectBpoint
