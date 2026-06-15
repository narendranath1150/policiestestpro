import React from "react";
import { useNavigate } from "react-router-dom";
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

const MyPolicies: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (policyNumber: string): void => {
    navigate(`/policies/${policyNumber}`, {
      state: {
        policyNumber: policyNumber,
      },
    });
  };


  return (

    <div className="p-2">
      <h1 className="text-1xl font-bold mb-6 "> POLICIES </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
        {users.map((Policy) => (
          <div key={Policy.policyNumber}

            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 p-4 border-2 border-blue-700 rounded-lg "
          >

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 p-4 text-green-800">
              <h3>Policy Number : {Policy.policyNumber}</h3>
              <h3>Plan: {Policy.planName}</h3>
              <h3>Policy Start Date: {Policy.policyStart}</h3>
              <h3>Trip Duration: {Policy.maxTripDuration}</h3>
              <div>{Policy.destinations.map((Destination) =>
                <div key={Policy.policyNumber} >
                  <h3>Destination : {Destination.name}</h3>
                </div>)}
              </div>
            </div>
            <button className="h-10 px-1 py-1 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 cursor-pointer "
              onClick={() => handleClick(Policy.policyNumber)}>
              View Details
            </button>
          </div>


        ))}
      </div>

    </div>
  );
};

export default MyPolicies;