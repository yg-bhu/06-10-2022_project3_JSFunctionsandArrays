// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b)
{
  return a>b?a:b;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
var hsl=0;
function findScaryWord(words)
{
  var hs='';
    for(let i=0;i<words.length;i++)
    {
        //console.log(hs,words[i]);
        if(hs.length<words[i].length)
        {
            hs=words[i];
            //console.log(hs);
        }
        
    }
    if(hs=='')
    {
      return null
    }
    return hs;
}


// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers)
{
  var total=0;
  for(let i=0;i<numbers.length;i++)
  {
      total=total+numbers[i];
  }
  return total;
}



// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midOfPoints(numbersAvg)
{
  for(let i=0;i<numbersAvg.length;i++)
  {
      total=total+numbersAvg[i];
  }
  return total/numbersAvg.length;
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr)
{
  for(let i=0;i<wordsArr.length;i++)
  {
      total=total+wordsArr[i].length;
  }
  return total/wordsArr.length; 
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(items)
{
  for(let i=0;i<items.length;i++)
  {
      for(let j=i+1;j<items.length;j++)
      {
          if(items[i]==items[j])
          {
              items.splice(j,1);
          }
      }
  }
  return items;
}
uniqueArray(items);

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];


function searchElement(wordsFind,key)
{
  words.forEach(element => {
      if(element==key)
      {
          return true;
      }
  });
  return false;
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount, key)
{
  count=0;
  wordsCount.forEach(function(item){
      if(key==item)
      {
        count++;
      }
  });
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];


function maximumProduct(matrix)
{
        let arr = [];
        let tsum=0,tsum1=0;
        for(let i =0 ;i<2;i++)
        {
            for(let j=0;j<2;j++)
            {
                tsum=matrix[i][j]*matrix[i][j+1]*matrix[i][j+2]*matrix[i][j+3];
                tsum1=matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]*matrix[i+3][j];
                if(tsum>tsum1)
                {
                    arr.push(tsum);
                }
                else{
                    arr.push(tsum1);
                }
            }
        }
        arr.sort();
        arr.reverse();
        return arr;
}

