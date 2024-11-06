import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import FranchiseApplicationList from "./Pages/FranchiseApplicationList/FranchiseApplicationList";
import "./Pages/pages.css";
import ManageCenter from "./Pages/CenterManagement/ManageCenter";
import CourseManagement from "./Pages/CourseManagement/CourseManagement";
import AdmisionAppList from "./Pages/StudentManagement/AdmisionAppList";
import Admisionfee from "./Pages/StudentManagement/Admisionfee";
import Dashboard from "./Component/Dashboard/Dashboard";
import ContentManagement from "./Pages/LMS/ContentManagement";
import ManageVideoContent from "./Pages/LMS/ManageVideoContent";
import ReadableContent from "./Pages/LMS/ReadableContent";
import AssessmentTool from "./Pages/LMS/AssessmentTool";
import AssesmentReview from "./Pages/LMS/AssesmentReview";
import ExamSchedule from "./Pages/ExamManagement/ExamSchedule";
import QuestionBank from "./Pages/ExamManagement/QuestionBank";
import ExamAppList from "./Pages/ExamManagement/ExamAppList";
import SubjectList from "./Pages/CourseManagement/SubjectList";
import CounsellorList from "./Pages/CounsellorList/CounsellorList";
import Overview from "./Pages/Overview/Overview";
import HomeBanner from "./Pages/WebsiteContent/HomeBanner";
import HomeGallery from "./Pages/WebsiteContent/HomeGallery";
import HomeOurAssociates from "./Pages/WebsiteContent/HomeOurAssociates";
import AllPrograms from "./Pages/WebsiteContent/AllPrograms";
function App() {
  return (
    <Router>
      <div className="admin-layout">
        <Header />
        <div className="d-flex">
          <Sidebar />
          <div className="allPages">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/Website-pages/home-banner" element={<HomeBanner />} />
              <Route path="/Website-pages/home-gallery" element={<HomeGallery />} />
              <Route path="/Website-pages/home-our-associates" element={<HomeOurAssociates />} />
              <Route path="/Website-pages/programs" element={<AllPrograms />} />
              <Route
                path="/franchisee-applications"
                element={<FranchiseApplicationList />}
              />
              <Route path="/manage-centers" element={<ManageCenter />} />
              <Route path="/course-list" element={<CourseManagement />} />
              <Route
                path="/student-management/admission-applications-list"
                element={<AdmisionAppList />}
              />
              <Route
                path="/student-management/admission-fee"
                element={<Admisionfee />}
              />
              <Route
                path="/exam-management/exam-shudule"
                element={<ExamSchedule />}
              />
              <Route
                path="/exam-management/exam-application-list"
                element={<ExamAppList />}
              />
              <Route
                path="/exam-management/question-bank-management"
                element={<QuestionBank />}
              />
              <Route
                path="/LMS/content-management"
                element={<ContentManagement />}
              />
              <Route path="/LMS/assessment-tool" element={<AssessmentTool />} />
              <Route
                path="/LMS/assessment-review"
                element={<AssesmentReview />}
              />
              <Route
                path="/LMS/content-management/manage-video-content"
                element={<ManageVideoContent />}
              />
              <Route
                path="/LMS/content-management/manage-readable-content"
                element={<ReadableContent />}
              />
              <Route
                path="/course-management/subject-list"
                element={<SubjectList />}
              />
              <Route
                path="/counsellor-management/counsellor-list"
                element={<CounsellorList />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
