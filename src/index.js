module.exports = function toReadable (number) {
  let first  = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 
  'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let second = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let hund = number - (100 * Math.floor(number / 100));
  let dozen = Math.floor(hund / 10) - 2;

  if(number >= 0 && number <= 19){
    return first[number];
  }else if (number % 10 === 0 && number < 100){
    return second[Math.floor (number / 10)-2];
  }else if (number > 19 && number < 100){
    return `${second[Math.floor (number / 10) - 2]} ${first[number % 10]}`;
  }else if(number >= 100 && number <= 999){
    if(number % 100 === 0){
      return `${first[number / 100]} hundred`;
    }else if(number % 100 >= 1 && number % 100 <= 19){
      return `${first[Math.floor (number / 100)]} hundred ${first[number % 100]}`;
    }else if(number % 10 === 0){
      return `${first[Math.floor (number / 100)]} hundred ${second[dozen]}`;
    }
    else{
      return `${first[Math.floor (number / 100)]} hundred ${second[dozen]} ${first[hund % 10]}`;
    }
  }
}
