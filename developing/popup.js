const checkbox = document.getElementById('checkbox');

if (localStorage['checkbox'] === undefined) {
    localStorage['checkbox'] = true;
}
else {
    // if "true" in storage we should make this.checked = true, otherwise false
    checkbox.checked = localStorage['checkbox'] === 'true' ? true : false; 
}

function update_checkbox(value) {
    localStorage['checkbox'] = value;
}

checkbox.addEventListener('change', function () {
    update_checkbox(this.checked);
})
