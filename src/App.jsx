import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import GroupPageA from './Pages/Groups/GroupAPage'
import GroupPageB from './Pages/Groups/GroupBPage'
import GroupPageC from './Pages/Groups/GroupCPage'
import GroupPageD from './Pages/Groups/GroupDPage'
import AdminDashboardPage from './Pages/Admin/AdminDashboardPage'
import Navbar from './Components/Utility/NavBar'
import LessonPage from './Pages/Lessons/LessonsPage'
import Dashboard from './Pages/DashBoard/DashboardPage'
import GoogleFormSender from './Components/Utility/Google'
import CommentsViewer from './Components/Utility/CommentViewer'

function App() {
  return (
    <div>
      <Navbar/>
 <Routes>
      
      <Route path="/" element={<HomePage />} />
        <Route path="/groupa" element={<GroupPageA/>} />
         <Route path="/groupb" element={<GroupPageB/>} />
          <Route path="/groupc" element={<GroupPageC/>} />
           <Route path="/groupd" element={<GroupPageD/>} />
            <Route path="/group/:groupId/lesson/:lessonId" element={<LessonPage />} />
             <Route path="/admindashboard" element={<Dashboard/>} />
                          <Route path="/form" element={<GoogleFormSender/>} />
  <Route path="/forme" element={<CommentsViewer/>} />
    </Routes>
    </div>
   
  )
}

export default App
