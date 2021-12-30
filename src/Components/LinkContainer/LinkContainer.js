import styled from "styled-components";
import LinkIcon from "../LinkIcon/LinkIcon";

export default function LinkContainer({
  linksArray,
  isEditable,
  handleUpdate,
  handleDelete,
}) {
  return (
    <StyledLinkContainer>
      {linksArray.map((link, i) => {
        return (
          <LinkIcon
            key={`modal${i}`}
            linkObj={link}
            isEditable={isEditable}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        );
      })}
    </StyledLinkContainer>
  );
}

const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  gap: 2rem;
`;
