"use server";

import { I_input, I_req } from "@/interface/interface";

const input: I_input[] = [
    { id: 1, name: "layer 1", level: 1 },
    { id: 2, name: "layer 1 - 1", level: 2, ownerId: 1 },
    { id: 3, name: "layer 1 - 2", level: 2, ownerId: 1 },
    { id: 4, name: "layer 1 - 1 - 1", level: 3, ownerId: 2 },
    { id: 5, name: "layer 1 - 1 - 1 - 1", level: 4, ownerId: 4 },
    { id: 6, name: "layer 1 - 1 - 1 - 1 - 1", level: 5, ownerId: 5 },
    { id: 7, name: "layer 1 - 2 - 2", level: 3, ownerId: 3 },
    { id: 8, name: "layer 1 - 2 - 3", level: 3, ownerId: 3 },
];

function builDataById(input: I_input[], id: number): I_input[] {
    const itemParent = input.find((item) => item.id === id);
    const itemChildrens = input.filter((item) => item.ownerId === id);

    let result: I_input[] = [];

    if (itemParent) {
        result.push(itemParent);
        itemChildrens.forEach((child) => {
            result = result.concat(builDataById(input, child.id));
        });
    }

    return result;
}

export async function getAllData() {
    return input;
}

export async function getDataById(id: number) {
    return builDataById(input, id);
}
