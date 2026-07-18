export function generateSlug(title: string) {
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  return slug.replace(/[^a-z0-9-]/g, '');
}
export function generateVehicleSlug(id: string) {
  const slug = id.toLowerCase().replace(/\s+/g, '-');
  return slug.replace(/[^a-z0-9-]/g, '');
}
