export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] py-10 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#444]">
          © Copyright 2025. All Rights Reserved by Hermes Lopez
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/hermeslopez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#555] hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net/hermeslopez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#555] hover:text-white transition-colors"
          >
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}
