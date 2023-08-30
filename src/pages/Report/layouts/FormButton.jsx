/**
 * @property {string} label
 * @property {function} onClick
 * @property {string} type
 */
export const FormButton = ({ label, onClick, type = 'button' }) => {
  return (
    <button
      className="items-center space-x-2 border-2 border-transparent border-b-secondary-red-light px-3 uppercase hover:border-2 hover:border-secondary-red-light hover:text-red-600"
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};
