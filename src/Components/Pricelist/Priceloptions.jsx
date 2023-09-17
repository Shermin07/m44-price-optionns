/* eslint-disable no-undef */

import Priceoption from "../Priceoption/Priceoption";



const Priceloptions = () => {
  const Priceloptions =  [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99/month",
          "features": [
            "Access to gym facilities",
            "Cardio equipment",
            "Strength training area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": "$49.99/month",
          "features": [
            "Access to gym facilities",
            "Cardio equipment",
            "Strength training area",
            "Group fitness classes",
            "Sauna and steam room",
            "Locker room access"
          ]
        },
        {
          "id": 3,
          "name": "Family Membership",
          "price": "$99.99/month",
          "features": [
            "Access to gym facilities for the entire family",
            "Cardio equipment",
            "Strength training area",
            "Group fitness classes",
            "Sauna and steam room",
            "Locker room access"
          ]
        }
      ]
      
    return (
        <div>
            <h1 className="text-2xl text-center">Best priceoption in the town</h1>
        <div className="grid grid-cols-3 gap-5 mx-5 mt-5 p-10">
        {
            Priceloptions.map((option) => <Priceoption key={option.id} option={option}></Priceoption>)
           } 
        </div>

      
        </div>
    );
};

export default Priceloptions;