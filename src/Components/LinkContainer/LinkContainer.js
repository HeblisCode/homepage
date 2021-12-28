import LinkIcon from "../LinkIcon/LinkIcon";

export default function LinkContainer({
  linksArray,
  isEditable,
  handleUpdate,
  handleDelete,
}) {
  return (
    <div>
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
    </div>
  );
}
