import { useEffect, useState } from "react";
import axios from "axios"
import { BACKENDBASEURL } from "../config";
/*make a component which take user's data about himself/herself and make a backend call to put that
into the database will have to change userschema, we will devide it into two schema one with basic info
used during login and other for data on the user ! same goes for mentor !
*/

const UserProfile = ()=>{
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
      });
    const [formData, setFormData] = useState({
        phone: '',
        state: '',
        currentstd: '',
        age: '',
        gender: '',
        fieldofinterest: '',
        instagram: '',
        linkedin: '',
        twitter: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
              
            },
            (error) => {
              console.error(error);
            }
          );
        } else {
          console.log('Geolocation is not supported by this browser.')
        }
      };
      useEffect(()=>{getLocation},[])
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(BACKENDBASEURL+'/user/profilesetup',{

            lat:location.latitude,
            long:location.longitude,
            fieldofinterest:formData.fieldofinterest,
            gender:formData.gender,
            age:formData.age,
            phone:formData.phone,
            state:formData.state,
            currentstd:formData.currentstd,
            instagram:formData.instagram,
            linkedin:formData.linkedin,
            twitter:formData.twitter,
          },
            {
                headers: {
                  'Authorization':`Bearer ${localStorage.getItem('token')}`
              }  
              }
          )
    
          if (response.status===200) {
            alert('Profile created successfully');
          } else {
            alert('Failed to create profile');
          }
        } catch (error) {
          console.error('Error submitting profile:', error);
        }
      };
    return(
        <div className="max-w-md mx-auto mt-10 border p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Profile Setup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded"
            placeholder="Enter phone number"
            required
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded"
            placeholder="Enter state"
            required
          />
        </div>

        {/* Currently Studying In */}
        <div>
          <label className="block text-sm font-medium">Currently Studying In</label>
          <input
            type="text"
            name="currentstd"
            value={formData.currentstd}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded"
            placeholder="Enter current education level"
            required
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded"
            placeholder="Enter age"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded"
            required
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Field of Interest */}
        <div>
          <label className="block text-sm font-medium">Field of Interest</label>
          <input
            type="text"
            name="fieldofinterest"
            value={formData.fieldofinterest}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded"
            placeholder="Enter field of interest"
            required
          />
        </div>

        {/* Instagram Profile Link */}
        <div>
          <label className="block text-sm font-medium">Instagram Profile Link</label>
          <input
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded"
            placeholder="Enter Instagram profile link"
          />
        </div>

        {/* LinkedIn Profile Link */}
        <div>
          <label className="block text-sm font-medium">LinkedIn Profile Link</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded"
            placeholder="Enter LinkedIn profile link"
          />
        </div>

        {/* Twitter Profile Link */}
        <div>
          <label className="block text-sm font-medium">Twitter Profile Link</label>
          <input
            type="text"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded"
            placeholder="Enter Twitter profile link"
          />
        </div>
        <button
        onClick={handleSubmit}
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit Profile
        </button>    
      </form>
    </div>
    )
}

export default UserProfile;