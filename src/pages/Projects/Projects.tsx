import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import { Card } from '../../components/Card';
import { Template } from '../../components/Template';
import { Title } from '../../components/Title';
import { useProject } from '../../hooks/project';
import * as S from './styles';

export function Projects(): JSX.Element {
  const history = useHistory();

  const { data, getProjects } = useProject();
  useEffect(() => {
    getProjects();
  }, [getProjects]);

  const handleCreateProject = useCallback(() => {
    history.push('projects/create');
  }, [history]);

  return (
    <Template>
      <S.Container>
        <S.HeaderPage>
          <Title label="PROJETOS" />
          <S.Action>
            <Button
              type="button"
              title="Novo"
              small
              onClick={handleCreateProject}
            />
          </S.Action>
        </S.HeaderPage>

        {data.length < 1 ? (
          <p>Ainda não existem projetos cadastrados :(</p>
        ) : (
          <S.Grid>
            {data.map(project => (
              <Card
                key={project._id}
                _id={project._id}
                title={project.name}
                description={project.description}
                imageUrl={project.imageUrl}
                status={project.status}
              />
            ))}
          </S.Grid>
        )}
      </S.Container>
    </Template>
  );
}
