function save() {
	var color = document.getElementById('color');
	chrome.storage.sync.set({
		'color': color[color.selectedIndex].value
	}, function () {
		var status = document.getElementById('statusMessage');
		status.innerText = 'Options saved.';
	});
}

function getOptions() {
	chrome.storage.sync.get({'color': '#FF1493'}, function (item) {
		document.getElementById('color').value = item.color;
	});
}

document.getElementById('save').addEventListener('click', save);
document.addEventListener('load', getOptions());