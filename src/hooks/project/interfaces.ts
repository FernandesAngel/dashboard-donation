export interface ProjectData {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  status: boolean;
}
export interface ProjectCreateUpdateData {
  name: string;
  description: string;
}

export interface ProjectStatusData {
  status: boolean;
}

export interface ProjectContextData {
  data: ProjectData[];
  getProjects(): Promise<void>;
  loading: boolean;
  createProject(project: ProjectCreateUpdateData): Promise<void>;
  updateProject(id: string, project: ProjectCreateUpdateData): Promise<void>;

  loadingImage: boolean;

  updateImage(id: string, image: any): Promise<void>;
  updateStatus(id: string, project: ProjectStatusData): Promise<void>;
}
