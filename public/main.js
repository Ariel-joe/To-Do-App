const addToDo = (event) => {
    event.preventDefault();

    const userInput = document.getElementById('Input').value.trim();

    const divContainer = document.createElement('div');
    divContainer.style.cssText = 'display: flex; flex-direction: row; align-Items: center';
    
    const newPara = document.createElement('p');
    newPara.style.cssText = 'padding: 5px 10px; min-width: 300px; margin-top: 10px';
    newPara.textContent = userInput;
    
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.style.cssText = 'background-color: red; padding: 5px 10px; color: white; margin-top: 10px';
    delBtn.addEventListener('click', () => {
        divContainer.remove()
    });
    
    divContainer.appendChild(newPara);
    divContainer.appendChild(delBtn);

    document.getElementById('Input').value = '';

    const taskDisplay = document.getElementById('toDoList');

    if(!userInput) {
        alert('please enter a task');
    } 
    else {
        taskDisplay.appendChild(divContainer);
    }
    

    const toDoList = [];
    toDoList.push(userInput);  
    console.log(toDoList);  
};
