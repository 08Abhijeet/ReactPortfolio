import styled from "styled-components";

const Styling = styled.div`
  display: flex;

  width: 40rem;
  border: 0.5px solid white;
  background-color: #252121;
  border-radius: 8px;
  gap: 4px;

  @media (max-width: 768px) {
    width: 9.5rem;
    height: 1.1rem;
    border: 1px solid white;
    border-radius: 5px;
    gap: 3px;
  }
`;

const Itemstyling = styled.div`
  height: 1.8rem;
  width: 1.8rem;
  background-color: ${(props) => props.bgColor || "yellow"};
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 1rem; /* Adjust the width for mobile view */
    height: 1rem; /* Adjust the height for mobile view */
    border-radius: 5px;
  }
`;

const Situated = ({ numberOfItems, numberOfItemsMobile, itemBackgroundColor }) => {
  const renderItems = () => {
    const items = [];
    const itemsCount = window.innerWidth <= 768 ? numberOfItemsMobile : numberOfItems;

    for (let i = 0; i < itemsCount; i++) {
      items.push(<Itemstyling key={i} bgColor={itemBackgroundColor} />);
    }
    return items;
  };

  return <Styling>{renderItems()}</Styling>;
};

export default Situated;
