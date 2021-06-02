const sentence = "hello there! How is your day today? :-D";
let i = 0;
let timer = 0;
function typewriter(str) {
  if (i < str.length) {
    process.stdout.write(str[i]);
    if (i === str.length - 1) {
      console.log('')
    }
    //console.log(`${str[i]} =>${timer} ms`);
    i++;
    //timer += 50
    setTimeout(() => {
      typewriter(str)
    }, 50)

  }
}


typewriter(sentence);

