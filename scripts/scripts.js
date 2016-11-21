carbs  = "10";

function saveToList(event) {
    if (event.which == 13 || event.keyCode == 13) { // as the user presses the enter key, we will attempt to save the data
        var mainInput = document.getElementById('mainInput').value.trim();
        if (mainInput.length > 0) {
        	var li = mainInput;
            document.getElementById('results').innerHTML = li;


        }
        document.getElementById('mainInput').value = '';
        return false;
    }
};
//https://zellwk.com/blog/crud-express-mongodb/
