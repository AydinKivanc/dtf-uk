'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'

export default function ImageModal({ isOpen, onClose, imageSrc, alt }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
        
        <div className="p-4">
          <Image
            src={imageSrc}
            alt={alt}
            width={800}
            height={600}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </div>
  )
}