

const Mydropdown = ({ isVisible, resources }) => {
  return (
    <div className="mt-2">
      {isVisible ? (
        <ul className="p-4 bg-gray-100 border border-gray-300 rounded-md">
          {resources.map((resource, index) => (
            <li key={index} className="mb-4">
              <h4 className="font-semibold">{resource.name}</h4>
              <p>{resource.description}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Visit {resource.name}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Mydropdown;