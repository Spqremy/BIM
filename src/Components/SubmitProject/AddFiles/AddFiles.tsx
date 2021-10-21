import React from "react";
import Button from "../../Button/Button";
import "./AddFiles.css";

export interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
}

const AddFiles: React.FC<Props> = ({ title, subtitle, description }) => {
  return (
    <>
      <div className="addfile">
        <div className="addfile__inner">
          <h1 className="addfile__title">{title}</h1>
          <h3 className="addfile__subtitle">{subtitle}</h3>
          <Button
            name="Browse your files"
            border="1px solid #6C6C6C"
            backgroundColor="white"
            color="#878787"
          ></Button>
        </div>
      </div>
      <p className="addfile__description">{description}</p>
    </>
  );
};

export default AddFiles;
