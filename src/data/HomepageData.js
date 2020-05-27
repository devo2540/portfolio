import { flamelinkApp } from '../flamelink/index'

export const fetchHomepageData = async () => {
  const homepageData = await flamelinkApp.content.get({
    schemaKey: 'homepage'
  })

  console.log(homepageData)
}