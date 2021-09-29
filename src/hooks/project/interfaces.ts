export interface ProjectData {
  _id: string;
  name: string;
  description: string;
  image: string;
}
export interface ProjectUpdateData {
  name: string;
  description: string;
}

export interface ProjectContextData {
  data: ProjectData[];
  getProjects: () => Promise<void>;
  loading: boolean;
  createProject: (project: Omit<ProjectData, '_id'>) => Promise<void>;
  updateProject: (id: string, project: ProjectUpdateData) => Promise<void>;
}
