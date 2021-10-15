import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DonationCard } from '../../components/DonationCard';
import { ProjectHeader } from '../../components/ProjectHeader';
import { Template } from '../../components/Template';
import { Title } from '../../components/Title';
import { useDonation } from '../../hooks/donation';
import * as S from './styles';

const Donations: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getDonationByProject, loading, data } = useDonation();

  useEffect(() => {
    getDonationByProject(id);
  }, [getDonationByProject, id]);

  return (
    <Template>
      <S.Container>
        <Title label="DOAÇÕES" />
        {loading ? (
          <p>Aguarde! Carregando as doações</p>
        ) : (
          <>
            <ProjectHeader
              title={data.name}
              image={data.imageUrl}
              total={data.total}
              qtd={data.qtd}
            />

            {data.donations?.length > 0 ? (
              data.donations.map(d => (
                <DonationCard
                  key={d._id}
                  method={d.method}
                  price={d.price.$numberDecimal}
                  date={d.createdAt}
                />
              ))
            ) : (
              <p>nada</p>
            )}
          </>
        )}
      </S.Container>
    </Template>
  );
};
export default Donations;
