import React from "react";
import "./SubmitProject.css";
import Labelinput from "./Labelinput/Labelinput";
import Input from "./Input/Input";
import { Button } from "../Button/Button";
import AddFiles from "./AddFiles/AddFiles";

export interface Props {}

const SubmitProject: React.FC<Props> = ({}) => {
  return (
    <div className="submitproject">
      <div className="submitproject__left">
        <h1 className="submitproject__title">Submit Project</h1>
        <div className="submitproject__inputs">
          <Labelinput
            name="Project Name*"
            Pholder="What is your project name?"
          />
          <Labelinput
            name="Team Name*"
            Pholder="What is your team name?"
            marginLeft="5%"
            marginLeftLabel="10%"
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
        <Input placeHolder="Team Member Name"/>
        <Button
          backgroundColor="white"
          border="1px solid #595959"
          width="100%"
          name="Add a team member + "
          color="#595959"
          fontWeight={200}
          height="52px"
          marginBottom="25px"
        />
        <Button
          width="13%"
          name="Submit Project"
          border="none"
          color="#FFFFFF"
        />
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
