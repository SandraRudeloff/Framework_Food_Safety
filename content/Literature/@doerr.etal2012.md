---
Title: "Accelerating investigation of food-borne disease outbreaks using pro-active geospatial modeling of food supply chains"
aliases: 
- Accelerating investigation of food-borne disease outbreaks using pro-active geospatial modeling of food supply chains
- Accelerating investigation of food-borne disease outbreaks using pro-active geospatial modeling of food supply chains
- Doerr et al., 2012
- Doerr et al. (2012)
zotero_link: zotero://select/library/items/55FRPRL8
Citekey: doerr.etal2012
Authors:
- Daniel Doerr
- Kun Hu
- Sondra Renly
- Stefan Edlund
- Matthew Davis
- James H. Kaufman
- Justin Lessler
- Matthias Filter
- Annemarie Käsbohrer
- Bernd Appel
URL: https://dl.acm.org/doi/10.1145/2452516.2452525
Year:  2012
itemType: journalArticle
Journal: "[[Proceedings of the First ACM SIGSPATIAL International Workshop on Use of GIS in Public Health]]" 
Pages: 44-47
DOI: 10.1145/2452516.2452525

---
**[Accelerating investigation of food-borne disease outbreaks using pro-active geospatial modeling of food supply chains](zotero://select/library/items/MSCQFEGG)**
**tags**::%% begin tags %%%% end tags %%

> [!Abstract]- 
**Abstract::** Over the last decades the globalization of trade has significantly altered the topology of food supply chains. Even though foodborne illness has been consistently on the decline, the hazardous impact of contamination events is larger [1-3]. Possible contaminants include pathogenic bacteria, viruses, parasites, toxins or chemicals. Contamination can occur accidentally, e.g. due to improper handling, preparation, or storage, or intentionally as the melamine milk crisis proved. To identify the source of a food-borne disease it is often necessary to reconstruct the food distribution networks spanning different distribution channels or product groups. The time needed to trace back the contamination source ranges from days to weeks and significantly influences the economic and public health impact of a disease outbreak. In this paper we describe a modelbased approach designed to speed up the identification of a food-borne disease outbreak source. Further, we exploit the geospatial information of wholesaler-retailer food distribution networks limited to a given food type and apply a gravity model for food distribution from retailer to consumer. We present a likelihood framework that allows determining the likelihood of wholesale source(s) distributing contaminated food based on geo-coded case reports. The developed method is independent of the underlying food distribution kernel and thus particularly applicable to empirical distributions of food acquisition.

# Notes
%% begin notes %%
**Goal**: likelihood-based method to identify wholesalers involved in distributing contaminated food, tested using synthetic data

## Model Inputs
### Geo-coded case reports 
to correlate locations of reported infections with points of food purchase
### Food Distribution Network

| **Data Input**                    | **Reason for Need**                                                                                                                                                                     | Link                  |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Population Density                | Represents the food demand for modeling the distribution from retailer to population. <br>-> needed to assign infection cases to retailer locations                                     | Retailer - Population |
| Consumer shopping behavior        | Uses gravity models to estimate where consumers are likely to shop based on factors like distance and store attractiveness<br>-> needed to assign infection cases to retailer locations | Retailer - Population |
| Wholesaler to Retailer connection | Includes details on how food is distributed from wholesalers to retailers                                                                                                               | Wholesaler - Retailer |


%% end notes %%

# Open Questions
> [!Question] %% begin questions %%%% end questions %%
>

%% Import Date: 2024-05-25T10:57:07.140+02:00 %%
