'use client'
import { useEffect, useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  const [users, setUsers] = useState()
  const [accounts, setAccounts] = useState()
  const [transactions, setTransactions] = useState()
  const [properties, setProperties] = useState()


  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/users')
      const usersData = await res.json()
      setUsers(usersData)
    }
    const fetchAccounts = async () => {
      const res = await fetch('/api/finance/accounts')
      const accountData = await res.json()
      setAccounts(accountData)
    }
    const fetchTransactions = async () => {
      const res = await fetch('/api/finance/transactions')
      const txData = await res.json()
      setTransactions(txData)
    }
    const fetchProperties = async () => {
      const res = await fetch('/api/real-estate/properties')
      const propertyData = await res.json()
      setProperties(propertyData)
    }
    fetchUsers()
    fetchAccounts()
    fetchTransactions()
    fetchProperties()
  }, [])

  if (!users) return <p>Loading...</p>

  return (
    <div className='max-w-screen-xl m-auto py-16 text-white'>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>User Data 🙋‍♂️</AccordionTrigger>
          <AccordionContent className='h-full max-h-[400px] overflow-y-scroll'>
            <pre>{JSON.stringify(users, null, 2)}</pre>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Account Data 💳</AccordionTrigger>
          <AccordionContent className='h-full max-h-[400px] overflow-y-scroll'>
            <pre>{JSON.stringify(accounts, null, 2)}</pre>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Transaction Data 💵</AccordionTrigger>
          <AccordionContent className='h-full max-h-[400px] overflow-y-scroll'>
            <pre>{JSON.stringify(transactions, null, 2)}</pre> 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Property Data 🏡</AccordionTrigger>
          <AccordionContent className='h-full max-h-[400px] overflow-y-scroll'>
            <pre>{JSON.stringify(properties, null, 2)}</pre> 
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    
  )
}
