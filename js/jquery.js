// Random Variables
let max = 10;
let order = [];
let tree = new Tree();
let nodeSize=50;

// Link variables to css
document.documentElement.style.setProperty("--nodeSize", nodeSize);

// Generate random order of nodes
$(function () {
    $('#generate-btn').click(function () {

        const prevNums = document.querySelectorAll('.order-num');

        prevNums.forEach(box => {
            box.remove();
        })

        order = randOrder(max);

        for (let i = 0; i <= max; i++) {
            let num = document.createElement('div');
            num.className = 'order-num';
            num.id = 'order-num' + i;
            num.innerHTML = order[i];
            document.getElementById("order-container").appendChild(num);

        }

    })
})

// Add layers to tree
$(function () {
    $('#build-btn').click(function () {
        let numLayers;
        tree = buildTree(tree, order);

        if (tree.head != null) {
            numLayers = tree.layers();
            console.log(numLayers);
            addLayers(numLayers, nodeSize);
        }

    })
})


// // Add node on button click
// $(function () {
//     $('#node-btn').click(function () {
//         let node = document.createElement('div');
//         node.className = 'comp-node';
//         node.id = 'comp-node';
//         let num = randomInt(max);
//         tree.insert(num);
//         node.innerHTML = num;
//         document.getElementById("tree-container").appendChild(node);
//     })
// })
