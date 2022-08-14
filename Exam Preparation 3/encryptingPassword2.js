function password (input) {
    let count = input.shift();
    
    for(let i = 0; i < count; i++) {
      let pattern = /(?<Start>.+)[>]{1}(?<Numbers>\d{3})\|(?<Lower>[a-z]{3})\|(?<Upper>[A-Z]{3})\|(?<Symbols>[\W\D]{3})[<]{1}(?<End>.+)/g
      let res = [];
      let match = pattern.exec(input[i]);
      
      if(match !== null) {
        let num = match.groups.Numbers;
        let lower = match.groups.Lower;
        let upper = match.groups.Upper;
        let symbols = match.groups.Symbols;
        let password = num + lower + upper + symbols
        res.push(password)
        console.log(`Password: ${res}`);
      } else {
        console.log("Try another password!");
      }
    }  
  }
   
  password(["3",
  "##>00|no|NO|!!!?<###",
  "##>123|yes|YES|!!!<##",
  "$$<111|noo|NOPE|<<>$$"]);
  console.log('================');
  password(["5",
  "aa>111|mqu|BAU|mqu<aa",
  "()>111!aaa!AAA!^&*<()",
  "o>088|abc|AAA|***<o",
  "asd>asd|asd|ASD|asd<asd",
  "*>088|zzzz|ZzZ|123<*"]);