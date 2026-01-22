import React from 'react'

function Master() {
  return (
    <div>
         <table>
          <tbody>
            <tr>
              <td><label htmlFor="fullname">Full Name</label></td>
              <td><input type="text" id="fullname" name="fullname" required /></td>
            </tr>

            <tr>
              <td><label htmlFor="email">Email</label></td>
              <td><input type="email" id="email" name="email" required /></td>
            </tr>

            <tr>
              <td><label htmlFor="phone">Phone Number</label></td>
              <td>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{10}"
                  placeholder="10-digit number"
                  required
                />
              </td>
            </tr>

            <tr>
              <td><label htmlFor="dob">Date of Birth</label></td>
              <td><input type="date" id="dob" name="dob" required /></td>
            </tr>

            <tr>
              <td><label htmlFor="gender">Gender</label></td>
              <td>
                <select id="gender" name="gender" required>
                  <option value="">-- Select --</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </td>
            </tr>

            <tr>
              <td><label htmlFor="password">Password</label></td>
              <td><input type="password" id="password" name="password" minLength={6} required /></td>
            </tr>

            <tr>
              <td><label htmlFor="confirm">Confirm Password</label></td>
              <td><input type="password" id="confirm" name="confirm" minLength={6} required /></td>
            </tr>

            <tr>
              <td colSpan="2">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms"> I agree to the terms and conditions</label>
              </td>
            </tr>

            <tr>
              <td colSpan="2" style={{ textAlign: "center" }}>
                <button type="submit">Register</button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Master