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
export type SideBarProps ={
    projects: Project,
    addProject: (name: string) => void,
    deleteProject: (id: string) => void,
    showToDo: (id: string) => void,
}
export type ProjectsProps = {
      projects:Project,
      activeProjectId:string | null,
      addToDo:(todo: Todo, projectId:string) => void,
      deleteToDo:(id:string) => void,
     
}