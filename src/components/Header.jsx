import { Users } from "lucide-react";

function Header() {
  return (
    <header className="bg-card shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              User Management Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage users with full CRUD operations
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
