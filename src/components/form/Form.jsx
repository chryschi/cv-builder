/* eslint-disable react/prop-types */

import { useState } from "react";
import EducationForm from "./EducationForm";
import ProjectsForm from "./ProjectsForm";
import PracticalExpForm from "./PracticalExpForm";
import SkillsForm from "./SkillsForm";
import InterestsForm from "./InterestsForm";
import IconButton from "../IconButton";
import "./Form.css";

const Form = ({
  infoHandler,
  info,
  visibilityHandler,
  content,
  singleInfo,
  deleteHandler,
  editHandler,
  sectionVisibilityHandler,
}) => {
  const [dropped, setDropped] = useState(false);
  const [createMode, setCreateMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentEditInfo, setCurrentEditInfo] = useState({});
  const [visible, setVisible] = useState(true);

  const cancelFormSubmission = () => {
    setEditMode(false);
    setCreateMode(false);
  };

  const formComponents = [
    <EducationForm editInfo={currentEditInfo} editMode={editMode} key={0} />,

    <ProjectsForm editInfo={currentEditInfo} editMode={editMode} key={1} />,

    <PracticalExpForm editInfo={currentEditInfo} editMode={editMode} key={2} />,

    <SkillsForm editInfo={currentEditInfo} editMode={editMode} key={3} />,

    <InterestsForm editInfo={currentEditInfo} editMode={editMode} key={4} />,
  ];

  const infoHandle = (e) => {
    infoHandler(e);
    setCreateMode(!createMode);
  };

  const openEditor = (index) => {
    setEditMode(true);
    setCreateMode(false);

    const infoCopy = [...info];
    console.log(infoCopy);
    const bulletpointInfo = infoCopy.filter(
      (station) => station.index === index
    )[0];
    console.log(bulletpointInfo);
    setCurrentEditInfo(bulletpointInfo);
  };

  const submitEdit = (event, id, index) => {
    editHandler(event, id, index);
    setEditMode(false);
  };

  const toggleVisibility = () => {
    sectionVisibilityHandler(content.componentId);
    setVisible(!visible);
  };

  return (
    <section>
      <h2 className="drop-header">
        <IconButton
          buttonClass="drop-button"
          onClick={() => setDropped(!dropped)}
          iconCode={dropped ? "keyboard_arrow_down" : "keyboard_arrow_right"}
        >
          {content.title}
        </IconButton>

        <IconButton
          buttonClass="visibility"
          iconCode={visible ? "visibility" : "visibility_off"}
          onClick={toggleVisibility}
        />
      </h2>

      {dropped ? (
        <div className="drop-menu">
          {singleInfo
            ? null
            : info.length !== 0 && (
                <ul className="bulletpoint-container">
                  {info.map((station) => (
                    <li key={station.index}>
                      {station[content.displayEntry]}
                      <div className="buttons">
                        <IconButton
                          buttonClass="delete"
                          iconCode="delete_forever"
                          onClick={() =>
                            deleteHandler(station.id, station.index)
                          }
                        />

                        <IconButton
                          buttonClass="edit"
                          iconCode="edit"
                          onClick={() => openEditor(station.index)}
                        />

                        <IconButton
                          buttonClass="visibility"
                          iconCode={
                            station.visible ? "visibility" : "visibility_off"
                          }
                          onClick={() =>
                            visibilityHandler(station.id, station.index)
                          }
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              )}

          {singleInfo ? null : !createMode && !editMode ? (
            <div className="add-button-container">
              <IconButton
                buttonClass="add-button"
                onClick={() => setCreateMode(!createMode)}
                childrenBeforeIcon={true}
                iconCode={"add"}
              >
                {content.newPointText}
              </IconButton>
            </div>
          ) : null}

          {!createMode && !editMode && !singleInfo ? null : (
            <form
              onSubmit={
                createMode || singleInfo
                  ? (e) => infoHandle(e)
                  : (e) =>
                      submitEdit(e, currentEditInfo.id, currentEditInfo.index)
              }
            >
              {singleInfo
                ? content.component
                : formComponents[content.componentId]}

              <div className="button-container">
                <button
                  className={"cancel " + singleInfo ? "button-invisible" : null}
                  type="button"
                  onClick={cancelFormSubmission}
                >
                  Cancel
                </button>
                <button className="submit" type="submit">
                  {"Submit " + (editMode ? "Changes" : "")}
                </button>
              </div>
            </form>
          )}
        </div>
      ) : null}
    </section>
  );
};

export default Form;
