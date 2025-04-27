 document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
  const h2 = section.querySelector('h2');
  if (h2 && section.id) {
  h2.style.cursor = 'pointer';
  h2.addEventListener('click', function() {
  const content = section.querySelector(':scope > *:not(h2)');
  if (content) {
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
  }
  });
  // Initially hide content of these sections
  if (['skillsSection', 'experienceSection', 'achievementsSection', 'educationSection', 'extraCurricularSection'].includes(section.id)) {
  const content = section.querySelector(':scope > *:not(h2)');
  if (content) {
  content.style.display = 'none';
  }
  }
  }
  });
 });
