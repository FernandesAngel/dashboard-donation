import React, { createContext, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';
import { useToast } from '../toast';
import {
  ProjectContextData,
  ProjectData,
  ProjectCreateUpdateData,
  ProjectStatusData,
} from './interfaces';

const ProjectContext = createContext<ProjectContextData>(
  {} as ProjectContextData,
);

export const ProjectProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const { addToast } = useToast();
  const [data, setData] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const getProjects = useCallback(async () => {
    try {
      setLoading(true);
      const responseProject = await api.get('projects');
      setData(responseProject.data);
      setLoading(false);
    } catch (error) {
      addToast('Erro ao ler projetos', 'error');
      setLoading(false);
    }
  }, [addToast]);

  const createProject = useCallback(
    async (project: ProjectCreateUpdateData) => {
      try {
        setLoading(true);
        const responseProject = await api.post('projects/create', project);
        setData(state => {
          return [responseProject.data, ...state];
        });
        setLoading(false);
        history.push('/projects');
      } catch (error) {
        addToast('Erro ao criar projeto', 'error');
        setLoading(false);
      }
    },
    [addToast, history],
  );

  const updateProject = useCallback(
    async (id: string, project: ProjectCreateUpdateData) => {
      try {
        setLoading(true);
        const responseProject = await api.patch(`projects/${id}`, project);
        setData(state =>
          state.map(p => (p._id === id ? responseProject.data : p)),
        );
        setLoading(false);
        addToast('Projeto atualizado com sucesso', 'success');
        history.push('/projects');
      } catch (error) {
        addToast('Erro ao atualizar projeto', 'error');
        setLoading(false);
      }
    },
    [addToast, history],
  );

  const updateStatus = useCallback(
    async (id: string, project: ProjectStatusData) => {
      try {
        const responseProject = await api.patch(
          `projects/status/${id}`,
          project,
        );
        setData(state =>
          state.map(p => (p._id === id ? responseProject.data : p)),
        );
        addToast('Status atualizado com sucesso', 'success');
      } catch (error) {
        addToast('Erro ao atualizar status', 'error');
      }
    },
    [addToast],
  );

  const updateImage = useCallback(
    async (id: string, image: any) => {
      try {
        setLoadingImage(true);
        const dataImage = new FormData();
        dataImage.append('image', image);

        const response = await api.patch(`/projects/image/${id}`, dataImage);

        setData(state => state.map(p => (p._id === id ? response.data : p)));
        setLoadingImage(false);
        addToast('Imagem atualizada com sucesso', 'success');
        history.push('/projects');
      } catch (error) {
        addToast('Erro ao atualizar projeto', 'error');
        setLoadingImage(false);
      }
    },
    [addToast, history],
  );
  return (
    <ProjectContext.Provider
      value={{
        data,
        getProjects,
        loading,
        createProject,
        updateProject,
        loadingImage,
        updateImage,
        updateStatus,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export function useProject(): ProjectContextData {
  const context = useContext(ProjectContext);

  return context;
}
