
let name = prompt("Ismingizni kiriting:");
let age = prompt("Yoshingizni kiriting:");
let height = prompt("Bo'yingizni kiriting (sm):");


let isConfirmed = confirm("Ma'lumotlaringiz to‘g‘rimi?");

if (isConfirmed) {
    age = Number(age); 
    height = parseFloat(height); 
    
    alert(`Ism: ${name}\nYosh: ${age} yosh\nBo'y: ${height} sm`);
} else {
    alert("Ma'lumotlar bekor qilindi!");
}
