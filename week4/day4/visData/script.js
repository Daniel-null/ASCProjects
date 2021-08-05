console.log(data.results[1].name.title, data.results[1].name.first)

let data_container = document.querySelector('#Jdata');

let array = data.results

for(let i = 0; i < data.results.length; i++) {
    
}

for(let i = 0; i < data.results.length; i++) {
    let name_data = document.createElement('div');
    let gender = document.createElement('div');
    let picture = document.createElement('img');
    
    //names displayed
    name_data.innerHTML = data.results[i].name.title + ' ' + data.results[i].name.first + ' ' + data.results[i].name.last;

    gender.innerHTML = data.results[i].gender

    data_container.append(name_data, gender);
}