// Random Variables
let i = 3;
let max=10;
let order = [];

// Generate random order of nodes
$(function(){
    $('#generate').click(function(){

        const prevNums = document.querySelectorAll('.order-num');

        prevNums.forEach(box => {
            box.remove();
        })

        order = randOrder(max);
        
        for(let i=0; i<=max; i++){
            let num = document.createElement('div');
            num.className='order-num';
            num.id='order-num'+i;
            num.innerHTML = order[i];
            document.getElementById("order-container").appendChild(num);

        }

    })
})

// Add node on button click
$(function () {
    $('#node-btn').click(function () {
        let node = document.createElement('div');
        node.className = 'comp-node';
        node.id = 'comp-node';
        let num = randomInt(max);
        tree.insert(num);
        node.innerHTML = num;
        document.getElementById("tree-container").appendChild(node);
    })
})

// Add layers to tree
$(function () {
    $('#layer-btn').click(function () {
        for (let layer_num = 1; layer_num <= i; layer_num++) {
            let layer = document.createElement('div');
            layer.className = 'layer';
            layer.id = 'layer';
            document.getElementById("tree").appendChild(layer);

            for (let cell_num = 1; cell_num <= Math.pow(2, layer_num - 1); cell_num++) {
                let cell = document.createElement('div');
                cell.className = 'cell';
                cell.id = 'cell';
                document.getElementById("layer").appendChild(cell);

            }
        }
    })
})