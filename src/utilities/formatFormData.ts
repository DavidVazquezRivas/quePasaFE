import { FormDataType } from '@/types/dataTypes'

export function formatFormData(fields: string[], formData: FormData) {
  return fields.reduce((acc, field) => {
    acc[field] = formData.get(field) as string | null
    return acc
  }, {} as FormDataType)
}
