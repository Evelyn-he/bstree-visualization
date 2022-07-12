// Generates a random integer between 0 and max value
function randomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// Pushes values of array up by 1 index
function pushVals(arr, index) {
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
}

// Generates random order of numbers (using all numbers between 0 and max value)
function randOrder(max) {
    const nums = [];
    const order = [];
    let order_index = 0;

    for (let i = 0; i <= max; i++) {
        nums[i] = i;
    }

    while (nums.length > 0) {

        let nums_index = randomInt(nums.length - 1);
        let value = nums[nums_index];
        order[order_index] = value;
        pushVals(nums, nums_index);
        order_index++;
    }
    return order;
}

// Populates tree with array of values
function buildTree(tree, values) {
    for (let i = 0; i < values.length; i++) {
        tree.insert(values[i])
    }
    return tree;
}

// Add skeleton of layers to tree
function addLayers(num_layers, nodeSize){

    let marginSize=0;

    for(let i=1; i<=num_layers; i++){
        
        let layer_id=num_layers-i+1;
        let cell_id='0'.repeat(layer_id);

        let layer=document.createElement('div');
        layer.className='layer';
        layer.id='layer'+layer_id;
        document.getElementById("tree").prepend(layer);

        for(let cell_num=1; cell_num<=Math.pow(2,layer_id-1); cell_num++){
            let cell=document.createElement('div');
            cell.className='cell';
            cell.id='cell'+cell_id;
            document.getElementById("layer"+layer_id).appendChild(cell);

            cell.style.marginLeft=marginSize+'px';
            cell.style.marginRight=marginSize+'px';

            cell_id=binID(cell_id);
        }

        marginSize=2*marginSize+(nodeSize/2); // Formula: a_n = 2*a_(n-1) + const
    }
}

// Assign id to a node based on layer and parent node
function binID(str){
    let flipped=false;
    for(let i=str.length-1; i>=0 && !flipped; i--){
        if(str.charAt(i)=='0'){
            flipped=true;
            str=setCharAt(str,i,'1');
            for(let j=i+1; j<str.length; j++){
                str=setCharAt(str,j,'0');
            }
        }
    }
    return str;
}

// Replaces character at index of string with another character
function setCharAt(str,index,chr){
    if(index>str.length-1) return str;
    return str.substring(0,index)+chr+str.substring(index+1);
}