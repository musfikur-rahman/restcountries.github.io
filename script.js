document.onreadystatechange = function () {
    RestCountriesByFetch();
}

document.getElementById('countryName').onchange = function () {
    RestSingleCountriesByFetch();
}

async function RestCountriesByFetch() {
    let response = await fetch('https://restcountries.eu/rest/v2/all');
    try {
        let data = await response.text();
        let obj = JSON.parse(data);
        var txt = '';
        txt += '<option value="0">-------Select-------</option>';
        for (i = 0; i < obj.length; i++) {
            txt += '<option value=' + obj[i].alpha2Code + '>' + obj[i].name + '</option>';
        }
        document.getElementById('countryName').innerHTML = txt;
    }
    catch (error) {
        alert(error.message);
    }
}

async function RestSingleCountriesByFetch() {
    var requestData = document.getElementById('countryName').value;

    let response = await fetch('https://restcountries.eu/rest/v2/alpha/' + requestData);

    try {
        let responseData = await response.text();
        let obj = JSON.parse(responseData);
        ClearAllFiled();
        document.getElementById('name').value = obj.name;
        document.getElementById('topLevelDomain').value = obj.topLevelDomain;
        document.getElementById('alpha2Code').value = obj.alpha2Code;
        document.getElementById('alpha3Code').value = obj.alpha3Code;
        document.getElementById('callingCodes').value = obj.callingCodes;
        document.getElementById('capital').value = obj.capital;
        document.getElementById('altSpellings').value = obj.altSpellings;
        document.getElementById('region').value = obj.region;
        document.getElementById('subregion').value = obj.subregion;
        document.getElementById('population').value = obj.population;
        document.getElementById('latlng').value = obj.latlng;
        document.getElementById('demonym').value = obj.demonym;
        document.getElementById('area').value = obj.area;
        document.getElementById('gini').value = obj.gini;
        document.getElementById('timezones').value = obj.timezones;
        document.getElementById('borders').value = obj.borders;
        document.getElementById('nativeName').value = obj.nativeName;
        document.getElementById('numericCode').value = obj.numericCode;
        document.getElementById('currencies').value += obj.currencies[0].code + ',' + obj.currencies[0].name + ',' + obj.currencies[0].symbol;
        document.getElementById('languages').value += obj.languages[0].iso639_1 + ',' + obj.languages[0].iso639_2 + ',' + obj.languages[0].name + ',' + obj.languages[0].nativeName;
        document.getElementById('translations').value += obj.translations.de + ',' + obj.translations.es + ',' + obj.translations.fr + ',' + obj.translations.ja + ',' + obj.translations.it + ',' + obj.translations.br + ',' + obj.translations.pt + ',' + obj.translations.nl + ',' + obj.translations.hr + ',' + obj.translations.fa;
        document.getElementById('regionalBlocs').value = obj.regionalBlocs[0].acronym + ',' + obj.regionalBlocs[0].name + ',' + obj.regionalBlocs[0].otherAcronyms + ',' + obj.regionalBlocs[0].otherNames;
        document.getElementById('cioc').value = obj.cioc;
        document.getElementById('flag').src = obj.flag;
    }
    catch (error) {
        alert(error.message);
    }
}

function ClearAllFiled() {
    document.getElementById('name').value = '';
    document.getElementById('topLevelDomain').value = '';
    document.getElementById('alpha2Code').value = '';
    document.getElementById('alpha3Code').value = '';
    document.getElementById('callingCodes').value = '';
    document.getElementById('capital').value = '';
    document.getElementById('altSpellings').value = '';
    document.getElementById('region').value = '';
    document.getElementById('subregion').value = '';
    document.getElementById('population').value = '';
    document.getElementById('latlng').value = '';
    document.getElementById('demonym').value = '';
    document.getElementById('area').value = '';
    document.getElementById('gini').value = '';
    document.getElementById('timezones').value = '';
    document.getElementById('borders').value = '';
    document.getElementById('nativeName').value = '';
    document.getElementById('numericCode').value = '';
    document.getElementById('currencies').value = '';
    document.getElementById('languages').value = '';
    document.getElementById('translations').value = '';
    document.getElementById('regionalBlocs').value = '';
    document.getElementById('cioc').value = '';
    document.getElementById('flag').src = '';
}
