import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const sidebarData = [
    {
      title: "OverView",
      link: "/overview",
    },
    {
      title: "All Website Content",
      items: [
        {
          name: "Home Page Banner",
          link: "/Website-pages/home-banner",
        },
        {
          name: "Home gallery",
          link: "/Website-pages/home-gallery",
        },
        {
          name: "Our Associates",
          link: "/Website-pages/home-our-associates",
        },
        {
          name: "Add Programs",
          link: "/Website-pages/programs",
        },
      ],
    },
    {
      title: "Franchisee Management",
      items: [
        {
          name: "Franchisee Application List",
          link: "/franchisee-applications",
        },
      ],
    },
    {
      title: "Student Management",
      items: [
        {
          name: "Admission Application List",
          link: "/student-management/admission-applications-list",
        },
        { name: "Admission Fee", link: "/student-management/admission-fee" },
      ],
    },
    {
      title: "Center Management",
      items: [{ name: "Manage Centers", link: "/manage-centers" }],
    },
    {
      title: "Exam Management",
      items: [
        {
          name: "Exam Application List",
          link: "/exam-management/exam-application-list",
        },
        { name: "Exam Schedule", link: "/exam-management/exam-shudule" },
        {
          name: "Question Bank Management",
          link: "/exam-management/question-bank-management",
        },
      ],
    },
    {
      title: "LMS",
      items: [
        { name: "Content Management", link: "/LMS/content-management" },
        { name: "Assessment Tools", link: "/LMS/assessment-tool" },
        { name: "Assessment Review", link: "/LMS/assessment-review" },
      ],
    },
    {
      title: "Course Management",
      items: [
        { name: "Course List", link: "/course-list" },
        { name: "Subject List", link: "/course-management/subject-list" },
      ],
    },
    {
      title: "Counsellor Management",
      items: [
        {
          name: "Counsellor List",
          link: "/counsellor-management/counsellor-list",
        },
      ],
    },
    {
      title: "Settings",
      items: [
        { name: "User Management", link: "/user-management" },
        { name: "Platform Settings", link: "/platform-settings" },
        { name: "Integrations", link: "/integrations" },
      ],
    },
  ];

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="custom-sidebar">
      <div className="sidebar-header">
        <div className="header-content">
          <Link to={"/"}>
            <h5 className="admin-title">
              <i className="bi bi-person-circle"></i> Admin Dashboard
            </h5>
          </Link>
        </div>
      </div>

      <ul className="sidebar-menu">
        {sidebarData.map((section, index) => (
          <li className="menu-section" key={index}>
            {section.items ? (
              <>
                <div
                  className="section-title"
                  onClick={() => toggleSection(index)}
                >
                  {section.title}
                  <span
                    className={`section-arrow ${
                      activeIndex === index ? "rotate" : ""
                    }`}
                  >
                    <i className="bi bi-caret-left"></i>
                  </span>
                </div>
                <ul
                  className={`submenu-list ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  {section.items.map((item, idx) => (
                    <li className="submenu-item" key={idx}>
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                to={section.link}
                className="section-title text-decoration-none text-black fs-5"
              >
                {section.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
