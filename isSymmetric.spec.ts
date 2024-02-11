import { it, expect, describe} from "vitest"

import { Tree, isSymmetricTree } from "./isSymmetric"

describe("isSymmetric.spec.ts", () => {

    it("should return true when symmetric", () => {

        const myTree: Tree = {
            value: 1,
            left: {value: 2, left: null, right: null},
            right: {value: 2, left: null, right: null}
        }
        const result = isSymmetricTree(myTree);

        expect(result).toBe(true);
    });

    it("should return false when not symmetric", () => {

        const myTree : Tree = {
            value: 1,
            left : {value : 3, left: null, right: null},
            right: {value: 42, left: null, right: null}
        };

        const result = isSymmetricTree(myTree);

        expect(result).toBe(false)
    });

    it("should return false when no left", () => {

        const myTree : Tree = {
            value: 2,
            left: null,
            right: {value: 1, left: null, right: null}
        }

        const result = isSymmetricTree(myTree);

        expect(result).toBe(false);
    });

    it("should return false when no right", () => {

        const myTree : Tree = {
            value: 2,
            right: null,
            left: {value: 1, left: null, right: null}
        }

        const result = isSymmetricTree(myTree);

        expect(result).toBe(false);
    });

    it("should return true when no right and no left", () => {

        const myTree: Tree = {
            value: 1,
            left: null,
            right: null
        };

        const result = isSymmetricTree(myTree);

        expect(result).toBe(true);
    });
})