---
Type:
  - Relation
Category: []
Linked_to_Framework?: true
---
- [[@doerr.etal2012]] developed the likelihood-based method to identify wholesalers involved in distributing contaminated food given the contaminated food type, its [[Food Supply Network]] and a set of case reports
- [[@kaufman.etal2014]] applied this model to real [[Retail Sales Data]] in Germany to pinpoint contaminated products, not wholesalers. 
- @norstrom.etal2015 refined this approach by considering time, consumer mobility, and noise and apply it to the 2006 Norwegian [[Escherichia coli|E. coli]] outbreak. 
	- Focused on identifying specific products down to the brand, batch, and lot, using detailed product data
	- Relied on more granular data (lots, batches, expiry dates) and questionnaire responses compared to previous studies 
- @hu.etal2016 operationalize this model within a comprehensive framework that included a 
	- food distribution model
	- outbreak generator
	- statistical analytics component
		- introduces several new metrics for the model that improve the monitoring of the performance and enables comparison of models and methodologies. 
	- splitting the system into three parts allows to upload new datasets easily and improves the exchangeability of single components.
- @hu.etal2016a demonstrate the utility of the developed framework in 2 experimental setups
	- first setup similar to the intention of [[@doerr.etal2012]]
		- real census data from Berlin
		- real grocery store locations
		- modeled assignment of distributors to retail stores (scale-free network simulation)
		- modeled shopping probability (Huff's gravity model)
	- second setup according to [[@kaufman.etal2014]], incorporating new metrics


| **Publication**       | **Method Used**                                    | **Data Inputs**                                                                             | **Outputs**                                                                                                 |
| --------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [[@doerr.etal2012]]       | Likelihood-based approach (LBA)                    | Synthetic food sales data, synthetic outbreak data                                          | Identification of wholesalers likely involved in distributing contaminated food                             |
| [[@kaufman.etal2014]] | Likelihood-based approach (LBA)                    | Real food sales data from Germany, artificial outbreak scenarios                            | Identification of specific contaminated food products; comparison of LBA with Spearman’s correlation method |
| @norstrom.etal2015    | Adjusted Likelihood Ratio Approach                 | Real outbreak data, consumption and exposure intervals, shopping habits from questionnaires | Adjustment for time, space, and data errors; refined predictions of contaminated products                   |
| @hu.etal2016          | Framework embedding LBA with statistical analytics | Food distribution models, outbreak generator, various metrics for performance monitoring    | Operational framework that supports data integration and methodology comparison                             |
| @hu.etal2016a         | Application of framework in experimental settings  | Artificial networks of food supply chain, new performance metrics                           | Demonstration of accelerated foodborne illness investigation                                                |
![[Overview Item Identification.png|1500]]

