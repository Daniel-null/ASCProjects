let state = 1;

const randomUser = fetch('https://randomuser.me/api?results=100')
    .then(function (response) {
        return response.json();
});


randomUser.then(function (data) {
    let input = document.querySelector('#input')
    let filter = document.querySelector('#enter');
    // play with data variable that we received
    let container = document.querySelector('#bigDiv');
    
    console.log(data.results) // ...etc

    dataArray = data.results

    filter.onclick = function() { 
        for(let i = 0; i < dataArray.length; i++) {
            //highlights images in array
            let image = dataArray[i].picture.medium;

            let nameData = dataArray[i].name
            
            //creates div element
            let div = document.createElement('div');

            //male
            if(dataArray[i].gender == 'male' && input.value == 'male') {
                //creates div element to store img element
                div.classList.add('images');
                container.append(div);            
            
                //creates image element and adds it to div
                let newImage = document.createElement('img');
                newImage.src = image;

                //creates name
                let name = document.createElement('h1');
                name.innerHTML = nameData.title + ' ' + nameData.first + ' ' + nameData.last;

                div.append(newImage, name);
            }
            //female
            else if(dataArray[i].gender == 'female' && input.value == 'female') {
                //creates div element to store img element
                div.classList.add('images');
                container.append(div);            
            
                //creates image element and adds it to div
                let newImage = document.createElement('img');
                newImage.src = image;

                //creates name
                let name = document.createElement('h1');
                name.innerHTML = nameData.title + ' ' + nameData.first + ' ' + nameData.last;

                div.append(newImage, name);
            }
            else if(dataArray[i].name.first == input.value && input.value != 'female' && input.value != 'male') {
                //creates div element to store img element
                div.classList.add('images');
                container.append(div);            
            
                //creates image element and adds it to div
                let newImage = document.createElement('img');
                newImage.src = image;

                //creates name
                let name = document.createElement('h1');
                name.innerHTML = nameData.title + ' ' + nameData.first + ' ' + nameData.last;

                div.append(newImage, name);
            }
            else if(dataArray[i].name.last == input.value && input.value != 'female' && input.value != 'male') {
                //creates div element to store img element
                div.classList.add('images');
                container.append(div);            
            
                //creates image element and adds it to div
                let newImage = document.createElement('img');
                newImage.src = image;

                //creates name
                let name = document.createElement('h1');
                name.innerHTML = nameData.title + ' ' + nameData.first + ' ' + nameData.last;

                div.append(newImage, name);
            }
            else if(input.value == '') {
                //creates div element to store img element
                div.classList.add('images');
                container.append(div);            
            
                //creates image element and adds it to div
                let newImage = document.createElement('img');
                newImage.src = image;

                //creates name
                let name = document.createElement('h1');
                name.innerHTML = nameData.title + ' ' + nameData.first + ' ' + nameData.last;

                div.append(newImage, name);
            }

        }
    }
})

    // // add if statments to filter
    // filter.onclick = function() {
    //     for(let i = 0; i < dataArray.length; i++) {
    //         //highlights images in array
    //         let image = dataArray[i].picture.medium;
    
    //         let nameData = dataArray[i].name
    
    //         //creates div element to store img element
    //         let div = document.createElement('div');
    //         div.classList.add('images');
    //         container.append(div);
    
    //         //creates image element and adds it to div
    //         let newImage = document.createElement('img');
    //         newImage.src = image;
    
    //         //creates name
    //         let name = document.createElement('h1');
    //         name.innerHTML = nameData.title+ ' ' + nameData.first + ' ' + nameData.last;
    
    //         div.append(newImage, name);
    //     }
    // }