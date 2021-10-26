import React from "react";
import "./SubmitProject.css";
import Labelinput from "../Labelinput/Labelinput";
import Input from "../Input/Input";
import { Button } from "../../Button/Button/Button";
import AddFiles from "../AddFiles/AddFiles";

export interface Props {}

const SubmitProject: React.FC<Props> = () => {
  return (
    <div className="submitproject">
      <div className="submitproject__left">
        <h1 className="submitproject__title">Submit Project</h1>
        <div className="submitproject__inputs">
          <Labelinput
            name="Project Name*"
            Pholder="What is your project name?"
            className="submitproject__label-input"
          />
          <Labelinput
            name="Team Name*"
            Pholder="What is your team name?"
            className="submitproject__label-input"
          />
        </div>
        <div className="submitproject__describe">
          <label className="submitproject__label">Describe project*</label>
          <textarea
            placeholder="Describe your project, include important details"
            className="submitproject__form"
            name="textArea"
          ></textarea>
        </div>
        <Input
          placeHolder="Team Member Name"
          className="submitproject__input"
        />
        <Button
          name="Add a team member + "
          className="submitproject__button-member"
        />
        <Button name="Submit Project" className="submitproject__button" />
      </div>
      <div className="submitproject__right">
        <AddFiles
          description="Please ensure you have read the contest brief. You need to upload your project presentation and a project thumbnail.
Supported files types are: PPT, MP4, JPG, PNG"
          title="Add files"
          subtitle="Drag your file or"
        />
      </div>
    </div>
  );
};

export default SubmitProject;
