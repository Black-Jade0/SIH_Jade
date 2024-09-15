const Mybutton = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="text-blue-500 hover:underline hover:text-blue-700"
  >
    {text}
  </button>
);

export default Mybutton;