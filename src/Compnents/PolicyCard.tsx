
import { useLocation } from "react-router-dom";
import PolicyData from "../assets/PoliciesList.json";

interface Destination {
  code: string;
  name: string;
}

interface Policy {
  policyNumber: string;
  policyStart: string;
  policyEnd: string;
  primaryTravellerFirstname: string;
  primaryTravellerLastName: string;
  primaryTravellerPhoneNumber: string;
  status: string;
  destinations: Destination[];
  alphaCode: string;
  iSO3CountryOfResidence: string;
  underwriterCode: string;
  groupCode: string;
  type: string;
  excess: number;
  maxTripDuration: number;
  planName: string;
}
const users: Policy[] = PolicyData;

const PolicyDetails = () => {
  const location = useLocation();
  const receivedPolicyNumber = location.state.policyNumber;
  const details = users.find(u => u.policyNumber === receivedPolicyNumber);
  return (
    <div >
      <h1 className="text-1xl font-bold mb-6 "> POLICY DETAILS </h1>

      <div key={details.policyNumber} className="justify-items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-2 border-blue-700 rounded-lg p-6 ">
          <h5>Policy Number : {details.policyNumber}</h5>
          <h5>Traveller Name: {details.primaryTravellerFirstname}  {details.primaryTravellerLastName}</h5>
          <h5>Traveller Phone Number: {details.primaryTravellerPhoneNumber}</h5>
          <h5>Status: {details.status}</h5>
          <h5>Plan: {details.planName}</h5>
          <h5>Trip Duration: {details.maxTripDuration}</h5>
          <p>{details.destinations.map((Destination) =>
            <div key={details.policyNumber} >
              <h5>Destination : {Destination.name}</h5>
            </div>)}
          </p>
          <h5>Policy Start Date: {details.policyStart}</h5>
          <h5>Policy End Date: {details.policyEnd}</h5>
        </div>
      </div>
    </div>
  );
}

export default PolicyDetails;