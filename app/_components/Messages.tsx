'use client'

import { useSnapshot } from 'valtio'

import { state } from '../../store'

export default function Messages() {
  const snap = useSnapshot(state)

  return (
    <pre>{JSON.stringify(snap.test, null, 2)}</pre>
  )
}