/**
 * Utility for smooth scrolling to sections without hash fragments in the URL.
 */
export const scrollToSection = (sectionId) => {
  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Ensure clean URL without any hash fragment
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname);
  }
};
