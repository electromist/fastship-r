import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getShipmentsCountForStatus(shipments: any[], status: any) {
  if (!Array.isArray(shipments)) return 0
  return shipments.filter((s) => s && s.status === status).length
}

export function getLatestStatus(shipment: any): string {
  if (!shipment) return "Shipment Status"
  if (shipment.status) return shipment.status
  if (Array.isArray(shipment.timeline) && shipment.timeline.length > 0) {
    return shipment.timeline[shipment.timeline.length - 1]?.status || "Shipment Status"
  }
  return "Shipment Status"
}


