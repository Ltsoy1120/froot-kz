import React from "react";
import ButtonPink from "../../UI/Buttons/ButtonPink/ButtonPink";
import ButtonWhite from "../../UI/Buttons/ButtonWhite/ButtonWhite";
import "./CellsLine.css";

const CellsLine = props => {
  return (
    <div className="DayTiming__headCell--cellsLine">
      <div className="DayTiming__headCell">{props.timeContent}</div>
      <div className="DayTiming__cellBlock">
        <div
          style={{ background: `${props.bgColor}` }}
          onClick={props.pickRange}
          className="DayTiming__cell"
        >
          <span className="DayTiming__hiddenText">{props.timeContent}</span>
        </div>
      </div>
      <div className="DayTiming__cell--title">{props.title}</div>

      {props.isActiveTime ? (
        <div
          className={
            props.isBottom
              ? "DayTiming__modalInfo-bottom"
              : "DayTiming__modalInfo"
          }
        >
          <p className="DayTiming__modalInfo__author">
            <b>Создал встречу:</b> {props.creator}
          </p>
          <p className={"DayTiming__modalInfo__subject"}>
            <b>Тема встречи:</b> {props.titleInModal}
          </p>
          <div className={"DayTiming__modalInfo__btnBlock"}>
            {props.isOwner ? (
              <ButtonPink onClickHandler={props.deleteReserve} text="Удалить" />
            ) : null}
            {props.hasFile ? (
              <ButtonWhite onClickHandler={props.getFile} text="Скачать файл" />
            ) : null}
          </div>
          <p className={"DayTiming__modalInfo__details"}>
            <b>Детали встречи:</b> {props.details}
          </p>
          <div>
            <p className={"DayTiming__modalInfo__participantsTitle"}>
              Участники встречи:
            </p>
            {props.participants}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CellsLine;
