// Return classname

const getClassNames = (classes) => {
  return Object.keys(classes)
    .filter((className) => classes[className])
    .join(" ");
};
export default getClassNames;
