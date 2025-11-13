import React, { useState } from "react"
import { UserData, UserModalProps } from "../../interfaces"

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  })

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddUser(formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Add New User</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border p-2 rounded"
          />
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="border p-2 rounded"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border p-2 rounded"
          />
          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website"
            className="border p-2 rounded"
          />
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white py-1 px-4 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserModal
