---
Title: "A Gravity-Based Food Flow Model to Identify the Source of Foodborne Disease Outbreaks"
aliases: 
- A Gravity-Based Food Flow Model to Identify the Source of Foodborne Disease Outbreaks
- A gravity-based food flow model to identify the source of foodborne disease outbreaks
- Schlaich et al., 2020
- Schlaich et al. (2020)
zotero_link: zotero://select/library/items/BYJUAU7X
Citekey: schlaich.etal2020
Authors:
- Tim Schlaich
- Abigail L. Horn
- Marcel Fuhrmann
- Hanno Friedrich
URL: https://www.mdpi.com/1660-4601/17/2/444
Year:  2020
itemType: journalArticle
Journal: "[[International Journal of Environmental Research and Public Health]]"
Volume: 17
Issue: 2 
Pages: 444
DOI: 10.3390/ijerph17020444
related: 
- "[[worldhealthorganizationwho2015]]"
- "[[deng.etal2021]]"
- "[[dewey-mattia.etal2017]]"
- "[[scallan.etal2011]]"
- "[[huff1963]]"
- "[[ravel.etal2009]]"
- "[[marvin.etal2017]]"
- "[[kaufman.etal2014]]"
- "[[manitz.etal2014]]"

---
**[A Gravity-Based Food Flow Model to Identify the Source of Foodborne Disease Outbreaks](zotero://select/library/items/VS8FKKK7)**
**tags**::%% begin tags %%%% end tags %%

> [!Abstract]- 
**Abstract::** Computational traceback methodologies are important tools for investigations of widespread foodborne disease outbreaks as they assist investigators to determine the causative outbreak location and food item. In modeling the entire food supply chain from farm to fork, however, these methodologies have paid little attention to consumer behavior and mobility, instead making the simplifying assumption that consumers shop in the area adjacent to their home location. This paper aims to fill this gap by introducing a gravity-based approach to model food-flows from supermarkets to consumers and demonstrating how models of consumer shopping behavior can be used to improve computational methodologies to infer the source of an outbreak of foodborne disease. To demonstrate our approach, we develop and calibrate a gravity model of German retail shopping behavior at the postal-code level. Modeling results show that on average about 70 percent of all groceries are sourced from non-home zip codes. The value of considering shopping behavior in computational approaches for inferring the source of an outbreak is illustrated through an application example to identify a retail brand source of an outbreak. We demonstrate a significant increase in the accuracy of a network-theoretic source estimator for the outbreak source when the gravity model is included in the food supply network compared with the baseline case when contaminated individuals are assumed to shop only in their home location. Our approach illustrates how gravity models can enrich computational inference models for identifying the source (retail brand, food item, location) of an outbreak of foodborne disease. More broadly, results show how gravity models can contribute to computational approaches to model consumer shopping interactions relating to retail food environments, nutrition, and public health.

# Notes
%% begin notes %%
## Source 47: Mobility survey data provided by the Federal Ministry of Transportation and Digital Infrastructure
- Source 47: [Mobilität in Deutschland - Wissenschaftlicher Hintergrund (mobilitaet-in-deutschland.de)](https://www.mobilitaet-in-deutschland.de/archive/index.html)
> The most recent mobility survey, Mobilität in Deutschland 2017, encompasses about 316,000 individuals from 156,000 households across Germany. Their mobility patterns are gathered into almost 1 million trips For the purpose of our analysis, only trips between consumers’ homes and supermarkets were extracted. After data processing 78,754 shopping trips yield a mean distance of $\bar{x}$ = 4.65 km

> [!INFO] The data is not specifically for this case
> - The data is not specific to Hamburg and also includes all kinds of shopping trips (e.g. also for furniture or clothes)

> [!INFO] 4.65km might be unrealistically high
>  - The higher the distance, the fuzzier the tracing algorithm will become, because there are many other supermarkets in between  

%% end notes %%

# Open Questions
> [!Question] %% begin questions %% Extraction of the empirical mean shopping distance
> (1) What were the exact filtering criteria? 
> (2) How is shopping defined (groceries, clothes, furniture,….)?
> (3) Is there a distinction between rural and urban and if so what are the criteria?%% end questions %%

# Annotations
> [!NOTE]- Annotation colors
> ![[../Literature/Annotation Colors]]

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> individual store characteristics and exact distances between consumer and supermarket are lost
> ([page 4](zotero://open-pdf/library/items/VS8FKKK7?page=4&annotation=637NHGW9))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> x = 4.65 km yield a mean
> ([page 7](zotero://open-pdf/library/items/VS8FKKK7?page=7&annotation=G9NG8FXN))

<u>Image</u>
![[Attachements/zotero/schlaich.etal2020/image-7-x99-y252.png|400]]
> ([page 7](zotero://open-pdf/library/items/VS8FKKK7?page=7&annotation=LWPA7SQZ))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> absolute flows are transformed into probabilistic flows
> ([page 8](zotero://open-pdf/library/items/VS8FKKK7?page=8&annotation=3C8LR4W2))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> To only consider meaningful trade flows, we define a retailer zone and consumer zone as “connected” whenever flows are greater than a defined percentage threshold. We set three thresholds at 0, 5, and 10 percent, where the 0 percent threshold means that all trade flows are considered
> ([page 8](zotero://open-pdf/library/items/VS8FKKK7?page=8&annotation=UC9AP75T))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> A specific example is provided in the context of identifying the retailer brand that caused an outbreak of foodborne disease. Identifying the retailer brand source of an outbreak is an investigation scenario that occurs when a contaminated batch of food items is primarily distributed across supermarkets of one retail brand. This scenario occurs frequently due to the fact that 40 percent of food retail sales are generated with private labels that are proprietary to specific brands [51].
> ([page 10](zotero://open-pdf/library/items/VS8FKKK7?page=10&annotation=L2UHUSEY))

<span style="border-bottom: 2px solid #a28ae5;">Reference to Read</span>
> 20. Hyman, G.M. The Calibration of Trip Distribution Models. Environ. Plan. 1969, 1, 105–112. [CrossRef] <br />
21. Furness, K.P. Time Function Iteration. Traffic Eng. Control 1965, 7, 458–460
> ([page 19](zotero://open-pdf/library/items/VS8FKKK7?page=19&annotation=6JHA2BCK))
- *Comment*: Calibration of gravity model

<span style="border-bottom: 2px solid #a28ae5;">Reference to Read</span>
> 22. Huff, D.L. A Probabilistic Analysis of Shopping Center Trade Areas. Land Econ. 1963, 39, 81. [CrossRef]
> ([page 19](zotero://open-pdf/library/items/VS8FKKK7?page=19&annotation=RWR3NI66))
- *Comment*: In its initial form, the model calculates patronage probabilities depending on store size and travel distance

<span style="border-bottom: 2px solid #a28ae5;">Reference to Read</span>
> 23. Nakanishi, M.; Cooper, L. Parameter Estimation for a Multiplicative Competitive Interaction Model—Least <br />
Squares Approach. J. Mark. Res. 1974, 11, 303–311. [CrossRef] <br />
24. Bawa, K.; Ghosh, A. A Model of Household Grocery Shopping Behavior; Springer: Berlin, Germany, 1999; <br />
Volume 10. <br />
25. De Beule, M.; Van den Poel, D.; Van de Weghe, N. An Extended Huff-Model for Robustly Benchmarking and <br />
Predicting Retail Network Performance. Appl. Geogr. 2014, 46, 80–89. [CrossRef] <br />
26. Baviera-Puig, A.; Buitrago-Vera, J.; Escriba-Perez, C. Geomarketing Strategies in Supermarkt Location <br />
Strategies. J. Bus. Econ. Manag. 2016, 17, 1205–1221. [CrossRef]
> ([page 19](zotero://open-pdf/library/items/VS8FKKK7?page=19&annotation=HJZGUIV9))
- *Comment*: Further studies have extended the model so that it can take multiple objective and subjective factors on consumer and retailer side into account


%% Import Date: 2024-05-24T10:32:36.795+02:00 %%
