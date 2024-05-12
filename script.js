// Create a function to generate the ordered list explaining code optimization
function createOptimizationList() {
    // Create the p tag
    const pTag = document.createElement('p');
    pTag.textContent = "We can optimize a solution using both time and space optimization. To optimize a program.";

    // Create the ol tag
    const olTag = document.createElement('ol');

    // Array of content for the list items
    const listContent = [
        "We can reduce the time taken to run the program and increase the space occupied",
        "We can reduce the memory usage of the program and increase it's total run time",
        "We can reduce both time and space complexity by deploying relevant algorithms"
    ];

    // Loop through the list content and create li tags for each item
    listContent.forEach(content => {
        const liTag = document.createElement('li');
        liTag.textContent = content;
        olTag.appendChild(liTag);
    });

    // Append the p tag and ol tag to the document body
    document.body.appendChild(pTag);
    document.body.appendChild(olTag);
}

// Call the function to generate the ordered list
createOptimizationList();//your JS code here. If required.
