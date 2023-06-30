import "./App.css";

// import { Toaster } from '@/components/ui/toaster'
import { DashboardLayout } from "./layout/dashboard-layout";
import NavigationMenuDemo from "./layout/navigation";

function App() {
  return (
      <DashboardLayout>
        <NavigationMenuDemo />
        <h1>Dashboard Layout</h1>
        <div className="relative h-1/2 flex-1">
        </div>

      {/* <Toaster /> */}
      </DashboardLayout>
  );
}

export default App;
