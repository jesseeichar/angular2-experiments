import {Injectable} from "angular2/core";
import {ProjectItem, Project, File, Folder} from "./project-item"

@Injectable()
export class ProjectService {
  getProjects(): Project[] {
    return projects;
  }
  isFile(item: ProjectItem) {
    return item && item instanceof File;
  }
  numChildren(item: ProjectItem): number {
    let items = childMap[item.path];
    if (items === undefined) {
      return 0;
    }

    return items.length;
  }
  getChildren(item: ProjectItem): ProjectItem[] {
    return childMap[item.path];
  }
  encodePath(item: ProjectItem): string {
    return encodeURIComponent(item.path).replace(/\./g, '%46');
  }
  decodePath(encodedPath: string): string {
    return decodeURIComponent(encodedPath.replace(/%46/g, '.'));
  }
  getFile(path: string): File {
    return this.findFile(projects, path);
  }
  private findFile(items: ProjectItem[], path: string): File {
    if (!items) {
      return null;
    }

    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      if (this.isFile(item)) {
        if (item.path === path) {
          return <File>item;
        }
      } else if (path.startsWith(item.path)) {
        let found = this.findFile(childMap[item.path], path);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }
}

let projects = [
  new Project("Project 1", "/project1"),
  new Project("Project 2", "/project2"),
  new Project("Project 3", "/project3"),
  new Project("Project 4", "/project4"),
];
let childMap: { [id: string]: ProjectItem[]; } = {
  '/project2': [
    new Folder("folder 21", "/project2/folder1"),
    new Folder("folder 22", "/project2/folder2"),
    new File("file 1", "/project2/file1", "File 1 Data\n\nThis is some data for testing.\n\nHi There"),
  ],
  '/project3': [
    new Folder("folder 31", "/project3/folder1"),
  ],
  '/project2/folder2': [
    new File("file2.xml", "/project2/folder2/file2", "File 2 Data\n\nThis is some data for testing.\n\nHi There"),
  ],
  '/project1': [
    new File("file3.json", "/project1/file3", "File 3 Data\n\nThis is some data for testing.\n\nHi There"),
  ],
};