function sortNumbers(fNum,sNum,tNum){


      if(fNum > sNum && fNum > tNum){
          console.log(fNum);
          if(sNum > tNum){
            console.log(sNum);
            console.log(tNum);
        }else {
            console.log(tNum);
            console.log(sNum);
        }
      }else if(sNum > fNum && sNum > tNum){
                 
        console.log(sNum);
        if(fNum > tNum){
            console.log(fNum);
            console.log(tNum);
        }else {
            console.log(tNum);
            console.log(fNum);
        }
      } else if(tNum > fNum && tNum > sNum){
          console.log(tNum)
          if(fNum > sNum){
              console.log(fNum);
              console.log(sNum)
          }else {
              console.log(sNum);
              console.log(fNum)
          }
      }
      
   


}

sortNumbers(3,4,5)