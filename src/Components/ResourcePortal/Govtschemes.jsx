const Govtschemes = () => {

    const schemes = [
        {
          id: 1,
          title: "Sarva Shiksha Abhiyan",
          gist: "A flagship program aimed at universalizing elementary education for all children in India, especially those from disadvantaged backgrounds.",
          link: "https://www.education.gov.in/en/ssa"
        },
        {
          id: 2,
          title: "Mid-Day Meal Scheme",
          gist: "Provides free meals to school children to improve nutritional status and encourage underprivileged students to attend school regularly.",
          link: "https://www.mdm.nic.in/"
        },
        {
          id: 3,
          title: "National Scholarship Portal",
          gist: "An online platform offering various scholarships for underprivileged students at different levels of education in India.",
          link: "https://scholarships.gov.in/"
        },
        {
          id: 4,
          title: "Free Coaching Scheme",
          gist: "Government initiative that provides free coaching to economically disadvantaged students to help them prepare for competitive exams.",
          link: "https://www.minorityaffairs.gov.in/en/schemesperformance/free-coaching-schemes"
        }
      ];
    
    return(
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Government Schemes for Underprivileged Students</h1>
        <p className="mb-6">Below are some government schemes focused on providing free education and related benefits to underprivileged students.</p>
  
        <div className="grid gap-6">
          {schemes.map((scheme) => (
            <div key={scheme.id} className="border p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold">{scheme.title}</h2>
              <p className="mt-2">{scheme.gist}</p>
              <a 
                href={scheme.link} 
                className="text-blue-500 mt-4 inline-block"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    ) 
}

export default Govtschemes;