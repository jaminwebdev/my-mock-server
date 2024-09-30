'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [users, setUsers] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/users')
      const usersData = await res.json()
      setUsers(usersData)
    }
    fetchData()
  }, [])

  if (!users) return <p>Loading...</p>

  return <p>{JSON.stringify(users, null, 2)}</p>
}
