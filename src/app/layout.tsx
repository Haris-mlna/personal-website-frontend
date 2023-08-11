import "./globals.css";

// Template
import TemplatePrimary from "@/templates/primary-templates/primary-template";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html>
      <head>
        <title>Weins App</title>
      </head>
      <TemplatePrimary>
        {children}
      </TemplatePrimary>
    </html>
  );
}
