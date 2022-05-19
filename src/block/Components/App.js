import { useEffect } from 'react';
import PropTypes from 'prop-types';

const App = ({ attributes, setAttributes }) => {
  const { title, numberOfColumns, numberOfRows } = attributes;

  function onChangeTitle(newTitle) {
    setAttributes({ title: newTitle });
  }

  function onChangeNumberOfColumns(newNumberOfColumns) {
    setAttributes({ numberOfColumns: newNumberOfColumns });
  }

  function onChangeNumberOfRows(newNumberOfRows) {
    setAttributes({ numberOfRows: newNumberOfRows });
  }

  useEffect(() => {
    if (!numberOfColumns) {
      setAttributes({ numberOfColumns: '3' });
    }
    if (!numberOfRows) {
      setAttributes({ numberOfRows: '1' });
    }
  }, []);

  return (
    <div className="border border-dark">
      <p className="fs-1">Blok Aktualności</p>
      <form>
        <div class="row m-3">
          <label for="blockTitle" class="form-label m-1">
            Tytuł bloku
          </label>
          <input
            type="text"
            className="form-control"
            id="blockTitle"
            placeholder="Tytuł"
            value={title}
            onChange={(e) => onChangeTitle(e.target.value)}
          />
        </div>
        <div className="row m-3">
          <label for="numberOfColumns" className="form-label m-1">
            Liczba kolumn
          </label>
          <select
            name="numberOfColumns"
            id="numberOfColumns"
            value={numberOfColumns || 3}
            onChange={(e) => onChangeNumberOfColumns(e.target.value)}
            className="form-control"
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="row m-3">
          <label for="numberOfRows" className="form-label m-1">
            Liczba rzędów
          </label>
          <select
            name="numberOfRows"
            id="numberOfRows"
            value={numberOfRows || 1}
            onChange={(e) => onChangeNumberOfRows(e.target.value)}
            className="form-control"
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </form>
    </div>
  );
};

App.propTypes = {
  attributes: PropTypes.shape().isRequired,
  setAttributes: PropTypes.func.isRequired,
};

export default App;
