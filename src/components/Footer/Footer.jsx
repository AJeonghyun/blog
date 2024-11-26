const Footer = () => {
  return (
    <footer className="bg-lightgray dark:border-t dark:border-stone-900 dark:bg-black">
      <div className="horizontal-pad flex flex-col items-center justify-end gap-3 py-1 sm:flex-row">
        <div className="flex gap-3">
          <a
            href="https://github.com/AJeonghyun"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-700 p-2 transition duration-300 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white dark:text-black"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.637-1.338-2.22-.253-4.555-1.11-4.555-4.934 0-1.09.39-1.982 1.03-2.68-.103-.253-.447-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.8a9.56 9.56 0 0 1 2.5.337c1.91-1.296 2.75-1.026 2.75-1.026.545 1.377.202 2.394.1 2.647.64.698 1.03 1.59 1.03 2.68 0 3.832-2.337 4.677-4.565 4.926.36.31.682.92.682 1.852 0 1.337-.012 2.415-.012 2.742 0 .268.18.578.688.479A10.003 10.003 0 0 0 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
