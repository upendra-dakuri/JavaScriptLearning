let cat={

    sound: 'meow',
    speak: function()
    {
        console.log(this.sound);
    }
};
cat.speak();
let sperakfun=cat.speak;
console.log(sperakfun.bind(cat)());