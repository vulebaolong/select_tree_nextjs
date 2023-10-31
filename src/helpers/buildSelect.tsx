import { I_input, I_select } from "@/interface/interface";

export function buildSeclect(data: I_input[]): I_select[] {
    return data.map((item) => {

        const result: I_select = { value: `${item.id}`, label: item.name };
        
        return result;
    });
}
