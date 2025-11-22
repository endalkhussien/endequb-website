import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branches | EndeEqub Cooperative",
  description: "Find EndeEqub Cooperative branches near you.",
};

export default function BranchesPage() {
  const branches = [
    { city: "Addis Ababa", address: "Arat Kilo, Main Road", phone: "+251 11 123 4567" },
    { city: "Bahir Dar", address: "Lake Tana Ave 12", phone: "+251 58 220 3344" },
    { city: "Hawassa", address: "Piazza, Building 3", phone: "+251 46 220 7788" },
    { city: "Mekelle", address: "Market Street 21", phone: "+251 34 440 1122" },
  ];

  return (
    <main className="min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-10">
          <h1 className="font-serif font-bold text-4xl md:text-5xl">Our Branches</h1>
          <p className="text-muted-foreground mt-3">
            Visit one of our branches or call ahead to speak with a representative.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branches.map((b) => (
            <div key={b.city} className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold">{b.city}</h2>
              <p className="text-sm text-muted-foreground mt-1">{b.address}</p>
              <p className="text-sm text-muted-foreground mt-1">{b.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

