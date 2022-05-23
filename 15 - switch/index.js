// switch = declaração que examina um valor
//          mais eficiente que muitas declarações "else if"


let grade = prompt("Escreva sua Nota: ");
grade = grade.toUpperCase();

switch(grade){
    case "A":
        alert("Você foi otimo");
        break;
    case "B":
        alert("Você foi bom");
        break;
    case "C":
        alert("Você foi ok!");
        break;
    case "D":
        alert("Passou raspando!!");
        break;
    case "F":
        alert("Você falhou!!");
        break;
    default:
        alert(`${grade} não é uma nota`)
    
}