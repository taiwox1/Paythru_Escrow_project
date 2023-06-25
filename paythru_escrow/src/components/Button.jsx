const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins text-primary outline-none rounded-lg ${styles}`}
    >
      Get stated
    </button>
  );
};

export default Button;
