// we define a function
function drawTree() {
    console.log("***********")
    console.log("***********")
    console.log("***********")
    console.log("***********")
    console.log("***********")
    console.log("***********")
    console.log("***********")
    console.log("***********")
    console.log("***********")
    //drawTree()
    //calling the function inside the function will create an infin loop
}

//we then need to call the function in order to use it
//we do this by doing the following
drawTree(); //that simple

//functions allow us to reuse it multiple times
drawTree();
drawTree();
drawTree();
drawTree();
drawTree();