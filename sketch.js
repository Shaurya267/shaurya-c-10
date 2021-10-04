var weight = [35,38,40,45];
var sum,avg;
console.log(weight[3])

function setup() 
{
  createCanvas(400,400);
  sum = weight[0]+weight[1]+weight[2]+weight[3];
  avg = sum/weight.length;
  console.log(avg);
}
function draw() 
{
background(51);

}

