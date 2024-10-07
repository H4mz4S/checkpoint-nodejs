const  generator=require('password-generator');
const password=generator.generate({
    length:10,
    numbers:true

});
console.log('generated password :');
