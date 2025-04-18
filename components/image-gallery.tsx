"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/oo poo/p1.jpg",
      alt: "Pool cleaning and maintenance",
      category: "Cleaning",
    },
    {
      id: 2,
      src: "/oo poo/p2.jpg",
      alt: "Professional pool service",
      category: "Maintenance",
    },
    {
      id: 3,
      src: "/oo poo/p4.jpg",
      alt: "Pool equipment repair",
      category: "Repair",
    },
    {
      id: 4,
      src: "/oo poo/p5.jpg",
      alt: "Weekly pool maintenance",
      category: "Maintenance",
    },
    {
      id: 5,
      src: "/oo poo/p6.jpg",
      alt: "Pool cleaning service",
      category: "Cleaning",
    },
    {
      id: 6,
      src: "/oo poo/p7.jpg",
      alt: "Pool water treatment",
      category: "Cleaning",
    },
    {
      id: 7,
      src: "/oo poo/p8.jpg",
      alt: "Pool maintenance service",
      category: "Maintenance",
    },
    {
      id: 8,
      src: "/oo poo/p9.jpg",
      alt: "Professional pool cleaning",
      category: "Cleaning",
    },
    {
      id: 9,
      src: "/oo poo/p10.jpg",
      alt: "Complete pool service",
      category: "Maintenance",
    },
    {
      id: 10,
      src: "/oo poo/118897002_2661210527435183_9146009862927449657_n.jpg",
      alt: "Pool cleaning transformation",
      category: "Cleaning",
    },
    {
      id: 11,
      src: "/oo poo/118798125_2661210557435180_4120899240172593052_n.jpg",
      alt: "Professional pool maintenance",
      category: "Maintenance",
    },
    {
      id: 12,
      src: "/oo poo/118836690_2661221257434110_4767297853320228144_n.jpg",
      alt: "Expert pool service",
      category: "Cleaning",
    },
  ]

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => openLightbox(image)}
          >
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">{image.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            className="absolute top-4 right-4 text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>

          <div className="relative max-w-4xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-lg">{selectedImage.alt}</p>
              <p className="text-white/80 text-sm">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
