'use strict'

var gCurrentLanguage = 'fr'
var gTrans = {
  'main-nav-gallery': {
    en: 'Gallery',
    fr: 'Gallerie',
    he: 'גלריה',
  },
  'main-nav-memes': {
    en: 'Memes',
    fr: 'Memes',
    he: 'ממים',
  },
  'main-nav-about': {
    en: 'About',
    fr: 'À Propos',
    he: 'אודות',
  },
  'lang-en': {
    en: 'English',
    fr: 'Anglais',
    he: 'אנגלית',
  },
  'lang-fr': {
    en: 'French',
    fr: 'Français',
    he: 'צרפתית',
  },
  'lang-he': {
    en: 'Hebrew',
    fr: 'Hébreu',
    he: 'עברית',
  },
}

function setLang(lang) {
  gCurrentLanguage = lang
  lang === 'he'
    ? document.body.classList.add('rtl')
    : document.body.classList.remove('rtl')
  console.log('Current language:', gCurrentLanguage)
}

function doTrans() {
  console.log('I am here')
  const els = document.querySelectorAll('[data-trans]')
  console.log(els)
  els.forEach((el) => {
    const transKey = el.dataset.trans
    const translation = getTrans(transKey)
    el.innerText = translation
  })
}

function getTrans(transKey) {
  const key = gTrans[transKey]
  //   console.log(key)
  if (!key) return 'UNKNOWN'
  var translation = key[gCurrentLanguage]
  if (!translation) translation = key.en
  return translation
}

function formatCurrency(num) {
  return new Intl.NumberFormat(gCurrentLanguage, {
    style: 'currency',
    currency: 'USD',
  }).format(num)
}