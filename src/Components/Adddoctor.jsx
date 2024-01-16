import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loader from '../Components/Loader';




function Adddoctor() {

const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [age, setAge] = useState('');
  const [qualification, setQualification] = useState('');
  const [description, setDescription] = useState('');
  const [hospitals, setHospitals] = useState([]);//  new state for hospitals
  const [experiance, setExperiance] = useState('');
  const [imageurl1, setImageurl1] = useState('');
  const [departments, setDepartments] = useState([]); // New state for department

 
  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('/api/hospitals/gethospitalbyid'); // Adjust the API endpoint accordingly
        setHospitals(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHospitals();
  }, []);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('/api/departments/getdepartmentbyid'); // Adjust the API endpoint accordingly
        setDepartments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDepartments();
  }, []);


  async function addDoctor() {
    const newDoctor = {
      name,
      specialist: specialist,
      age: age,
      qualification:qualification,
      hospitals,
      departments,
      experiance: experiance,
      imageurls: [imageurl1].filter((url) => url),
      description:description,
      display: true, // Set display directly to true
    };

    console.log(newDoctor);

    try {
      setLoader(true);

      const result = await axios.post('/api/doctors/adddoctor', newDoctor);

      console.log(result.data);

      Swal.fire('Congrats', 'New Doctor Inserted Successfully', 'success').then((result) => {
        window.location.reload();
      });
}catch (error) {
    console.error(error);

    setLoader(false);
    setError(true);

    Swal.fire('Oops', 'Something Went Wrong', 'error');
  }
}
return (
    <div className='row'>
      {loader && <Loader />}
      <div className='col-md-5'>
        <div>
          <label htmlFor='name'>Doctor Name:</label>
          <input
            type='text'
            className='form-control'
            placeholder='Doctor Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='specialist'>Specialist:</label>
          <input
            type='text'
            className='form-control'
            placeholder='Specialist'
            value={specialist}
            onChange={(e) => setSpecialist(e.target.value)}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type='text'
            className='form-control'
            placeholder='Age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='  qualifications'>Qualification:</label>
           <input
            type="text"
            className='form-control'
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}

/>      </div>



        <div>
            <label>Hospital</label>
        </div>
        <div>
          <label htmlFor='department'>Department</label>
          <select
            id='department'
            className='form-control'
            value={departments}
            onChange={(e) => setDepartments(e.target.value)}
          >
            <option value='Ortho'>Ortho</option>
            <option value='Skin'>Skin</option>
            <option value='Bone'>Bone</option>
            <option value='Gynacology'>Gynacology</option>
            <option value='Physician'>Physician</option>
            <option value='cardiology'>Cardiology</option>
          </select>
        </div>
      
       
        <div>
          <label htmlFor=' experiance'>Experiance:</label>
           <input
            type="number"
            className='form-control'
            value={experiance}
            onChange={(e) => setExperiance(e.target.value)}

/>      </div>


<div>



<label htmlFor='description'>Description:</label>
<textarea
  className='form-control'
  placeholder='Description'
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>
</div>
      <div className='col-md-5'>
        <div>
          <label htmlFor='imageurl1'>Image URL 1:</label>
          <input
            type='text'
            className='form-control'
            placeholder='Image URL 1'
            value={imageurl1}
            onChange={(e) => setImageurl1(e.target.value)}
          />
        </div>
        </div>
        </div>
        </div>
  );
}

export default Adddoctor;











