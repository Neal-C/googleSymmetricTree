export type Tree = {
    value: number;
    left: Tree | null;
    right: Tree | null;
}

export function isSymmetricTree(root: Tree | null): boolean {
    function isSymmetric(root1: Tree | null, root2: Tree | null) : boolean {
        if(!root1 && !root2){
            // null is symmetric to itself
            return true;
        }

        if (!root1 || !root2){
            return false
        }

        if (root1.value !== root2.value){
            return false
        } 

        return isSymmetric(root1.left, root2.right) && isSymmetric(root1.right,root2.left)
    }

    return isSymmetric(root, root)
}