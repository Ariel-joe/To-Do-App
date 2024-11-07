const addToDo = (event) => {
    event.preventDefault();

    const userInput = document.getElementById('Input').value.trim();

    const taskContainer = document.createElement('div');
    taskContainer.style.cssText = 'display: flex; flex-direction: row; align-Items: center';
    
    const newPara = document.createElement('p');
    newPara.style.cssText = 'padding: 5px 10px; min-width: 300px; margin-top: 10px';
    newPara.textContent = userInput;
    
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.style.cssText = 'background-color: red; padding: 5px 10px; color: white; margin-top: 10px';
    delBtn.addEventListener('click', () => {
        taskContainer.remove()
    })
    
    taskContainer.appendChild(newPara);
    taskContainer.appendChild(delBtn);

    document.getElementById('Input').value = '';
    
    const taskDisplay = document.getElementById('toDoList');
    taskDisplay.appendChild(taskContainer);
    

    const toDoList = [];
    toDoList.push(userInput);  
    console.log(toDoList);  
};
