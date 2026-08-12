import "./globals.css";
import ClientShell from '@/components/ClientShell';

export const metadata = {
  title: 'BEĨ Educação — Módulo 2',
  description: 'Formações WL BEĨ — Módulo 2',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  );
}
