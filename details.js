document.onreadystatechange = function () {
    RestCountriesByFetch();
}

async function RestCountriesByFetch() {
    let response = await fetch('https://restcountries.eu/rest/v2/all');
    try {
        let data = await response.text();
        let obj = JSON.parse(data);
        var textSet = '';
        textSet += '<tr>';
        textSet += '<th>name</th>';
        textSet += '<th>topLevelDomain</th>';
        textSet += '<th>alpha2Code</th>';
        textSet += '<th>callingCodes</th>';
        textSet += '<th>capital</th>';
        textSet += '<th>altSpellings</th>';
        textSet += '<th>region</th>';
        textSet += '<th>subregion</th>';
        textSet += '<th>population</th>';
        textSet += '<th>latlng</th>';
        textSet += '<th>demonym</th>';
        textSet += '<th>area</th>';
        textSet += '<th>gini</th>';
        textSet += '<th>timezones</th>';
        textSet += '<th>borders</th>';
        textSet += '<th>nativeName</th>';
        textSet += '<th>numericCode</th>';
        textSet += '<th>currencies</th>';
        textSet += '<th>languages</th>';
        textSet += '<th>translations</th>';
        textSet += '<th>regionalBlocs</th>';
        textSet += '<th>cioc</th>';
        textSet += '<th>flag</th>';
        textSet += '</tr>';
        for (i = 0; i < obj.length; i++) {
            textSet += '<tr>';
            textSet += '<td>' + obj[i].name + '</td>';
            textSet += '<td>' + obj[i].topLevelDomain + '</td>';
            textSet += '<td>' + obj[i].alpha2Code + '</td>';
            textSet += '<td>' + obj[i].alpha3Code + '</td>';
            textSet += '<td>' + obj[i].callingCodes + '</td>';
            textSet += '<td>' + obj[i].capital + '</td>';
            textSet += '<td>' + obj[i].altSpellings + '</td>';
            textSet += '<td>' + obj[i].region + '</td>';
            textSet += '<td>' + obj[i].subregion + '</td>';
            textSet += '<td>' + obj[i].population + '</td>';
            textSet += '<td>' + obj[i].latlng + '</td>';
            textSet += '<td>' + obj[i].demonym + '</td>';
            textSet += '<td>' + obj[i].area + '</td>';
            textSet += '<td>' + obj[i].gini + '</td>';
            textSet += '<td>' + obj[i].timezones + '</td>';
            textSet += '<td>' + obj[i].borders + '</td>';
            textSet += '<td>' + obj[i].nativeName + '</td>';
            textSet += '<td>' + obj[i].numericCode + '</td>';
            textSet += '<td>' + obj[i].currencies + '</td>';
            textSet += '<td>' + obj[i].languages + '</td>';
            textSet += '<td>' + obj[i].translations + '</td>';
            textSet += '<td>' + obj[i].regionalBlocs + '</td>';
            textSet += '<td>' + obj[i].cioc + '</td>';
            textSet += '<td><img src=' + obj[i].flag + ' class="w3-image" /></td>';
            textSet += '</tr>';
        }
        document.getElementById('tableData').innerHTML = textSet;
    }
    catch (error) {
        alert(error.message);
    }
}
