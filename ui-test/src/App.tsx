import { cn, Button, Icons } from "@/components";
import { Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { Nav } from "./layout/sidebar-layout"
import "./App.css";

// import { Toaster } from '@/components/ui/toaster'
import { DashboardLayout } from "./layout/dashboard-layout";

function App() {
  // return (
  //     <DashboardLayout>
  //       <h1 className="text-center flex items-center">Dashboard Layout</h1>
  //       <div className="h-full w-full items-center justify-center m-auto">
  //             <Tooltip>
  //             <TooltipTrigger className={cn()}>
  //               <Icons.add aria-hidden name="profile" className="bg-slate-500"/>
  //             </TooltipTrigger>
  //             <TooltipContent sideOffset={4} className={cn(buttonVariant({
  //               variant: secondary
  //             }))}>
  //                  <Button variant="secondary">Hover</Button>
  //             </TooltipContent>
  //             </Tooltip> 
  //       </div>

  //     {/* <Toaster /> */}
  //     </DashboardLayout>
  // );
  return (<Nav/>)
}

export default App;
