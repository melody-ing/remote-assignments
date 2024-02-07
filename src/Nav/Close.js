<<<<<<< HEAD
export default function Close({ setIsAddingMenu }) {
=======
export function Close({ setMenu }) {
>>>>>>> 234c389ea046719a97b0ae6514a6d1f82ad27d21
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6 icon"
<<<<<<< HEAD
      onClick={() => setIsAddingMenu((item) => !item)}
=======
      onClick={() => setMenu((item) => !item)}
>>>>>>> 234c389ea046719a97b0ae6514a6d1f82ad27d21
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}
