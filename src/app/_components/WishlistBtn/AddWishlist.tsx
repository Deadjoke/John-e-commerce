'use client'
import { Button } from '_/components/ui/button'
import React, { useEffect, useState } from 'react'
import { addToWishlist, removeFromWishlist } from './wishlist.action'
import { toast } from 'sonner'
import { showAllWishlistItems } from '_/app/wishlist/wishlist.servies'

export default function AddWishlistBtn({ pid }: { pid: string }) {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    async function checkWishlist() {
      const res = await showAllWishlistItems();
      if (res?.data?.some((p) => p.id === pid)) {
        setIsAdded(true)
      }
    }
    checkWishlist()
  }, [pid])

  async function handleToggleWishlist() {
    if (isAdded) {
      // remove
      const res = await removeFromWishlist(pid)
      if (res === null) {
        toast.error("An error occurred", { position: 'top-center' })
      } else {
        toast.success("Removed from wishlist", { position: 'top-center' })
        setIsAdded(false)
      }
    } else {
      // add
      const res = await addToWishlist(pid)
      if (res == null) {
        toast.error("An error occurred", { position: 'top-center' })
      } else {
        // check returned array of IDs
        if (res.data.includes(pid)) {
          setIsAdded(true)
        }
        toast.success("Added to wishlist", { position: 'top-center' })
      }
    }
  }

  return (
    <Button
      onClick={handleToggleWishlist}
      variant="ghost"
      className={`p-0 m-0 cursor-pointer text-2xl ${
        isAdded ? 'text-red-500' : 'text-gray-400'
      }`}
    >
      <i className="fa-solid fa-heart"></i>
    </Button>
  )
}
