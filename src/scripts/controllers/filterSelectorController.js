import fetchPosts from '../utils/fetchPosts';
import getDataFromForm from '../utils/getDataFromForm';

/**
 *  Add event listener for filters
 */
const filterSelectorController = (blockId) => {
  const filterSelector = document.querySelector(
    `#bs-mbp-news-filter_${blockId}`
  );

  if (filterSelector) {
    filterSelector.addEventListener('change', async (e) => {
      const data = getDataFromForm(blockId);
      fetchPosts(data, blockId, true);
    });
  }
};

export default filterSelectorController;
