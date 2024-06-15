---
Title: "A Likelihood-Based Approach to Identifying Contaminated Food Products Using Sales Data: Performance and Challenges"
aliases: 
- A Likelihood-Based Approach to Identifying Contaminated Food Products Using Sales Data: Performance and Challenges
- A likelihood-based approach to identifying contaminated food products using sales data: performance and challenges
- Kaufman et al., 2014
- Kaufman et al. (2014)
zotero_link: zotero://select/library/items/UA85NIBQ
Citekey: kaufman.etal2014
Authors:
- James Kaufman
- Justin Lessler
- April Harry
- Stefan Edlund
- Kun Hu
- Judith Douglas
- Christian Thoens
- Bernd Appel
- Annemarie Käsbohrer
- Matthias Filter
URL: https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003692
Year:  2014
itemType: journalArticle
Journal: "[[PLOS Computational Biology]]"
Volume: 10
Issue: 7 
Pages: e1003692
DOI: 10.1371/journal.pcbi.1003692
related: 
- "[[@deng.etal2021]]"
- "[[@schlaich.etal2020]]"
- "[[@hu.etal2016a]]"
- "[[@huff1963]]"
- "[[@ickert.etal2019]]"
- "[[@lawson.etal2016]]"
- "[[@horn.friedrich2019]]"
- "[[@weiser.etal2016]]"

---
**[A Likelihood-Based Approach to Identifying Contaminated Food Products Using Sales Data: Performance and Challenges](zotero://select/library/items/5UEQ776D)**
**tags**::%% begin tags %%%% end tags %%

> [!Abstract]- 
**Abstract::** Foodborne disease outbreaks of recent years demonstrate that due to increasingly interconnected supply chains these type of crisis situations have the potential to affect thousands of people, leading to significant healthcare costs, loss of revenue for food companies, and—in the worst cases—death. When a disease outbreak is detected, identifying the contaminated food quickly is vital to minimize suffering and limit economic losses. Here we present a likelihood-based approach that has the potential to accelerate the time needed to identify possibly contaminated food products, which is based on exploitation of food products sales data and the distribution of foodborne illness case reports. Using a real world food sales data set and artificially generated outbreak scenarios, we show that this method performs very well for contamination scenarios originating from a single “guilty” food product. As it is neither always possible nor necessary to identify the single offending product, the method has been extended such that it can be used as a binary classifier. With this extension it is possible to generate a set of potentially “guilty” products that contains the real outbreak source with very high accuracy. Furthermore we explore the patterns of food distributions that lead to “hard-to-identify” foods, the possibility of identifying these food groups a priori, and the extent to which the likelihood-based method can be used to quantify uncertainty. We find that high spatial correlation of sales data between products may be a useful indicator for “hard-to-identify” products.

# Notes
%% begin notes %%
**Input:** 
- raw food sales data 
	- retail sales data from stores of a german food retailer 
	- list the weekly sales of 580 anonymous food products 
	- aggregation of sales data per postal zone and product over the three year period
- "contaminated" regions

**Output**: Likelihood for each product of being the contaminated food item 

**Method:** 
- relate reported outbreak locations with the spatial patterns of sales of  products sold in retail supermarkets. Food items with sales patterns more closely resembling the outbreak distribution are deemed likely to be the causative food vehicle
- product is consumed in the region where it was bought and it is likely to cause an outbreak in the same region. Hence, food items with a high relative share of sales in these areas compared to other areas are more likely to be contaminated and thus the cause of the outbreak
%% end notes %%

# Open Questions
> [!Question] %% begin questions %%%% end questions %%
>

# Annotations
> [!NOTE]- Annotation colors
> ![[../Literature/Annotation Colors]]

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> Lab-based analytical methods frequently provide the ‘‘gold standard’’ in verifying the source of foodborne illness outbreaks.
> ([page 1](zotero://open-pdf/library/items/5UEQ776D?page=1&annotation=NK9I9B3B))

# Zotero Notes

> [!NOTE] Note 1 
> Main Message: Maximum-likelihood Approach
>  
>  ## Methods
>  
>  ### Food Sales Data
>  
>  $f_s(n,r)=\frac{sales(n,r)}{\sum_{\hat{r}\in R} sales(n,\hat{r})}$ probability that product $n$ is _sold_ in region $r$
>  
>  - $sales(n,r)$ Number of units of food product $n$ sold in region $r$
>  - $R$: set of all regions included in the analysis
>  
>  ### Outbreak Pattern Generation
>  
>  $f_c(n,r)=f_s(n,r)$ probability that product $n$ is _consumed_ in region $r$
>  
>  discrete probability mass function
>  
>  $\sum_{r\in R} f_c(n,r) = 1$
>  
>  Summed up over all regions the product must be completely consumed
>  
>  - Outbreaks are sampled using A. J. Walker's alias method  
>      _Walker, A. J. (1977). An efficient method for generating discrete random variables with general distributions. ACM Transactions on Mathematical Software (TOMS), 3(3), 253-256._
>  
>  ### Identifying Implicated Products
>  
>  **_The likelihood based methods_**
>  
>  $\{R\}$: outbreak (set of locations of all reported cases there $r_{i}$ is the location of the $i^{th}$ case
>  
>  $\Theta_k = \begin{cases} 1 & product\: k\: is \: contaminated \\ 0 & otherwise \end{cases}$
>  
>  $\Theta$ parameter vector of lentgh N
>  
>  single contaminated product in a given outbreak: only one element of $\Theta = 1$
>  
>  $\mathcal{L}(\Theta_k)\propto \prod_{i=1..m} f_c(k,r_i)=P_k(m)$
>  
>  Likelihood of $\Theta_k$ after observing $m$ case reports
>  
>  $f_c(k,r_i)$: probability that an individual living in location $r_i$ consumed product $k$
>  
>  ## [Pair-wise Spearman's rank correlation method](obsidian://open?vault=Sandi's%20Vault&file=3.%20Zettelkasten%20Cards%2FPair-wise%20Spearman's%20rank%20correlation%20method)
>  
>  $sales(k)$: vector with the length of # of regions, each elements represents the total number of units of product _k_ sold in a given location
>  
>  $outbreak(R)$: vector with the length of # of regions, each element represents the number of times a location was drawn in R
>  
>  $P_k(m)=\begin{cases} cor[rank(sales(k)), rank(outbreak(R))] & cor\geq 0\\ 0 & cor\leq0 \end {cases}$
>  
>  normalization: $\bar{P}k(m)=\frac{P_k(m)}{\sum{j=1...N}P_j(m)}$
>  
>  ## Performance Estimation
>  
>  - Success Rate: $A_{x,m}=\frac{\sum_{s=1..S}f_{max}(\hat{P}(x,m,s),x)}{S}$
>  
>  This is to identify whether the simulated contaminated product ranked 1st - x: contaminated product - N: # of products - M: # of synthetic case reports - S: # of randomly seeded runs - $f_{max}(\hat{v}, i)$ function that return 1 if the index of maximum element in vector v is i, if not it returns 0
>  
>  - Second Statistics based on ROC This is to determine whether the simulated contaminated product is in set with a number of products maximal to the threshold t
>      
>      - **[ROC (receiving operating characteristics)](https://en.wikipedia.org/wiki/Receiver_operating_characteristic)**
>          
>          - graphical plot that illustrates the diagnostic ability of a binary classifier (classifying elements of a set into 2 groups on the basis of a classification rule) system as its discrimination threshold is varied.
>          - The ROC curve is created by plotting the true-positive rate (TPR) against the false-positive rate (FPR) at various threshold settings.
>          - True positive rate = sensitivity, recall or probability of detection in machine learning
>          - False-positive rate = probability fo false alarm (1- specificity)
>          - ROC analysis provides tools to select possibly optimal models and to discard sub-optimal ones independently from (and prior to specifying) the cost context or the class distribution. ROC analysis is related in a direct and natural way to cost/benefit analysis of diagnostic decision making.
>          - To summarize: If used correctly, ROC curves are a very powerful tool as a statistical performance measure in detection/classification theory and hypothesis testing, since they allow having all relevant quantities in one plot
>      - $TPR_{x,m}=\frac{\sum_{s=1..S}\frac{\bar{P}_x(x,m,s)}{max(\bar{P}(x,m,s))}\geq t}{S}$
>      
>      —> Generate the AUC statistics
>      
>  - optimal discrimination threshold to maximize both the selectivity and specificity
>  - Dependence of method's performance of the "structural" properties of the sales data distribution
>      
>      - predict which food/food groups might be hard to pinpoint in the event of an outbreak
>      - high degree of similarity between the distribution patterns of the food products under investigation and the spatial pattern of the contaminated product implies that it is difficult to correctly identify the causative food item
>      
>      —> correlation matrix (pair-wise Spearman's correlation coefficient matrix, heat map) and hierarchical clustering algorithms
>      
>  
>  ## Result
>  
>  - [c] highly correlated food product distributions are associated with products that are harder to uidentify
>  
>  ## Assumptions & Limitations
>  
>  - Products are independent —> in fact 2 products with different local "brands" or "ids" could in fact be the same food item simply rebranded when repackaged locally —> a product sold on a national scale under one single brand could become contaminated at a single point of sale retail site (e.g. a butcher shop)
>  - food is consumed where it is sold —> in fact people travel (this is lifter by ([Schlaich et al., 2020](zotero://select/library/items/BYJUAU7X))
>  - people only consume products from 1 store
>  - Only 1 product is contaminated —> in practice multiple products may be contaminated by a single food ingredient



%% Import Date: 2024-05-25T10:57:07.160+02:00 %%
