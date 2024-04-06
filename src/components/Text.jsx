/* eslint-disable react/prop-types */
function Text({ children, ...props }) {
  return <p {...props}>{children}</p>;
}

export default Text;
