function solve(catsArr){
    class Cat{
        constructor(catName, catAge){
            this.catName = catName;
            this.catAge = catAge;
        }
        meow(){
            console.log(`${this.catName}, age ${this.catAge} says Meow`)
        }
    }
    for (let cat of catsArr){
        let currentCat = cat.split(' ');
        let catObj = new Cat(currentCat[0], currentCat[1]);

        catObj.meow();
    }
}

solve(['Candy 1', 'Poppy 3', 'Nyx 2']);