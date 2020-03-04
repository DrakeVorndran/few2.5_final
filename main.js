fetch("data.json").then(data => data.json())
  .then(data => {
    // inits
    const bestGdp = [...data].sort((a, b) => b["GDP per capita"] - a["GDP per capita"])
    const bestSocial = [...data].sort((a, b) => b["Social support"] - a["Social support"])
    const bestLife = [...data].sort((a, b) => b["Healthy life expectancy"] - a["Healthy life expectancy"])
    const bestGenerosity = [...data].sort((a, b) => b["Generosity"] - a["Generosity"])
    

    // Challange 2
    const countriesP = document.querySelector(".countries")
    countriesP.innerHTML = `Number of Countries: ${data.length}`

    // challange 4
    const visDiv = document.querySelector(".vis")
    const gdpVis = visDiv.querySelector(".gdp-per-capita")
    const socialVis = visDiv.querySelector(".social-support")
    const lifeVis = visDiv.querySelector(".healthy-life-expectancy")
    const generosityVis = visDiv.querySelector(".generosity")

    // Challange 3
    const topDiv = document.querySelector(".top")
    const gdpDiv = topDiv.querySelector(".gdp-per-capita")
    const socialDiv = topDiv.querySelector(".social-support")
    const lifeDiv = topDiv.querySelector(".healthy-life-expectancy")
    const generosityDiv = topDiv.querySelector(".generosity")


    // gdp per capita
    const gdpList = document.createElement("ul")

    bestGdp.slice(0, 10).forEach(country => {
      const el = document.createElement("li")
      el.innerHTML = `${country["Country or region"]} - ${country["GDP per capita"]}`
      gdpList.appendChild(el)

      // Part of challange 4
      createElement(country, gdpVis.querySelector(".group"))

    })
    gdpDiv.appendChild(gdpList)

    // social support
    const socialList = document.createElement("ul")

    bestSocial.slice(0, 10).forEach(country => {
      const el = document.createElement("li")
      el.innerHTML = `${country["Country or region"]} - ${country["Social support"]}`
      socialList.appendChild(el)

      // Part of challange 4
      createElement(country, socialVis.querySelector(".group"))

    })
    socialDiv.appendChild(socialList)

    // life spans
    const lifeList = document.createElement("ul")

    bestLife.slice(0, 10).forEach(country => {
      const el = document.createElement("li")
      el.innerHTML = `${country["Country or region"]} - ${country["Healthy life expectancy"]}`
      lifeList.appendChild(el)

      // Part of challange 4
      createElement(country, lifeVis.querySelector(".group"))

    })
    lifeDiv.appendChild(lifeList)

    // generosity
    const generosityList = document.createElement("ul")

    bestGenerosity.slice(0, 10).forEach(country => {
      const el = document.createElement("li")
      el.innerHTML = `${country["Country or region"]} - ${country["Generosity"]}`
      generosityList.appendChild(el)

      // Part of challange 4
      createElement(country, generosityVis.querySelector(".group"))

    })
    generosityDiv.appendChild(generosityList)


    function createElement(country, div) {
      const el = document.createElement("div")
      el.classList.add("vis-item")
      el.innerHTML = `<p>${country["Country or region"]}</p>`

      //color for life span
      el.style.backgroundColor = `hsl(${(country["Healthy life expectancy"] / bestLife[0]["Healthy life expectancy"]) * 100}, 50%, 50%)`

      //corners for generocity
      el.style.borderRadius = `${country["Generosity"] / bestGenerosity[0]["Generosity"] * 50}%`

      // border for social support
      el.style.borderColor = `hsl(${(country["Social support"] / bestSocial[0]["Social support"]) * 100}, 50%, 50%)`

      //margin bottom for gdp
      console.log(country["GDP per capita"] / bestGdp[0]["GDP per capita"])
      el.style.marginTop = `${ 200 - (country["GDP per capita"] / bestGdp[0]["GDP per capita"]) * 200}px`

      div.appendChild(el)
    }


  })


