#! /usr/bin/env node
import inquirer from "inquirer";

const library:string = "Greeks";
const planet:string = "Jupiter";
const river:string = "Amazon River";
const painting:string = "Vincent van Gogh";
const browser:string = "WorldWideWeb";

const quiz = await inquirer.prompt(
    [
        {
            message:"Enter your name",
            type:"input",
            name:"name"
        },
        {
            message:`Select the correct answer:
            Which ancient civilization built the ancient library of Alexendria?`,
            name:"questionOne",
            type:"list",
            choices:['Egyptians','Greeks','Romans','Bobylonians']
        },
        {
            message:`Select the correct answer:
            Which is the largest planet in our solar system?`,
            name:'questionTwo',
            type:'list',
            choices:['Earth','Saturn','Jupiter','Uranus']
        },
        {
            message:`Select the correct answer:
            Which river is the longest in South America?`,
            name:'questionThree',
            type:'list',
            choices:['Amazon River','Rio Grande','Orinoco River','Magdalena River']
        },
        {
            message:`Select the correct answer:
            Who painted the famous painting "The Starry Night"?`,
            name:'questionFour',
            type:'list',
            choices:['Leonardo da Vinci','Vincent van Gogh','Pablo Picasso','Claude Monet']
        },
        {
            message:`Select the correct answer:
            What is name of the first web browser developed in 1990?`,
            name:'questionFive',
            type:'list',
            choices:['Internet Explorer','Google Chrome','Mozilla Firefox','WorldWideWeb']
        }
    ]
);
let yourName = quiz.name;
console.log('yourName: ', yourName);
switch(quiz.questionOne){
    case library:
        console.log(quiz.questionOne,':','correct');
        break;
        default :
        console.log(quiz.questionOne,':','wrong')
};
switch(quiz.questionTwo){
    case planet :
        console.log(quiz.questionTwo,':',"correct")
        break;
        default :
        console.log(quiz.questionTwo,':','wrong')
};
switch(quiz.questionThree){
    case river :
        console.log(quiz.questionThree,':','correct')
        break;
        default :
        console.log(quiz.questionThree,':','wrong')
};
switch(quiz.questionFour){
    case painting :
        console.log(quiz.questionFour,':','correct')
        break;
        default :
        console.log(quiz.questionFour,':','wrong')
};
switch(quiz.questionFive){
    case browser :
        console.log(quiz.questionFive,':','correct')
        break;
        default :
        console.log(quiz.questionFive,':','wrong')
};
if(quiz.questionOne === library && 
    quiz.questionTwo === planet &&
    quiz.questionThree === river &&
    quiz.questionFour === painting &&
    quiz.questionFive === browser 
){
    console.log('Progress: Excellent')
}else{
    console.log('Progress: Keep it up')
};
let score = [];
if(quiz.questionOne===library){
    score.push(1)
}else{
    score.push(0)
};
if(quiz.questionTwo===planet){
    score.push(1)
}else{
    score.push(0)
};
if(quiz.questionThree===river){
    score.push(1)
}else{
    score.push(0)
};
if(quiz.questionFour===painting){
    score.push(1)
}else{
    score.push(0)
};
if(quiz.questionFive===browser){
    score.push(1)
}else{
    score.push(0)
};
let sum = score.reduce((acc,current)=>acc+current,0);
console.log(`Your score is ${sum} out of 5`);

