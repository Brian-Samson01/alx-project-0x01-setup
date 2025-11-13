import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-80 hover:shadow-xl transition-shadow duration-200">
      <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
      <p className="text-gray-600 mb-1">@{user.username}</p>
      <p className="text-gray-700 mb-1">📧 {user.email}</p>
      <p className="text-gray-700 mb-1">📞 {user.phone}</p>
      <p className="text-gray-700 mb-1">🌐 {user.website}</p>
      <div className="mt-3 text-gray-500 text-sm">
        <p>🏙️ {user.address.city}, {user.address.street}</p>
        <p>{user.company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
