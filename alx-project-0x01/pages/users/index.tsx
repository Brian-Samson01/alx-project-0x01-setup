import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex justify-center items-center bg-gray-50">
        <h1 className="text-5xl font-light">Users Page</h1>
      </main>
    </div>
  );
};

export default UsersPage;
