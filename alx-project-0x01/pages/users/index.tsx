import React, { useState } from "react"
import UserCard from "../../components/common/UserCard"
import UserModal from "../../components/common/UserModal"
import { UserData } from "../../interfaces"

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts,
    },
  }
}

const Users = ({ posts }: { posts: UserData[] }) => {
  const [users, setUsers] = useState<UserData[]>(posts)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddUser = (newUser: UserData) => {
    setUsers(prev => [...prev, newUser])
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Users</h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
        >
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddUser={handleAddUser}
      />
    </div>
  )
}

export default Users
