export enum ProjectItemType {
    PROJECT, FOLDER, FILE
}
export interface ProjectItem {
    name: string;
    path: string;
}

export class Project implements ProjectItem {
    constructor(public name: string, public path:string , public desc: string = "") { }
}

export class Folder implements ProjectItem {
    constructor(public name: string, public path:string ) { }
}
export class File implements ProjectItem {
    constructor(public name: string, public path:string, public data: string = "") { }
}