export const linearToTree = (data) => {
  let rowPointer = 0;

  const generateChildren = (parentName) => {
    const children = [];
    while (true) {
      if (
        rowPointer + 1 < data.length &&
        data[rowPointer + 1].name.includes(parentName)
      ) {
        rowPointer++;
        const namesArray = data[rowPointer].name.split(" > ");
        const child = {
          name: namesArray[namesArray.length - 1],
          size: data[rowPointer].size,
          children:
            data[rowPointer].size === 0
              ? []
              : generateChildren(data[rowPointer].name),
        };
        children.push(child);
      } else {
        break;
      }
    }
    return children;
  };

  const jsonTree = {
    name: data[rowPointer].name,
    size: data[rowPointer].size,
    children:
      data[rowPointer].size === 0
        ? []
        : generateChildren(data[rowPointer].name),
  };

  return jsonTree;
};
