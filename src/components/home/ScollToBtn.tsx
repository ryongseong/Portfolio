"use client";

export default function ScrollToBtn({ target }: { target: string }) {
  return (
    <button
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
