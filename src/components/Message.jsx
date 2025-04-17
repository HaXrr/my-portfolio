// Message.jsx
export default function Message({ onClose }) {
    return (
      <dialog open className="bg-white text-black rounded-md p-4 fixed z-30 shadow-lg max-w-md mx-auto mt-10">
        <h2 className="text-lg font-bold mb-2">🚧 Portfolio in Progress</h2>
        <p className="text-lg mt-2 md:text-sm mb-4">This website is still under development. Some features may not work yet.</p>
        <button onClick={onClose} className="bg-primary text-white px-3 py-1 rounded hover:bg-primary/90">
          Close
        </button>
      </dialog>
    );
  }
  