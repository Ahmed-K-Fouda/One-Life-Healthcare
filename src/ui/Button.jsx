// eslint-disable-next-line react/prop-types
function Button({ children }) {
  return (
    <button
      type="button"
      className="inline-flex rounded-full h-12 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
    >
      {children}
    </button>
  );
}

export default Button;
