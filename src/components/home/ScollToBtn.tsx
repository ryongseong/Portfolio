"use client";

export default function ScrollToBtn({ target }: { target: string }) {
  return (
    <button
      className="mt-10 mb-10 animate-bounce rounded-full p-3  focus:outline-none"
      onClick={() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }}
      type="button"
    >
      <div id="scroll">
        <span className="arrow-bounce">&#8595;</span>
      </div>
    </button>
  );
}
