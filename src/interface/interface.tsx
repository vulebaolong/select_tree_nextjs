export interface I_input {
    id: number;
    name: string;
    ownerId?: number;
    key?: string;
    title?: string;
    level: number;
    children?: I_input[];
}

export interface I_req {
    type?: string;
}

export interface I_output {
    id: number;
    name: string;
    ownerId?: number;
    children?: I_output[];
    level: number;
    title?: string;
}

export interface I_select {
    value: string;
    label: string;
}
