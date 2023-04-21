const aboutSkillsProgress = ({ skillsEl, progresEl }) => {
  if (skillsEl) {
    progresEl.forEach(item => {
      let myVal = item.getAttribute('data-value');
      item.style.width = myVal;
    });
  }
};

export default aboutSkillsProgress;
