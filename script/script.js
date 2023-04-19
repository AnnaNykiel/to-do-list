{
    const tasks = [
        {
            content: "nagrać lekcje",
            done: false,
        },
        {
            content: "zjeść pierogi",
            done: true,
        },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent });
            render();
    
    
};

const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
};

const toggleTaskDone = (taskIndex) => {
    task[taskIndex].done = !task[taskIndex].done;
    render();
};

const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener("click", () => {
            toggleTaskDone(index);
        });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");
    toggleDoneButtons.forEach((toggleDoneButtons, index) => {
        toggleDoneButtons.addEventListener("click", () => {
            removeTask(index);
        });
    });
};

const render = () => {
    let htmlString = "";

    for (const task of tasks) {
        htmlString += `
        <li${task.done ? " style=\"text-decoration: line-through\"" : ""}
        >
        <button class="js-done">zrobione?></button>
        <button class="js-remove">usuń</button>
        ${task.content}
        </li>
        `;
    };

    document.querySelector(".js-tasks").innerHTML = htmlString;

};
bindEvents();

const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();
    if (newTaskContent === "") {
        return;
    };

    addNewTask(newTaskContent);
};

const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
    
};
    init();
}