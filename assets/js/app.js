// =============first pricing table tabs============
const monthlyTab = document.getElementById('monthlyTab');
const fourMonthsTab = document.getElementById('fourMonthsTab');
const monthlyContent = document.getElementById('monthlyContent');
const fourMonthsContent = document.getElementById('fourMonthsContent');
// monthly tab
monthlyTab.addEventListener('click', () => {
  monthlyTab.classList.add('bg-orange', 'text-white');
  monthlyTab.classList.remove('bg-white', 'text-orange');
  fourMonthsTab.classList.remove('bg-orange', 'text-white');
  fourMonthsTab.classList.add('bg-white', 'text-black');
  monthlyContent.classList.remove('d-none');
  fourMonthsContent.classList.add('d-none');
});
// four month tab
fourMonthsTab.addEventListener('click', () => {
  fourMonthsTab.classList.add('bg-orange', 'text-white');
  fourMonthsTab.classList.remove('bg-white', 'text-black');
  monthlyTab.classList.remove('bg-orange', 'text-white');
  monthlyTab.classList.add('bg-white', 'text-black');
  monthlyContent.classList.add('d-none');
  fourMonthsContent.classList.remove('d-none');
});