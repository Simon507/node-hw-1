Для запуска приложения набираем: "npm start". При изменении проекта он автоматически перезапустится
с помощью nodemon

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

Результат: https://monosnap.com/file/R2pDlTzrLF1yi3zhDmoTZFa3c4pK37

# Отримуємо контакт по id

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

Результат: https://monosnap.com/file/Vzv4UMK37m1tLoSE6Jm8HaYasEr7Q8

# Додаємо контакт

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

Результат: https://monosnap.com/file/wxCfoR5TziteBQEDLksAV5oJmAQlo8

# Видаляємо контакт

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

Результат: https://monosnap.com/file/It519LwnrD75BhIRD0X5apW5gPcuP1
