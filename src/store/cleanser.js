class Cleanser {
  static cleanse(data) {
    let ingredients = [
      //
    ]

    data.results.forEach((ingredient) => {
      let faqs = ingredient.data.faqs.reduce((carry, link) => {
        carry.push(link.text)

        return carry
      }, [])

      ingredients.push({
        category: ingredient.data.category_id.shift().text,
        uid: ingredient.uid,
        icon: ingredient.data.icon.url,
        name: ingredient.data.name.shift().text,
        dailyValue: ingredient.data.daily_value.shift().text,
        form: ingredient.data.form.shift().text,
        about: ingredient.data.about.shift().text,
        otherNames: ingredient.data.other_names.shift().text,
        origin: ingredient.data.origin.shift().text,
        natural: ingredient.data.natural_sources.shift().text,
        faqs: faqs
      })
    })

    return ingredients
  }
}

export {
  Cleanser as default
}