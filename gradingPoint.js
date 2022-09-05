//HackerRank problem solution
function getGrade(score) {
    let grade;
    // Write your code here
    if(score>25 && score<=30)grade='A';
    if(score>20 && score<=25)grade='B';
    if(score>15 && score<=20)grade='C';
    if(score>10 && score<=15)grade='D';
    if(score>5 && score<=10)grade='E';
    if(score>0 && score<=5)grade='F';
    return grade;
}
let result = getGrade(30)
console.log(result)


//Solved by Array


function getGrade(score) {
    let grade;
    // Write your code here
    const scores = [0, 5, 10, 15, 20, 25, 30];
    const grades = ['F','E','D','C','B','A'];
    
    for(let i = 0; i < scores.length; i++){
        if(score<=scores[i+1] && score>scores[i]){
            grade = grades[i]
        }
    }
    return grade;
}
let ans = getGrade(15);
console.log(ans)
