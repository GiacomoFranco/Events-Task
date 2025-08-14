import { describe, expect, test } from 'vitest'
import { getImageName } from '@/utils'

describe('image', () => {
  describe('getImageName', () => {
    test('should return the image name without the extension', () => {
      const imagePath = '/src/assets/images/screen.webp'
      const expectedName = 'screen'
      const result = getImageName(imagePath)
      expect(result).toBe(expectedName)
    })

    test('should return the image name without the extension, even if the path is relative', () => {
      const imagePath = 'screen.webp'
      const expectedName = 'screen'
      const result = getImageName(imagePath)
      expect(result).toBe(expectedName)
    })

    test('should return an empty string if the image path is empty', () => {
      const imagePath = ''
      const expectedName = ''
      const result = getImageName(imagePath)
      expect(result).toBe(expectedName)
    })

    test('should return an empty string if the image path is null', () => {
      const imagePath = null
      const expectedName = ''
      const result = getImageName(imagePath)
      expect(result).toBe(expectedName)
    })
  })
})
