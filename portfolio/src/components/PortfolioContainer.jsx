// import { useState } from 'react';
// import NavTabs from './NavTabs';
// import About from './pages/About';
// import Footer from './Footer';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';
// import Contact from './pages/Contact';



// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState('About');

//   //checks to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//   const renderPage = () => {
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Portfolio') {
//       return <Portfolio />;
//     }
//     if (currentPage === 'Resume') {
//       return <Resume />;
//     }
//     return <Contact />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       {/* passing the currentPage from state and the function to update it */}
//       <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* calling the renderPage method which will return a component  */}
//       <main className="px-5">{renderPage()}</main>
//       <Footer />
//     </div>
//   );
// }