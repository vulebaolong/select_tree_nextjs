import { I_input } from "@/interface/interface";

function generateKey(idx: number, parentKeys: string[]): string {
    return [...parentKeys, idx.toString()].join("-");
}

export function buildTree(input: I_input[], id = 1, keys: string[] = ["0"]): I_input {
    const output = input.find((item) => item.id === id);

    if (!output) return {} as I_input;

    output.key = generateKey(0, keys);
    output.title = output.name;

    const children = input.filter((item) => item.ownerId === id);

    if (children.length > 0) {
        output.children = children.map((child, idx) => {
            return buildTree(input, child.id, [...keys, idx.toString()]);
        });
    }

    return output;
}
