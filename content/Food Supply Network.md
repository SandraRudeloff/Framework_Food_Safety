---
Type:
  - Entity
  - pre-collectable data
Category:
  - traceback data
  - logistic data
Linked_to_Framework?: true
---
Food Distribution Networks are structured as nodes and links representing the flow of food from production to end-consumer consumption. These networks are essential for [[8 (Source Estimation)|tracing]] contaminations back to their sources. Before it is actually used, the ability of a network structure to support accurate source identification (traceability) should be measured @lu.etal2019

Because exact, fine-grained data on subnational supply networks of food commodities are often not available, trade structures may also be modeled based on production locations, population centers, and storage and transport infrastructure. 

@balster2018
- Model: Dynamic multi-scale multi-regional input–output (MSMRIO) model
- Details: Covers 51 commodity groups from farm to fork and differentiates among three temperature ranges plus living animals.
- Geographical Scope: Encompasses 402 regions within Germany and 50 major trading nations.
- Functionality: Determines commodity flows using 
	- available production and consumption statistics provide the inputs at the origins and the outputs at the destinations of the flow network
	-  flows from origin to destination are then estimated using gravity models, calibrated with data on cross-regional, cross-sectorial trade flows coming from a national transport survey through an iterative, mass-balanced optimization algorithm

@lin.etal2019
- Model: Subnational food-flow model using machine learning
- Details: 7 aggregated commodity categories
- Geographical Scope: encompasses 3,142 countries in the United States
- Functionality: A supervised machine learning approach involving logistic and gamma regression is incorporated to train the model to ensure that the properties of the estimated networks follow known structural properties of observed empirical food-flow network

# Methods that use (part) of the Model
There is multiple publications that use (part of) the food distribution network. All of them assume the contaminated item is identified, so the network only needs to be given for this food item. 

- [[7a (Likelihood-Based Method)]] to identify wholesaler given a food type (network for the food type)
- [[8 (Source Estimation)]] to estimate the source (production site) of an outbreak

# Additional Data Sources for building a food Supply Network
[IBM Food Trust](https://www.ibm.com/products/supply-chain-intelligence-suite/food-trust)
- Technology: Utilizes blockchain to provide a secure, permanent record of food system data including the history and current location of items, as well as associated data like certifications and temperature records
- Scope: producers, suppliers, manufacturers, and retailers
- Implementation: Currently used by major global companies such as Walmart and Carrefour, enhancing traceability and compliance with food safety regulations
  https://www.linkedin.com/pulse/digital-transformation-how-carrefour-enhance-food-ibm-mohamed-hassan/

Potential Data Source: https://www.importgenius.com/ (tracks shipping activity around the world to show you exactly what’s happening in the import-export business)