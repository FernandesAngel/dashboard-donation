export interface DonationData {
  _id: string;
  price: { $numberDecimal: number };
  method: string;
  createdAt: string;
}

export interface ProjectDonationProps {
  _id: string;
  name: string;
  image: string;
  donations: DonationData[];
  total: number;
  qtd: number;
}
export interface DonationContextData {
  data: ProjectDonationProps;
  getDonationByProject: (id: string) => Promise<void>;
  loading: boolean;
}
