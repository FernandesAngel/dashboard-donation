import { AuthProvider } from './auth';
import { DonationProvider } from './donation';
import { ProjectProvider } from './project';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <AuthProvider>
      <ProjectProvider>
        <DonationProvider>{children}</DonationProvider>
      </ProjectProvider>
    </AuthProvider>
  </ToastProvider>
);

export default AppProvider;
