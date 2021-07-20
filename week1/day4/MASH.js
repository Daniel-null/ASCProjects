// MASH

// future house
// -underwater mansion xxxx
// -dumbster xxxx
// -farm house xxxx
// -studio apt 

// destination
// -0 xxxx
// -1 xxxx
// -20 xxxx
// -2000

// future pet
// -dog xxxx
// -cat
// -dino xxxx
// -mankys (chimp) xxxx

// future job
// -astronought xxxx
// -chiropractor xxxx
// -wrestler xxxx
// -dog walker

function mash() {
    return 'You will live in a ' + getHome() + ', travel to ' + getTravelCount() + ' countries, and have a pet ' + getPets() + '! ' + 'you will also attend ' + colleges() + ' and your first bron will be named ' + nameOfFutureKid();
}
 
 
function randNumGenerator(num) {
    return Math.floor(Math.random() * num)
}
 
 
function getHome() {
    let num = randNumGenerator(4);
 
    if (num == 0)
    {
        return 'Mansion';
    }
    else if (num == 1)
    {
        return 'Castle';
    }
    else if (num == 2) {
        return 'Shack';
    }
    else {
        if (process.argv[2] != null) {
            return process.argv[2];
        }
        else {
            return 'farm house'
        }
    }
}
 
function getTravelCount() {
    return randNumGenerator(101);
}

function nameOfFutureKid() {
    let num = randNumGenerator(4);
    if (num == 0) {
        return 'Billy Eyelash'
    }
    else if (num == 1) {
        return 'Danny Devi-toe'
    }
    else if (num == 2) {
        return 'Ronald Mc Donalds Jr'
    }
    else {
        return 'Amelia'
    }
}

function colleges() {
    let num = randNumGenerator(4);
    if (num == 0) {
        return 'Harvard'
    }
    else if (num == 1) {
        return 'Columbia'
    }
    else if (num == 2) {
        return 'NYU'
    }
    else {
        return 'standford'
    }
}

function getPets() {
    let randomPets = ['Dog', 'Cat', 'Fish', 'Shark'];
    if (randNumGenerator(3) == 2) {
        if (process.argv[3] != null) {
            return process.argv[3]
        }
        else {
            return randomPets[randNumGenerator(4)]            
        } 
    }
    else {
        return randomPets[randNumGenerator(4)]
    }
}
 
let fun = mash();
 
console.log(fun);