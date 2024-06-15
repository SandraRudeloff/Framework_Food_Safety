---
Type:
  - Relation
Category: []
Linked_to_Framework?: true
---
Huff's Gravity Model @huff1963 is referenced in several publications for estimating the food flow between supermarkets and customers within the context of food safety investigations. The model uses as inputs:
- Population Density: represents food demand, typically assuming a uniform distribution where each individual consumes an equal amount of food
- Retail locations & sales: Locational data are used to calculate the distance to population cells and sales to estimate the total volume of food sold
- Mean shopping distance: Employed to calibrate the gravity model, adjusting it to match actual consumer behavior.

Population Density and Retailer Locations are nodes of the [[Food Supply Network]] and using the mean shopping distance the volumetric links between them can be estimated. 

[[@schlaich.etal2020]] develop and calibrate a gravity model of German retail shopping at the postal code level. They show that about 70 percent of all groceries are sourced from non-home zip codes. They demonstrated increased accuracy in network-theoretic estimators for identifying outbreak sources.

[[@doerr.etal2012]] suggest to use the gravity model in their model for identifying wholesalers who distribute contaminated products. They suggest incorporating additional factors like demographics (e.g., income) which influence shopping behaviors, and differentiating consumer behavior by food type (e.g. people are willing to travel longer distances to shop for exotic food at a specialty shop as opposed to ordinary goods such as dairy products)

@hu.etal2016a use a gravity model for their first set of experiments. @hu.etal2016 suggest additionally that retailers could leverage their customer address information from loyalty or membership card programs to get empirical data and create a more precise spatial model. 

