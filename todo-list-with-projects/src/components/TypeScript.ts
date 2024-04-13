export  type Project = {
    id: string;
    name: string;
    todos: Todo[];
}[]
export type Todo = {
    id: string;
    title: string;
    date: string;
    checked: boolean;
}