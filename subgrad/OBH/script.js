// Загрузка заголовка таблицы из файла "headers.txt"
fetch('headers.txt')
    .then(response => response.text())
    .then(header => {
        const table = document.querySelector('.grades-table');

        // Создаем заголовок таблицы
        const headerRow = table.insertRow(0);
        const headerCell = headerRow.insertCell(0);
        headerCell.textContent = 'ОБЖ';

        const headerColumns = header.split('|');
        for (let i = 0; i < headerColumns.length; i++) {
            const cell = headerRow.insertCell(i + 1);
            cell.textContent = headerColumns[i].trim();
        }
    });

// Загрузка данных из файла "grades.txt"
fetch('grades.txt')
    .then(response => response.text())
    .then(data => {
        const table = document.querySelector('.grades-table');
        const rows = data.split('\n');
        for (let i = 0; i < rows.length; i++) {
            const row = table.insertRow(i + 1); // Начинаем с 1-й строки после заголовка
            const columns = rows[i].split('|');
            for (let j = 0; j < columns.length; j++) {
                const cell = row.insertCell(j);
                cell.textContent = columns[j].trim();
            }
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        const selectedSubject = localStorage.getItem('selectedSubject');
    
        if (selectedSubject) {
            // Ваш код для загрузки оценок в соответствии с выбранным предметом
        }
    });
    