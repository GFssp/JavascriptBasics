const myObj = {name: "Dave"};

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Cofee",
        afternoon: "Iced Tea"
    },
    action: function () {
        return `Time for ${this.beverage.morning}`
    }
}

console.log(anotherObj.action())

const band = {
    vocals: "Robert Plant",
    guiter: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
}

/* delete band.drums
console.log(band.hasOwnProperty("drums"))
console.log(Object.keys(band))
console.log(Object.values(band))

for (let job in band) {
    console.log(band[job])
}
 */

const { vocals, guitar, bass, drums } = band;
console.log(vocals) // Returns the name

const sings = ({vocals}) => {
    return `${vocals} sings!`
}

console.log(sings(band))