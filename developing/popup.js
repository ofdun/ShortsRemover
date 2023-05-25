const checkbox = document.getElementById("checkbox");
const attention = document.getElementById('attention');

function init_status() {
  chrome.storage.sync.get(["checkbox"], (items) => {
    console.log(items["checkbox"]);
    if (items["checkbox"] === undefined) {
      update_checkbox(true);
    }
    checkbox.checked = items["checkbox"] === "true"
  });
}

function update_checkbox(value) {
  attention.style.display = 'block';
  chrome.storage.sync.set({ checkbox: JSON.stringify(value) }, () => {});
  init_status();
}

init_status();

checkbox.addEventListener("change", function () {
  update_checkbox(this.checked);
});
