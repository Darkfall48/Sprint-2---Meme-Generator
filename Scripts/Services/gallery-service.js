'use strict'

const GALLERY_STORAGE_KEY = 'galleryDB'

let gImgs

function initGallery() {
  _createImages()
}

function getImages() {
  return loadFromStorage(GALLERY_STORAGE_KEY)
}

function getImageById(imageId) {
  return gImgs.find((image) => image.id === imageId)
}

function imageClicked(imageId) {
  setMeme(imageId)
  openEditor()
}

function _createImages() {
  gImgs = loadFromStorage(GALLERY_STORAGE_KEY)
  if (!gImgs || !gImgs.length) {
    gImgs = [
      _createImage(
        'https://github.com/Darkfall48/Sprint-2-Meme-Generator/blob/main/Images/Gallery/1.jpg?raw=true',
        ['funny', 'cat']
      ),
      _createImage(
        'https://github.com/Darkfall48/Sprint-2-Meme-Generator/blob/main/Images/Gallery/2.jpg?raw=true',
        ['funny', 'cat']
      ),
      _createImage(
        'https://github.com/Darkfall48/Sprint-2-Meme-Generator/blob/main/Images/Gallery/3.jpg?raw=true',
        ['funny', 'cat']
      ),
      _createImage(
        'https://github.com/Darkfall48/Sprint-2-Meme-Generator/blob/main/Images/Gallery/4.jpg?raw=true',
        ['funny', 'cat']
      ),
    ]
    console.log('Gallery Created')
  }
  _saveGalleryToStorage()
}
function _createImage(url, keywords) {
  return { id: makeId(), url, keywords }
}

function _saveGalleryToStorage() {
  saveToStorage(GALLERY_STORAGE_KEY, gImgs)
}