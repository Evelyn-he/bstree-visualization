class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.head = null;
    }

    // Insert a node into the tree
    insert(data) {

        if (this.head != null) {
            this.insert_helper(this.head, data)
        } else {
            this.head = new Node(data);
        }
    }

    // Recursively calls until leaf nodes
    insert_helper(current, data) {

        // Base cases
        if (current.data == data) {
            console.log("Cannot be added - duplicate value");
            return;
        } else if (current.left == null && data < current.data) {
            current.left = new Node(data);
            return;
        } else if (current.right == null && data > current.data) {
            current.right = new Node(data);
            return;

            // Calls next node    
        } else {
            if (data < current.data) {
                this.insert_helper(current.left, data);
            } else if (data > current.data) {
                this.insert_helper(current.right, data);
            }
        }
    }

    //Find and prints path to value
    find(data) {
        if (this.head != null) {
            this.find_helper(this.head, data);
        } else {
            console.log("Tree is empty");
        }
    }

    find_helper(current, data) {
        if (current == null) {
            console.log("Not found");
            return;
        } else if (current.data == data) {
            console.log(data + "found");
            return;
        }

        console.log(current.data);

        if (data < current.data) {
            this.find_helper(current.left, data);
        } else {
            this.find_helper(current.right, data);
        }
    }

    // Count layers in tree
    layers() {
        if (this.head != null) {
            let numLayers = this.layers_helper(this.head, 1);
            return numLayers;
        } else {
            return 0;
        }
    }

    layers_helper(current, layerNum) {
        if (current.left == null && current.right == null) {
            return layerNum;
        }

        let numLeft=0;
        let numRight=0;

        if (current.left != null) {
            numLeft = this.layers_helper(current.left, layerNum + 1);
        }
        if (current.right != null) {
            numRight = this.layers_helper(current.right, layerNum + 1);
        }

        if (numLeft > numRight) {
            return numLeft;
        } else {
            return numRight;
        }
    }

    delete(current){
        if(current==null){
            return;
        }

        if(current.left!=null){
            this.delete(current.left);
        }
        if(current.right!=null){
            this.delete(current.right);
        }

        current.data=null;
        current=null;
    }
}
