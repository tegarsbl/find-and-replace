document.getElementById('findReplaceBtn').addEventListener('click', function() {
    const findText = document.getElementById('findText').value;
    const replaceText = document.getElementById('replaceText').value;
    const inputText = document.getElementById('inputText').value;

    const replacedText = inputText.split(findText).join(replaceText);

    document.getElementById('inputText').value = replacedText;
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText');
    inputText.select();
    document.execCommand('copy');
    alert('Text copied to clipboard');
});