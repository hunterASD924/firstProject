const pp = document.querySelector("#pp");

pp.onclick = function () {
    const anumber = 10;
    const arr = ["i", "am", "gay", "o", "i", "01010"];

    for (let i = 0; i < anumber; i++) {
        arr.unshift("no");

        // create new element
        const newp = document.createElement("p");
        newp.innerHTML = i;
        newp.style.color = "red";
        document.body.appendChild(newp)
    }
    console.log(arr);
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     if (arr[i]%2 !== 0){
    //         console.log ("this is odd number", arr[i])
    //     } else if (arr[i]<4) {
    //         console.log ("this is even number", arr[i])
    //     } else {
    //         console.log ("die!")
    //     }

    //     switch (arr[i]) {
    //         case 5:
    //             console.log("this is odd number", arr[i])
    //         case  4:
    //             console.log("this is even number", arr[i])
    //         default:
    //             console.log (arr[i])
    //     }
    // }

    const newArr = arr.slice(1, 4);
    console.log("arr", arr);
    console.log("newArr", newArr);
}


function plus(x, y) {
    return x + y
}

console.log(plus(4, 5))

const cat = {
    name: "sidan",
    age: 5,
    favFood: "fish"
}

const cats = [
    {
        age: 5,
        name: "sidan",
        favFood: "fish",
        game: "play ball"
    },
    {
        name: "amber",
        age: 15,
        favFood: "cat"
    },
    {
        name: "matt",
        age: 10,
        favFood: "fish"
    }
]

for (let i = 0; i < cats.length; i++) {
    console.log(`the ${i + 1}th cat is called ${cats[i]["name"]}`)
}

console.log("this is the first cat", cats[1].game)


const keys = Object.keys(cats[0])

for (let i = 0; i<keys.length; i++){
    console.log ("the key is",keys[i], "the value is ", cats[0][`${keys[i]}`])
}


console.log ("git version control tutorial")