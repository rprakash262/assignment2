import { AiTwotonePushpin } from "react-icons/ai";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getStyle = () => {
  return {
    color: '#fff',
    fontSize: '22px',
    zIndex: 1,
    cursor: 'pointer',
    position: 'absolute',
    top: '2px',
    right: '2px',
  }
}

const getStyle2 = () => {
  return {
    color: '#000',
    fontSize: '22px',
  }
}

const Taskbar = ({
  selectMenu,
  taskbarItems,
  selectedTaskbarItem,
  setTaskbarItem,
  selectTaskbarItem,
  tempTaskbarItem,
  unpin,
  pin,
}) => {

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const items = reorder(
      taskbarItems,
      result.source.index,
      result.destination.index
    );

    setTaskbarItem(items)
  }

  return (
    <div id="taskbar">
      <div className="oneTaskItem" onClick={selectMenu}>Menus</div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {provided => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {taskbarItems.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className="oneTaskItemContainer"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div
                        className={`oneTaskItem ${selectedTaskbarItem === item ? 'selectedTaskbarItem' : ''}`}
                        onClick={() => selectTaskbarItem(item)}
                      >
                        {item}
                      </div>
                      <span title="Unpin">
                        <AiTwotonePushpin style={getStyle()} onClick={() => unpin(item)}/>
                      </span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {tempTaskbarItem && (
        <div className="oneTaskItemContainer" style={{ backgroundColor: '#fff' }}>
          <div
            className={`oneTaskItem ${selectedTaskbarItem === tempTaskbarItem ? 'selectedTaskbarItem' : ''}`}
            style={{ color: '#000' }}
            onClick={() => selectTaskbarItem(tempTaskbarItem)}
          >
            {tempTaskbarItem}
          </div>
          <span title="Pin">
            <AiTwotonePushpin
              style={{...getStyle(), ...getStyle2()}}
              onClick={() => pin(tempTaskbarItem)}
            />
          </span>
        </div>
      )}      
    </div>
  )
}

export default Taskbar;