import { useEffect, useState } from "react";
import { CohereClient } from 'cohere-ai';
import DOMPurify from 'dompurify';  // Import DOMPurify

const cohere = new CohereClient({
  token: 'IA9vNMfHYZhBHoD3GJiqCz3BmeJWZzDgWT8AcuxR',
});

const Search = () => {
  const [searchitem, setSearch] = useState("");
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [text, setText] = useState("");

  function handleResponse(e) {
    setSearch(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault(); // Prevent form from reloading the page
    setFlag2(true);
    setFlag(true);
  }

  useEffect(() => {
    if (flag && searchitem.trim()) {
      (async () => {
        
        const response = await cohere.chat({
          message: searchitem + " give response in html format and don't say like here is your html response in the final response as i am putting the final response on my page without any change so just answer the query",
        });
        const sanitizedText = DOMPurify.sanitize(response.text);  // Sanitize the HTML string
        setText(sanitizedText);
        setFlag2(false);
        console.log("The response is :", sanitizedText);
      })();
    }
  }, [flag]);

  return (
    <div>
      <form className="max-w-md mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-4 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={(e) => { handleResponse(e); }}
            type="search"
            id="default-search"
            className="block w-full px-6 py-4 ps-10 m-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
            required
          />
          <button
            onClick={handleClick}
            type="button"  // Change type to button to prevent default form submission
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      {flag2?<div className="semi-bold m-4">Loading...</div>:<div
        dangerouslySetInnerHTML={{ __html: text }}  // Render sanitized HTML
      />}
      
    </div>
  );
};

export default Search;
