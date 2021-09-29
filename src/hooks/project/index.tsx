import React, { createContext, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';
import { useToast } from '../toast';
import {
  ProjectContextData,
  ProjectData,
  ProjectUpdateData,
} from './interfaces';

const ProjectContext = createContext<ProjectContextData>(
  {} as ProjectContextData,
);

export const ProjectProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const { addToast } = useToast();
  const [data, setData] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(false);
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
    async (project: Omit<ProjectData, '_id'>) => {
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
    async (id: string, project: ProjectUpdateData) => {
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
    [addToast],
  );
  return (
    <ProjectContext.Provider
      value={{ data, getProjects, loading, createProject, updateProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export function useProject(): ProjectContextData {
  const context = useContext(ProjectContext);

  return context;
}
