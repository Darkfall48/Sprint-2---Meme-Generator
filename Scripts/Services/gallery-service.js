'use strict'

const GALLERY_STORAGE_KEY = 'galleryDB'

let gImgs
let gFilterBy = { keyword: '' }

function initGallery() {
  _createImages()
}

function getImages() {
  const images = loadFromStorage(GALLERY_STORAGE_KEY)
  if (!gFilterBy.keyword) return images

  const filtredImages = images.filter((image) =>
    image.keywords.includes(gFilterBy.keyword)
  )

  if (!filtredImages.length || !filtredImages) return images
  else return filtredImages
}

function setFilter(value) {
  gFilterBy.keyword = value
  renderGallery()
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
      _createImage('./Images/Gallery/1.jpg', ['politic', 'trump']),
      _createImage('./Images/Gallery/2.jpg', ['animal', 'dog']),
      _createImage('./Images/Gallery/3.jpg', ['animal', 'dog', 'baby']),
      _createImage('./Images/Gallery/4.jpg', ['animal', 'cat']),
      _createImage('./Images/Gallery/5.jpg', ['kid', 'baby', 'power']),
      _createImage('./Images/Gallery/6.jpg', ['crazy']),
      _createImage('./Images/Gallery/7.jpg', ['funny', 'baby']),
      _createImage('./Images/Gallery/8.jpg', ['pensive', 'actor']),
      _createImage('./Images/Gallery/9.jpg', ['funny', 'baby', 'kid']),
      _createImage('./Images/Gallery/10.jpg', ['politic', 'obama', 'barak']),
      _createImage('./Images/Gallery/11.jpg', ['love']),
      _createImage('./Images/Gallery/12.jpg', ['funny']),
      _createImage('./Images/Gallery/13.jpg', ['actor', 'di', 'caprio']),
      _createImage('./Images/Gallery/14.jpg', ['movie', 'matrix']),
      _createImage('./Images/Gallery/15.jpg', ['movie', 'lord', 'ring']),
      _createImage('./Images/Gallery/16.jpg', ['movie', 'star', 'space']),
      _createImage('./Images/Gallery/17.jpg', ['politic', 'vladimir', 'putin']),
      _createImage('./Images/Gallery/18.jpg', ['movie', 'toys']),
      _createImage('./Images/Various/2.jpg', ['movie', 'toys']),
      _createImage('./Images/Various/004.jpg', ['movie', 'toys']),
      _createImage('./Images/Various/drevil.jpg', ['movie', 'toys']),
      _createImage('./Images/Various/leo.jpg', ['movie', 'toys']),
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
