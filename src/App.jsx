import MainLayout from './components/MainLayout';
import Sidebar from './components/Sidebar/Sidebar';
import { MainProvider } from './context/MainContext';
import MainCalendar from './components/Calendar/MainCalendar';

function App() {
  return (
    <MainLayout>
      <MainProvider>
        <Sidebar></Sidebar>
        <MainCalendar></MainCalendar>
      </MainProvider>
    </MainLayout>
  );
}

export default App;
