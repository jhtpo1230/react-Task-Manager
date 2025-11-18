import React, { FC, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import SideForm from "./SideForm/SideForm";
import { FiPlusCircle } from "react-icons/fi";
import clsx from "clsx";

type TBoardListProps = {
  activeBoardId : string;
  setActiveBoardId: 
  React.Dispatch<React.SetStateAction<string>>
}

const BoardList : FC<TBoardListProps> = ({
  activeBoardId,
  setActiveBoardId
}) => {

  const {boardArray} = useTypedSelector(state => state.boards);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setIsFormOpen(!isFormOpen)
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div>
      <div>
        게시판 : 
      </div>
      {boardArray.map((board, index) => (
        <div key={board.boardId}>
          onClick={() => setActiveBoardId(boardArray[idx].boardId)}
          className={clsx(
            {
              [boardItemActive]:
                boardArray.findIndex((b) => b.boardId == activeBoardId) === idx,
            },
            {
              [boardItem]:
                boardArray.findIndex((b) => b.boardId === activeBoardId) !==
                idx,
            }
          )}
        >
          <div>{board.boardName}</div>
        </div>
      ))}
      <div>
        {
          isFormOpen ?
          (<SideForm inputRef={inputRef}setIsFormOpen = {setIsFormOpen}/>)
          :
          (<FiPlusCircle className={addButton} onClick={handleClick} />)
        }
      </div>
      
    </div>
  )
}

export default BoardList
