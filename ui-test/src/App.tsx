import "./App.css";

// import { Toaster } from '@/components/ui/toaster'
import { DashboardLayout } from "./layout/dashboard-layout";

function App() {
  return (
      <DashboardLayout>
        <h1>Dashboard Layout</h1>
        <div className="relative h-3/4 flex-1 bg-green-500">
        </div>

      {/* <Toaster /> */}
      </DashboardLayout>
  );
}

export default App;
