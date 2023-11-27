import Select from "react-select";

export interface ControlsProps {
  handleSortField: any,
  handleSortDirection: any
}

const Controls = ({ handleSortField, handleSortDirection }: ControlsProps) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          onChange={handleSortField}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={handleSortDirection}
        />
      </div>
    </div>
  );
};

export default Controls;
