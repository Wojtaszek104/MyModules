const getDataFromForm = (blockId) => {
  const data = {};
  const filterSelector = document.querySelector(
    `#bs-mbp-news-filter_${blockId}`
  );

  const category = filterSelector.value;
  if (category) data.category = category;

  const rows = filterSelector.dataset.rows;
  if (rows) data.rows = rows;

  const columns = filterSelector.dataset.columns;
  if (columns) data.columns = columns;

  return data;
};

export default getDataFromForm;
