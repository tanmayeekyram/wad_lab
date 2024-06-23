import React, { useState } from 'react';

const Regi = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        username: '',
        dob: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.firstName.trim()) {
            tempErrors.firstName = 'First Name is required';
            isValid = false;
        }
        if (!formData.lastName.trim()) {
            tempErrors.lastName = 'Last Name is required';
            isValid = false;
        }
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            tempErrors.email = 'Valid email is required';
            isValid = false;
        }
        if (!formData.password || formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }
        if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }
        if (!formData.phoneNumber.trim()) {
            tempErrors.phoneNumber = 'Phone Number is required';
            isValid = false;
        }
        if (!formData.address.trim()) {
            tempErrors.address = 'Address is required';
            isValid = false;
        }
        if (!formData.city.trim()) {
            tempErrors.city = 'City is required';
            isValid = false;
        }
        if (!formData.state.trim()) {
            tempErrors.state = 'State is required';
            isValid = false;
        }
        if (!formData.zipCode.trim()) {
            tempErrors.zipCode = 'Zip Code is required';
            isValid = false;
        }
        if (!formData.country.trim()) {
            tempErrors.country = 'Country is required';
            isValid = false;
        }
        if (!formData.username.trim()) {
            tempErrors.username = 'Username is required';
            isValid = false;
        }
        if (!formData.dob.trim()) {
            tempErrors.dob = 'Date of Birth is required';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Handle successful registration (e.g., send data to the server)
            console.log('Registration successful:', formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                {errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </div>
            <div>
                <label>Phone Number:</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            </div>
            <div>
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />
                {errors.address && <p>{errors.address}</p>}
            </div>
            <div>
                <label>City:</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />
                {errors.city && <p>{errors.city}</p>}
            </div>
            <div>
                <label>State:</label>
                <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                />
                {errors.state && <p>{errors.state}</p>}
            </div>
            <div>
                <label>Zip Code:</label>
                <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                />
                {errors.zipCode && <p>{errors.zipCode}</p>}
            </div>
            <div>
                <label>Country:</label>
                <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                />
                {errors.country && <p>{errors.country}</p>}
            </div>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label>Date of Birth:</label>
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                />
                {errors.dob && <p>{errors.dob}</p>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Regi;
