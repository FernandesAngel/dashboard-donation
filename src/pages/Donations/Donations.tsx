import { DonationCard } from '../../components/DonationCard';
import { ProjectHeader } from '../../components/ProjectHeader';
import { Template } from '../../components/Template';
import { Title } from '../../components/Title';
import * as S from './styles';

const Donations: React.FC = () => {
  return (
    <Template>
      <S.Container>
        <Title label="DOAÇÕES" />
        <ProjectHeader />
        <DonationCard
          method="Cartão de crédito"
          price={1000}
          date="26/01/2021"
        />
        <DonationCard method="Pix" price={1567.52} date="26/01/2021" />
        <DonationCard method="Cartão de crédito" price={10} date="26/01/2021" />
      </S.Container>
    </Template>
  );
};
export default Donations;
