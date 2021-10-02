import React, { createContext, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';
import { useProject } from '../project';
import { useToast } from '../toast';
import { DonationContextData, ProjectDonationProps } from './interfaces';

const DonationContext = createContext<DonationContextData>(
  {} as DonationContextData,
);

export const DonationProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const { data: dataProject } = useProject();
  const { addToast } = useToast();
  const [data, setData] = useState<ProjectDonationProps>({
    _id: '',
    name: '',
    imageUrl: '',
    donations: [],
    total: 0,
    qtd: 0,
  });
  const [loading, setLoading] = useState(false);

  const getDonationByProject = useCallback(
    async (id: string) => {
      try {
        setLoading(true);
        const project = dataProject.find(p => p._id === id);
        if (!project) {
          addToast('Erro ao encontrar projeto', 'alert');
          history.push('/projects');
        } else {
          const responseDonation = await api.get(`donations/project/${id}`);
          const total = responseDonation.data.reduce(
            (acc: number, currentValue: any) => {
              return acc + Number(currentValue.price.$numberDecimal);
            },
            0,
          );
          setData({
            ...project,
            donations: responseDonation.data,
            qtd: responseDonation.data.length,
            total,
          });
        }
        setLoading(false);
      } catch (error) {
        addToast('Erro ao ler projetos', 'error');
        setLoading(false);
      }
    },
    [addToast, history, dataProject],
  );

  return (
    <DonationContext.Provider value={{ data, getDonationByProject, loading }}>
      {children}
    </DonationContext.Provider>
  );
};

export function useDonation(): DonationContextData {
  const context = useContext(DonationContext);

  return context;
}
