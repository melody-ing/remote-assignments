<<<<<<< HEAD
export default function Menu({ setIsAddingMenu }) {
=======
export function Menu({ setMenu }) {
>>>>>>> 234c389ea046719a97b0ae6514a6d1f82ad27d21
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 icon "
<<<<<<< HEAD
        onClick={() => setIsAddingMenu((item) => !item)}
=======
        onClick={() => setMenu((item) => !item)}
>>>>>>> 234c389ea046719a97b0ae6514a6d1f82ad27d21
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </>
  );
}
