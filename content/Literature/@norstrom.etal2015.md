---
Title: "An Adjusted Likelihood Ratio Approach Analysing Distribution of Food Products to Assist the Investigation of Foodborne Outbreaks"
aliases: 
- An Adjusted Likelihood Ratio Approach Analysing Distribution of Food Products to Assist the Investigation of Foodborne Outbreaks
- An adjusted likelihood ratio approach analysing distribution of food products to assist the investigation of foodborne outbreaks
- Norström et al., 2015
- Norström et al. (2015)
zotero_link: zotero://select/library/items/ANDT9TRB
Citekey: norstrom.etal2015
Authors:
- Madelaine Norström
- Anja Bråthen Kristoffersen
- Franziska Sophie Görlach
- Karin Nygård
- Petter Hopp
URL: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4523185
Year:  2015
itemType: journalArticle
Journal: "[[PLOS ONE]]"
Volume: 10
Issue: 8 
Pages: e0134344
DOI: 10.1371/journal.pone.0134344
related: 
- "[[@deng.etal2021]]"
- "[[@hu.etal2016a]]"

---
**[An Adjusted Likelihood Ratio Approach Analysing Distribution of Food Products to Assist the Investigation of Foodborne Outbreaks](zotero://select/library/items/VTUI7J88)**
**tags**::%% begin tags %%%% end tags %%

> [!Abstract]- 
**Abstract::** In order to facilitate foodborne outbreak investigations there is a need to improve the methods for identifying the food products that should be sampled for laboratory analysis. The aim of this study was to examine the applicability of a likelihood ratio approach previously developed on simulated data, to real outbreak data. We used human case and food product distribution data from the Norwegian enterohaemorrhagic Escherichia coli outbreak in 2006. The approach was adjusted to include time, space smoothing and to handle missing or misclassified information. The performance of the adjusted likelihood ratio approach on the data originating from the HUS outbreak and control data indicates that the adjusted approach is promising and indicates that the adjusted approach could be a useful tool to assist and facilitate the investigation of food borne outbreaks in the future if good traceability are available and implemented in the distribution chain. However, the approach needs to be further validated on other outbreak data and also including other food products than meat products in order to make a more general conclusion of the applicability of the developed approach.

# Notes
%% begin notes %%
**Goal:** 
- methodological extension of the approach to include time, consumer mobility and noise
- assessing the applicability of the likelihood-based approach on real outbreak data from the Norwegian [[Escherichia coli]] outbreak in 2006 where a specific food product unit responsible for a foodborne outbreak shall be identified
## Input
**Food Product Data**
Detailed records of food products distributed, including batch, and lot information, delivery and expiry dates, and the geographical distribution to municipalities

**Units analyzed**
- Products: Three types of fermented sausages
- Batches: 85 distinct production batches
- Lots: 51 different lots
-> Total Food Product Units: 139

**Definitions:**
- Batch: Production of a single type of sausage beginning on a specific date made as one unit, undergoing fermentation for several weeks.
- Lot: A specific quantity of sausage sliced on a designated date from one or more batches and put into consumer packages

## Methodological Extension and Additional Input Data
1. **Time-Related Data**
	- Case Exposure Interval: Defined by the onset of illness and the incubation period of the pathogen
	- Consumption Interval for Deliveries:  delivery date to the expiry date of the product
	- only products where consumption and exposure timeframe overlap were further considered
1. **Consumer Mobility** (smoothing of case consumption area)
	- Assumptions on Food Purchase Locations: Unlike the assumption in [[@kaufman.etal2014]] that the region of purchase is equal to the region of consumption, this study uses questionnaire data to account for actual consumer behavior, including food purchases outside the residential area.
	- Data Handling for Missing Information: When direct data from questionnaires were unavailable, probable purchase patterns in neighboring municipalities were inferred to impute missing data.
2. **Handling of Noise in Data**
	- include a small background frequency to account for incorrectly allocated cases or geographically misclassified cases. 
## Model Performance and Dependencies
- Effectiveness: The refined model performed effectively in identifying the probable sources during the analyzed outbreak.
- Data Dependency: The utility of this approach relies heavily on the availability of detailed, accurate data and good traceability systems within the food distribution chain. Without such data, the model's applicability is limited.
%% end notes %%

# Open Questions
> [!Question] %% begin questions %%%% end questions %%
>

%% Import Date: 2024-05-25T10:57:07.222+02:00 %%
