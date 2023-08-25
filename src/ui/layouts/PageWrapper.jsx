export default function PageWrapper({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <HR />
      {children}
      <HR />
    </div>
  );
}

const HR = () => (
  <div
    style={{ backgroundImage: 'linear-gradient(to right,#d25062,#952735' }}
    className="h-2 w-full"
  />
);
