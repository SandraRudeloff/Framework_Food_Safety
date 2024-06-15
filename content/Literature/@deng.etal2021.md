---
Title: "Emerging Applications of Machine Learning in Food Safety"
aliases: 
- Emerging Applications of Machine Learning in Food Safety
- Emerging applications of machine learning in food safety
- Deng et al., 2021
- Deng et al. (2021)
zotero_link: zotero://select/library/items/9XSFCNC8
Citekey: deng.etal2021
Authors:
- Xiangyu Deng
- Shuhao Cao
- Abigail L Horn
Year:  2021
itemType: journalArticle
Journal: "[[Annual review of food science and technology]]"
Volume: 12 
Pages: 513-538
DOI: 10.1146/annurev-food-071720-024112
related: 
- "[[@zhang.etal2019]]"
- "[[@norstrom.etal2015]]"
- "[[@schlaich.etal2020]]"
- "[[@scallan.etal2011]]"
- "[[@tao.etal2020]]"
- "[[@kaufman.etal2014]]"
summary: "The article not only discusses the emerging applications of machine learning in food safety but also offers a comprehensive overview of machine learning techniques in general. It highlights the potential of machine learning in leveraging large datasets to enhance food safety, particularly in identifying and mitigating foodborne pathogens and incidents. The paper explores the use of foodborne pathogen genomes and novel data streams, including text, transactional, and trade data, in food safety applications. Key areas discussed include the prediction of antibiotic resistance, source attribution of pathogens, and foodborne outbreak detection and risk assessment."
---
**[Emerging Applications of Machine Learning in Food Safety](zotero://select/library/items/35U6EBBW)**
**tags**::%% begin tags %%%% end tags %%

> [!Abstract]- 
**Abstract::** Food safety continues to threaten public health. Machine learning holds potential in leveraging large, emerging data sets to improve the safety of the food supply and mitigate the impact of food safety incidents. Foodborne pathogen genomes and novel data streams, including text, transactional, and trade data, have seen emerging applications enabled by a machine learning approach, such as prediction of antibiotic resistance, source attribution of pathogens, and foodborne outbreak detection and risk assessment. In this article, we provide a gentle introduction to machine learning in the context of food safety and an overview of recent developments and applications. With many of these applications still in their nascence, general and domain-specific pitfalls and challenges associated with machine learning have begun to be recognized and addressed, which are critical to prospective use and future deployment of large data sets and their associated machine learning models for food safety applications.

# Notes
%% begin notes %%
## Genomic Source Attribution of Foodborne Pathogens
> According to the Centers for Disease Control and Prevention, approximately 95% of foodborne illnesses in the United States are sporadic, non-outbreak cases whose food exposure and contamination source are challenging to determine. 

### Zoonotic source attribution
- [@zhang.etal2019] applied a random forest classifier to [[Zoonoses|zoonotic]] source attribution of [[Salmonella]] Typhimurium using genomic surveillance data in the United States 
	- training data: 1,200 genomes that had been collected from human cases and zoonotic sources between 1949 and 2014
	- the classifier predicts with 83% accuracy bovine, poultry, swine and wild bird sources
	- The authors attempted to explain machine learning predictions through biological interpretation of the results
		1. **Phylogenetic Analysis**: Creating a DNA-based 'family tree' showing the bacteria's steady genetic mutations in livestock, indicating adaptation to farming environments.
		2. **Genomic Investigation**: Focused on pseudogenes in the DNA, suggesting that certain Salmonella strains have evolved specifically for animal hosts.
		3. **Metabolic Profiling**: Examined how some Salmonella strains have altered their nutrient processing to survive in specific animals.
- [@lupolova.etal2019]: technical review and comparative study of different machine learning models for host prediction and statistical methods for feature selection 
- [@guillier.etal2020] streamlined zoonotic source attribution of Salmonella Typhimurium by using accessory genes alone as features and developed a software pipeline accordingly
- [@munck.etal2020a]: assembled 4 European genome data sets for developing genomic source attribution tools
- [@munck.etal2020]: reported a logistic boost model using core genome multilocus sequencing typing as input to achieve accurate zoonotic attribution of Salmonella Typhimurium in Denmark 

## Novel Data Streams
**Novel Data streams (NDS):** Data streams that are collected passively through user-initiated content and not designed with the specific intention of supporting food safety applications and thus not already maintained by public health of food safety authorities. 
In contrast: primary data generated specifically for food safety or tracking purposes
- biological/chemical monitoring data 
- livestock data
- inspection data
- alert and recall data
- outbreak surveillance data 
- proprietary company supply-chain track and -trace data
- genomic data 

### Text Data
Mainly used to identify outbreaks otherwise missed and/or locations where an outbreak has occurred or is occurring.

Sources of novel data streams text data that have been applied together with machine learning techniques in food safety applications can be categorized into user-generated public post data and web-based data. 

#### Text data from user-generated posts
1. posts made on social media networking sites such as
    - Twitter
        - Devinney et al. 2018, Harris et al. 2017
        - [@harrison.etal2014]
        - Kuehn et al. 2014
        - Sadilek et al 2017
    - Facebook
2. crowdsources consumer review sites such as
    - Yelp
        - [@effland.etal2018]
        - [@nsoesie.etal2014]
        - Schomberg et al., 2016
    - Amazon
        - [@maharana.etal2019]
3. participatory systems
    - IWasPoisoned.com [@quade.nsoesie2017]

Post data may also include proprietary content such as company message and feedback boards, user forums and blogs [@kate.etal2014a] and query data such as Google search history ([@sadilek.etal2018]
#### Web data sources
articles in the news media and academic or professional organization websites  
Chen et al. 2016, [@kate.etal2014a]

**Reviews:**
- consumer-generated data for foodborne illness surveillance [@oldroyd.etal2018]
- general use of text data in food science: [@tao.etal2020]


### Transactional data
- conventional epidemiological investigation processes involve patient interviews to identify commonalities across case patients followed by microbiological tests on suspected samples [@smith.etal2015; @worldhealthorganizationwho2008]

- transactional data provide an objective history of consumption records that have been demonstrated to support, complement and even supplement conventional investigation techniques in generating hypotheses about the causative food vehicle at early stages of an investigation, and or to identify the location of contamination in retail or restaurants or elsewhere in the supply chain

1. **Individual consumer checkout data** collected from know case-patients or businesses where contaminated food is thought to have been purchased, including individual barcode scanner receipts and loyalty card, credit card and employee access card history [@moller.etal2018]
    - **Methods**: standard statistical techniques to compare purchase records across individuals to identify commonalities, e.g. odds ratios to compare histories from case-patients with control groups of shoppers
    - Data records must be collected on an individual basis -> no automation and machine learning techniques
2. **Aggregated Sales Data:** aggregated store-based or spatially aggregated retail sales or loyalty card data
    - Likelihood-based approach:  determine the contaminated food item that caused an outbreak by relating reported outbreak locations with the spatial patterns of sales of hundreds of individual products sold in retail supermarkets [@hu.etal2016; @kaufman.etal2014]
        Food items with sales patterns more closely resembling the outbreak distribution are deemed likely to be the causative food vehicle
        - Method:
            - Product Identification: probability model of sales and maximum-likelihood estimation to identify a set of the most likely contaminated food products (theory-driven probability model)
            - Accuracy characterization: binary classification learning methods to characterize the accuracy of the approach and learn structure in its performance
            - unsupervised clustering algorithms to identify similar product distribution patterns to identify groups of food products that cannot be distinguished and may confound investigations
        - evaluation of the model using synthetic foodborne outbreak patterns on postal-code-aggregated weekly sales data of 580 food products in Germany
        - Approach has been expanded to account for time, consumer mobility, and noise and applied to a real-world outbreak in Norway [@norstrom.etal2015]
### Trade Data

%% end notes %%

# Open Questions
> [!Question] %% begin questions %%%% end questions %%
>

# Annotations
> [!NOTE]- Annotation colors
> ![[../Literature/Annotation Colors]]

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> In 2010, the Healthy People initiative of the United States issued its 2020 vision, which designated food safety as a focus area (Koh 2010). None of the vision’s objectives for controlling six major foodborne pathogens by 2020 had been met as recently as 2019, according to surveillance data by the Foodborne Diseases Active Surveillance Network (FoodNet) (Table 1)
> ([page 2](zotero://open-pdf/library/items/35U6EBBW?page=514&annotation=JMKX5GSU))

<u>Image</u>
![[Attachements/zotero/deng.etal2021/image-2-x111-y55.png|400]]
> ([page 2](zotero://open-pdf/library/items/35U6EBBW?page=514&annotation=4GXVZUZJ))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> According to the Centers for Disease Control and Prevention, approximately 95% of foodborne illnesses in the United States are sporadic, non-outbreak cases whose food exposures and contamination sources are challenging to determine
> ([page 11](zotero://open-pdf/library/items/35U6EBBW?page=11&annotation=87GCQ7ZK))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> understanding of zoonotic host specificity and tropism is still limited.
> ([page 11](zotero://open-pdf/library/items/35U6EBBW?page=11&annotation=HUW7RGRX))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> source association is a more complex phenomenon shaped by an interplay of bacterial, host, and environmental variables
> ([page 12](zotero://open-pdf/library/items/35U6EBBW?page=12&annotation=W9QPIT4V))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> MedISys system of the European Commission (Rortais et al. 2010)
> ([page 16](zotero://open-pdf/library/items/35U6EBBW?page=16&annotation=C99UXQRW))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> Conventional epidemiological investigation processes involve patient interviews to identify commonalities across case patients followed by microbiological tests on suspected samples (Smith et al. 2015, World Health Organ. 2008)
> ([page 16](zotero://open-pdf/library/items/35U6EBBW?page=16&annotation=DIF7BIHE))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> of individual consumer checkout data collected from known case-patients or businesses where contaminated food is thought to have been purchased, including individual barcode scanner receipts and loyalty card, credit card, and employee access card history. Since 2006, these data sets have helped to identify upward of 20 outbreak culprits (Moller et al. 2018)
> ([page 17](zotero://open-pdf/library/items/35U6EBBW?page=17&annotation=C96YXBR7))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> these applications do not lend themselves to automatization and machine learning techniques
> ([page 17](zotero://open-pdf/library/items/35U6EBBW?page=17&annotation=9WG6VWIP))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> Kaufman et al. (2014) developed an approach to determine the contaminated food item that caused an outbreak by relating reported outbreak locations with the spatial patterns of sales of hundreds of individual products sold in retail supermarkets (Hu et al. 2016). Food items with sales patterns more closely resembling the outbreak distribution are deemed likely to be the causative food vehicle.
> ([page 17](zotero://open-pdf/library/items/35U6EBBW?page=17&annotation=GPQ73FBJ))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> This approach has been expanded to account for time, consumer mobility, and noise and applied to a real-world outbreak in Norway (Norström et al. 2015).
> ([page 17](zotero://open-pdf/library/items/35U6EBBW?page=17&annotation=FW598AWM))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> approach is evaluated on recent outbreaks of foodborne disease in Germany and has been expanded to approach the problem of identifying the food vehicle source of an outbreak through a statistical learning task involving hierarchical clustering (A.  Horn, M. Fuhrmann, T. Schlaich, A. Balster, A. Kaesbohrer, M. Filter, H. Friedrich, unpublished results)
> ([page 18](zotero://open-pdf/library/items/35U6EBBW?page=18&annotation=DPE749TE))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> User attribution of foodborne illness to a specific food item or consumption location is notoriously difficult given the incubation periods of foodborne pathogens, multiplicity of consumed foods, and inaccuracies of recall (Gertler et al. 2017)
> ([page 19](zotero://open-pdf/library/items/35U6EBBW?page=19&annotation=LA95C4UD))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> Many of the methods reviewed here require machine learning in combination with principled mathematical or predictive mechanistic modeling, which introduces a structure or logic into a problem approach. Predictive modeling techniques, such as agent-based models (Zoellner et al.  2019), networks (Garre et al. 2019, Horn & Friedrich 2019, Manitz et al. 2014), and other probabilistic or simulation-based models, can be used to investigate food safety questions with limited input data and/or without a training or learning component. And in many cases, technologies that do not require advanced analytics but do require efficient information technology systems for identifying, capturing, and assimilating data in real-time are more practical in outbreak surveillance and response settings, such as the supply data input, mapping, and visualization tools deployed during the 2011 enterohemorrhagic E. coli outbreak (Weiser et al. 2013, 2016)
> ([page 19](zotero://open-pdf/library/items/35U6EBBW?page=19&annotation=5QWX2MCB))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> Loyalty cards (Aiello et al. 2019), restaurant sales, and online grocery (Huyghe et al. 2017) or delivery (Schulz et al. 2019) data sets, which have been used in consumer behavior and nutrition applications, could be applied to identify likely outbreak food vehicle sources, as Kaufman et al. (2014) pioneered using retail sales data
> ([page 20](zotero://open-pdf/library/items/35U6EBBW?page=20&annotation=4KQUTEGA))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> product-specific features (e.g., shelf life, probable consumption date, the likelihood that a particular product contains a particular pathogen
> ([page 20](zotero://open-pdf/library/items/35U6EBBW?page=20&annotation=K6SAY563))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> factors influencing the purchase of particular items (e.g., weather, holidays, or sporting events)
> ([page 20](zotero://open-pdf/library/items/35U6EBBW?page=20&annotation=ZTWXZH2B))
- *Comment*: This means that maybe eine Gans is more likely to cause the outbreak at Christmas (seasonality)

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> Krumme et al. 2013, Singh et al. 2015)
> ([page 20](zotero://open-pdf/library/items/35U6EBBW?page=20&annotation=62Y939R3))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> et al. 2020)
> ([page 20](zotero://open-pdf/library/items/35U6EBBW?page=20&annotation=KSSG7VR2))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> Sadilek et al. 2017)
> ([page 20](zotero://open-pdf/library/items/35U6EBBW?page=20&annotation=Q8IZK6JM))

<span style="border-bottom: 2px solid #ffd400;">Quote</span>
> (Dallman et al. 2016)
> ([page 20](zotero://open-pdf/library/items/35U6EBBW?page=20&annotation=2FP6VXQK))


%% Import Date: 2024-05-25T10:55:24.335+02:00 %%
