// =============first pricing table tabs============
const monthlyTab = document.getElementById('monthlyTab');
const fourMonthsTab = document.getElementById('fourMonthsTab');
const monthlyContent = document.getElementById('monthlyContent');
const fourMonthsContent = document.getElementById('fourMonthsContent');

monthlyTab.addEventListener('click', () => {
  monthlyTab.classList.add('bg-yellow', 'text-white');
  monthlyTab.classList.remove('bg-white', 'text-yellow');
  fourMonthsTab.classList.remove('bg-yellow', 'text-white');
  fourMonthsTab.classList.add('bg-white', 'text-black');
  monthlyContent.classList.remove('d-none');
  fourMonthsContent.classList.add('d-none');
});

fourMonthsTab.addEventListener('click', () => {
  fourMonthsTab.classList.add('bg-yellow', 'text-white');
  fourMonthsTab.classList.remove('bg-white', 'text-black');
  monthlyTab.classList.remove('bg-yellow', 'text-white');
  monthlyTab.classList.add('bg-white', 'text-black');
  monthlyContent.classList.add('d-none');
  fourMonthsContent.classList.remove('d-none');
});