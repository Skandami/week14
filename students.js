// Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию Math.random().
const grades = [];
for (let i = 0; i < 12; i++) {
    const grade = Math.floor(Math.random() * 100);
    grades.push(grade);
}
console.log(grades);

// Рассчитайте и выведите средний балл студентов, используя методы массивов.

const totalAverage = grades.reduce((sum, current) => sum + current, 0);
console.log(Math.floor(totalAverage / grades.length));

// Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.

const maxGrade = Math.max(...grades);
console.log(maxGrade);

// Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
const filterGrades = (num) => num >= 60;
const bestStudents = grades.filter(filterGrades);

console.log(bestStudents);

const result = grades.filter(el => !bestStudents.includes(el));
console.log(result);

// Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.

const filterLowGrades = (num) => num < 60;
const weakStudents = grades.filter(filterLowGrades);

console.log(weakStudents);

/*  Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
    - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
    - Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
    - Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
    - Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
    - Если оценка ниже 20, преобразуйте её в "E"                              */

const gradeLetters = grades.map(function (gradeValue) {
    if (gradeValue >= 80 && gradeValue <= 100) {
        return "A";
    }
    else if (gradeValue >= 60 && gradeValue <= 79) {
        return "B";
    }
    else if (gradeValue >= 40 && gradeValue<= 59) {
        return "C";
    }
    else if (gradeValue >= 20 && gradeValue <= 39) {
        return "D";
    }
    else
    {
        return "E";
    }
});
console.log(gradeLetters);

