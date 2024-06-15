---
Type:
  - Entity
  - pre-collectable data
Category: []
Linked_to_Framework?: true
---

 > "As approaches in this area ([[#Novel methods of source attribution]]) mature, they may be applied to predict the source of food-borne disease outbreaks."
> [@wheeler2019]

# Definition
Source attribution gives information common food vehicles associated with a pathogen [[@white.etal2021]] 
## Source Attribution
> source attribution refers to a category of methods with the objective of reconstructing the transmission of an infectious disease from a specific source, such as a population, individual, or location. 
> [@chao.etal2022]

> Source Attribution methods attribute human cases caused by a foodborne disease to different sources [@mughini-gras.etal2019; @pires.etal2009]
> secondary source: [@cardimfalcao.etal2024]

> Source attribution of foodborne diseases is defined as the partitioning of the human cases caused by foodborne pathogens among their animal, food and environmental reservoirs and / or transmission routes [@pires.etal2009]
> secondary source: [@mughini-gras.etal2019]

## Source
secondary source: [@mughini-gras.etal2019] mentioning Wagenaar et al., 2015 
**Reservoirs**
For pathogens of animal origin, the animals are usually defined as reservoirs (i.e. amplifying hosts in which the pathogen normally lives and multiplies)

**Transmission Routes**
- Food
- Environment
- direct contact with animals 
- etc.

**Exposures**
- meat
- eggs 
- milk 
- etc. 

**Risk Factors**
- consumption of raw meat
- swimming in open water
- living in a farm 

# Methods for Source Attribution 
- Methods used in source attribution / to estimate the relative contribution of different food sources to human foodborne disease [[@pires.etal2014]]

**Method Choice**
- Choice of method often driven by the type and quality of available data [@cardimfalcao.etal2024]
- Depends on the type, quality and availability of data, the food safety question to be addressed and the (epidemiological and microbiological) characteristics of the pathogen in question [@mughini-gras.etal2019]

Conditions @mughini-gras.etal2019
1. be **standardized** in order to facilitate the exchange of data and the comparison of results among laboratories
2. be **automated** with a reference data set allowing for the establishment of a nomenclature within the microbial species 
3. be discriminatory at the level of the individual microorganism

**Top-Down Vs Bottom-Up** @mughini-gras.etal2019
- **top-down approach:** 
  assign the human cases (i-e. the 'top' of the transmission chain) back to their sources of infection (i.e. the 'bottom')
	- [[#1. Source Attribution Models Based on Typing methods for microorganisms Microbial Subtyping| microbiological methods]]
		- for example based on microbial subtyping: Barco, L., Barrucci, F., Olsen, J. E., and Ricci, A. (2013). Salmonella source attribution based on microbial subtyping. Int. J. Food Microbiol. 163, 193–203. doi: 10.1016/j.ijfoodmicro.2013.03.005
	- [[#2. Epidemiological Approaches| epidemiological approaches]]
	- combination of both
		- Mughini Gras, L., Smid, J. H., Wagenaar, J. A., de Boer, A. G., Havelaar, A. H., Friesema, I. H. M., et al. (2012). Risk factors for campylobacteriosis of chicken, ruminant, and environmental origin: a combined case-control and source attribution analysis. PLoS One 7:e42599. doi: 10.1371/journal.pone.0042599
		- Mughini-Gras, L., Enserink, R., Friesema, I., Heck, M., van Duynhoven, Y., and van Pelt, W. (2014b). Risk factors for human salmonellosis originating from pigs, cattle, broiler chickens and egg laying hens: a combined case-control and source attribution analysis. PLoS One 9:e87933. doi: 10.1371/journal.pone.0087933
		- Mughini-Gras, L., van Pelt, W., van der Voort, M., Heck, M., Friesema, I., and Franz, E. (2018b). Attribution of human infections with Shiga toxin-producing Escherichia coli (STEC) to livestock sources and identification of source-specific risk factors, The Netherlands (2010-2014). Zoonoses Public Health 65, e8–e22. doi: 10.1111/zph.12403
		- Mossong, J., Mughini-Gras, L., Penny, C., Devaux, A., Olinger, C., Losch, S., et al. (2016). Human campylobacteriosis in luxembourg, 2010-2013: a case-control study combined with multilocus sequence typing for source attribution and risk factor analysis. Sci. Rep. 6:20939. doi: 10.1038/srep20939
		- Rosner, B. M., Schielke, A., Didelot, X., Kops, F., Breidenbach, J., Willrich, N., et al. (2017). A combined case-control and molecular source attribution study of human campylobacter infections in germany, 2011-2014. Sci. Rep. 7:5139. doi: 10.1038/s41598-017-05227-x
- **bottom-up approach:** 
  start from the level of contamination (prevalence and concentration) of a given pathogen in each source and the go upwards in the transmission chain incorporating factors related to human exposure to these sources and dose-response relationships 
	- [[#Comparative exposure assessment]]
## 1. Source Attribution Models Based on [[Typing methods for microorganisms|Microbial Subtyping]]
reviewed in [@cardimfalcao.etal2024]
**Objective**: attribute human cases caused by a given pathogen to a number of putative sources of infection by comparing the subtypes of isolates obtained from different sources (e.g. animals, food) with those isolated from humans

Source-Specificity: identify strains that are source specific / identify strains that can discriminate among the potential sources
- Example: The Kentucky serotype of [[Salmonella]] is almost exclusively found in poultry manure, so any case found with the Kentucky strain is very likely to have originated from this reservoir 
  (not yet confirmed, but primary sources are supposed to be [@dunn.etal2022] and [@murray.etal2023])

- [!] methods attributes cases to a priori chosen sources 
  → all main potential sources must be included in the analysis with a representative and heterogeneous distribution of subtypes among these sources 
- [!] travel-related cases need to be identified and excluded as they are not due to exposure to domestically available foods 


> [!NOTE] Subtype definition
> Subtypes are usually defined by [[Phenotypic typing methods|phenotypic]] (e.g. [[Phenotypic typing methods#Serotyping / Serovar Determination|serotyping]], [[Phenotypic typing methods#Phage typing|phage typing]], and [[Phenotypic typing methods#Antibiotyping / Antibiotic Resistance Phenotyping|antimicrobial profiling]]) and/or [[Knowledge Cards/Genotypic typing methods|genotypic]] methods (e.g. [[Whole Genome Sequencing|cgMLST]] )
> 
> **Choosing the optimal discrimination power**
> subtypes should be chosen to have groups large enough to find matches between cases and sources, but not too large to penalize precision in the attribution results 
> 
> **Standardization**
> The use of a standardized subtyping method is a prerequisite 
> e.g. [[@centersfordiseasecontrolandpreventioncdc2023a|PulseNet]] is promoting standards for [[Pulsed-Field Gel electrophoresis|PFGE]] for molecular typing of foodborne pathogens

**Additional Factors Influencing Source Attribution Accuracy**
[@mughini-gras.etal2019]
1. *Representativeness of strain collections*
	- *evaluates how accurately the collected pathogen strains from sources like food, animals, and the environment, as well as from human cases, represent actual diversity and distribution of strains in nature. 
	- Inaccuracies, such as overrepresentation or omission of strains, can skew source attribution results
		- Example: disproportionate sampling of poultry compared to pork might incorrectly identify poultry as the main source, disregarding the potential equal or greater role of pork.
2. *Level of contamination of the sources*
   *(pathogen prevalence / concentration of the sources)
	- Sources with higher pathogen concentrations are generally more likely to cause human illness than those with lower concentrations even if the pathogen is found in both
3. *Degree of exposure of the population to these sources*
   e.g. amount of food consumed)
	- even if a pathogen is present in a source, the actual risk to the population depends on their exposure to that source
	- if a certain pathogen is common in a type of food that is rarely eaten or usually cooked thoroughly before consumption (reducing the pathogen's concentration), its contribution to human illness might be less significant compared to a pathogen found in a widely consumed, often raw food item
	- factors such as consumption rates, food preparation methods, cultural eating habits, and the effectiveness of food safety measures play a role in determining the actual risk

### Frequency-Matching Methods
infer probabilistically the most likely sources of human cases by comparing their subtype frequencies, weighted by factors like prevalence in these source and the human exposure to them 
❓[@cardimfalcao.etal2024]: Question whether the intrinsic and extrinsic factors might be included there already

- assume that the subtypes remain stable when passing from their (food, animal or environmental) sources to humans
#### Models
Commonly used Models in the literature are the Hald ('Danish') and 'Dutch models' 
##### Hald Model
estimating the expected number of human cases of subtype i from each source s 
- bayesian model based on serotyping and phage typing data 
- Variables
	- subtype prevalence in each source - known
	- amount of food consumed from each source - known
	- ability of each source to act as a vehicle for the pathogen in question - estimated by the model
	- ability (e.g. pathogenicity, infectious does, fitness, etc.) to cause infection of each subtype - estimated by the model
	  Example: the average number of human Salmonella enterica serotype Heidelberg infections deriving from consumption of chicken would be proportional to 
		- the prevalence of S. Heidelberg in chicken
		- the amount of chicken consumed by the population
		- the ability of chicken meat to allow for S. enterica transmission to humans
		- the ability of S. Heidelberg to cause infection in human

*Hald, T., Vose, D., Wegener, H. C., and Koupeev, T. (2004). A Bayesian approach to quantify the contribution of animal-food sources to human salmonellosis. Risk Anal. 24, 255–269. doi: 10.1111/j.0272-4332.2004.00427.x*

Several modifications have been proposed to adapt the model to
- pathogens other than Salmonella
- different epidemiological context
- different data types
	- integration of non-food sources
	- use of passive surveillance data
	- combination of source data from different monitoring systems
	- non-availability of exposure data
	- different inclusion of modalities for outbreak data
	- inclusion of both epidemiological and genetic data 
	- presence of sparse data
For references see [@mughini-gras.etal2019]
##### Dutch Model
- frequentist model 
- the number of human cases of subtype i attributable to source j is proportional to the observed number of human cases of subtype i multiplied by the probability for this subtype i of coming from source j.

*van Pelt, W., van de Giessen, A., van Leeuwen, W., Wannet, W., Henken, A., Evers, E. G., et al. (1999). Oorsprong, omvang en kosten van humane salmonellose. Deel 1. Oorsprong van humane salmonellose met betrekking tot varken, rund, kip, ei en overige bronnen. Infect. Bull. 10, 240–243.*

##### Applications of (Modified) Dutch and Hald Models
[@mughini-gras.etal2019]
###### [[Salmonella]]
- Hald, T., Vose, D., Wegener, H. C., and Koupeev, T. (2004). A Bayesian approach to quantify the contribution of animal-food sources to human salmonellosis. Risk Anal. 24, 255–269. doi: 10.1111/j.0272-4332.2004.00427.x
- Hald, T., Lo Fo Wong, D. M., and Aarestrup, F. M. (2007). The attribution of human infections with antimicrobial resistant Salmonella bacteria in denmark to sources of animal origin. Foodborne Pathog. Dis. 4, 313–326. doi: 10.1089/ fpd.2007.0002
- Mullner, P., Jones, G., Noble, A., Spencer, S. E., Hathaway, S., and French, N. P. (2009a). Source attribution of food-borne zoonoses in new zealand: a modified hald model. Risk Anal. 29, 970–984. doi: 10.1111/j.1539-6924.2009.01224.x
- Pires, S. M., and Hald, T. (2010). Assessing the differences in public health impact of salmonella subtypes using a bayesian microbial subtyping approach for source attribution. Foodborne Pathog. Dis. 7, 143–151. doi: 10.1089/fpd.2009.0369
- [@guo.etal2011]
- Wahlstrom, H., Andersson, Y., Plym-Forshell, L., and Pires, S. M. (2011). Source attribution of human Salmonella cases in Sweden. Epidemiol. Infect. 139, 12461253. doi: 10.1017/S0950268810002293
- David, J. M., Guillemot, D., Bemrah, N., Thébault, A., Brisabois, A., Chemaly, M., et al. (2013a). The Bayesian microbial subtyping attribution model: robustness to prior information and a proposition. Risk Anal. 33, 397–408. doi: 10.1111/j. 1539-6924.2012.01877.x 
- David, J. M., Sanders, P., Bemrah, N., Granier, S. A., Denis, M., Weill, F. X., et al. (2013b). Attribution of the french human salmonellosis cases to the main foodsources according to the type of surveillance data. Prev. Vet. Med. 110, 12–27. doi: 10.1016/j.prevetmed.2013.02.002
- Mughini-Gras, L., Barrucci, F., Smid, J. H., Graziani, C., Luzzi, I., Ricci, A., et al. (2014a). Attribution of human Salmonella infections to animal and food sources in Italy (2002-2010): adaptations of the dutch and modified Hald source attribution models. Epidemiol. Infect. 142, 1070–1082. doi: 10.1017/ S0950268813001829
- Mughini-Gras, L., Enserink, R., Friesema, I., Heck, M., van Duynhoven, Y., and van Pelt, W. (2014b). Risk factors for human salmonellosis originating from pigs, cattle, broiler chickens and egg laying hens: a combined case-control and source attribution analysis. PLoS One 9:e87933. doi: 10.1371/journal.pone.0087933
- Mughini-Gras, L., Smid, J., Enserink, R., Franz, E., Schouls, L., Heck, M., et al. (2014c). Tracing the sources of human salmonellosis: a multi-model comparison of phenotyping and genotyping methods. Infect. Genet. Evol. 28, 251–260. doi: 10.1016/j.meegid.2014.10.003
- Mughini-Gras, L., Heck, M., and van Pelt, W. (2016). Increase in reptile-associated human salmonellosis and shift toward adulthood in the age groups at risk, the Netherlands, 1985 to 2014. Euro. Surveill. 21:30324. doi: 10.2807/1560-7917.ES. 2016.21.34.30324
- Mughini-Gras, L., and van Pelt, W. (2014). Salmonella source attribution based on microbial subtyping: does including data on food consumption matter? Int. J. Food Microbiol. 191, 109–115. doi: 10.1016/j.ijfoodmicro.2014.09.010
- de Knegt, L. V., Pires, S. M., and Hald, T. (2015). Attributing foodborne salmonellosis in humans to animal reservoirs in the european union using a multi-country stochastic model. Epidemiol. Infect. 143, 1175–1186. doi: 10. 1017/S0950268814001903 
- de Knegt, L. V., Pires, S. M., Lofstrom, C., Sorensen, G., Pedersen, K., Torpdahl, M., et al. (2016). Application of molecular typing results in source attribution models: the case of multiple locus variable number tandem repeat analysis (MLVA) of Salmonella Isolates Obtained from integrated surveillance in denmark. Risk Anal. 36, 571–588. doi: 10.1111/risa.12483
- Vieira, A. R., Grass, J., Fedorka-Cray, P. J., Plumblee, J. R., Tate, H., and Cole, D. J. (2016). Attribution of Salmonella enterica serotype hadar infections using antimicrobial resistance data from two points in the food supply system. Epidemiol. Infect. 144, 1983–1990. doi: 10.1017/S0950268816000066
- Ahlstrom, C., Muellner, P., Spencer, S. E. F., Hong, S., Saupe, A., Rovira, A., et al. (2017). Inferring source attribution from a multiyear multisource data set of Salmonella in Minnesota. Zoonoses Public Health 64, 589–598. doi: 10.1111/zph. 12351
- Mikkela, A., Ranta, J., and Tuominen, P. (2019). A Modular Bayesian Salmonella Source Attribution Model for Sparse Data. Risk Anal. Hoboken, NJ: WileyBlackwell.
###### [[Campylobacter]]
- Mullner, P., Jones, G., Noble, A., Spencer, S. E., Hathaway, S., and French, N. P. (2009a). Source attribution of food-borne zoonoses in new zealand: a modified hald model. Risk Anal. 29, 970–984. doi: 10.1111/j.1539-6924.2009.01224.x
- Mullner, P., Spencer, S. E., Wilson, D. J., Jones, G., Noble, A. D., Midwinter, A. C., et al. (2009b). Assigning the source of human campylobacteriosis in New Zealand: a comparative genetic and epidemiological approach. Infect. Genet. Evol. 9, 1311–1319. doi: 10.1016/j.meegid.2009.09.003
- Ranta, J., Matjushin, D., Virtanen, T., Kuusi, M., Viljugrein, H., Hofshagen, M., et al. (2011). Bayesian temporal source attribution of foodborne zoonoses: campylobacter in finland and norway. Risk Anal. 31, 1156–1171. doi: 10.1111/j. 1539-6924.2010.01558.x
- Boysen, L., Rosenquist, H., Larsson, J. T., Nielsen, E. M., Sorensen, G., Nordentoft, S., et al. (2014). Source attribution of human campylobacteriosis in denmark. Epidemiol. Infect. 142, 1599–1608. doi: 10.1017/s0950268813002719
- Liao, S. J., Marshall, J., Hazelton, M. L., and French, N. P. (2019). Extending statistical models for source attribution of zoonotic diseases: a study of campylobacteriosis. J. R. Soc. Interface 16:20180534. doi: 10.1098/rsif.2018.0534
###### [[Listeria]] monocytogenes
- Little, C. L., Pires, S. M., Gillespie, I. A., Grant, K., and Nichols, G. L. (2010). Attribution of human listeria monocytogenes infections in england and wales to ready-to-eat food sources placed on the market: adaptation of the hald Salmonella source attribution model. Foodborne Pathog Dis 7, 749–756. doi: 10.1089/fpd.2009.0439
- Nielsen, E. M., Björkman, J. T., Kiil, K., Grant, K., Dallman, T., Painset, A., et al. (2017). Closing gaps for performing a risk assessment on listeria monocytogenes in ready-to-eat (RTE) foods: activity 3, the comparison of isolates from different compartments along the food chain, and from humans using whole genome sequencing (WGS) analysis. EFSA Support. Publ. 14:1151E–n/a.
###### Shiga-toxin producing [[Escherichia coli|E. coli]] (STEC)
- Mughini-Gras, L., van Pelt, W., van der Voort, M., Heck, M., Friesema, I., and Franz, E. (2018b). Attribution of human infections with Shiga toxin-producing Escherichia coli (STEC) to livestock sources and identification of source-specific risk factors, The Netherlands (2010-2014). Zoonoses Public Health 65, e8–e22. doi: 10.1111/zph.12403

### Population genetic methods
- Studies  genetic diversity and evolutionary dynamics in microorganisms
	- Genetic variations result from neutral processes like genetic drift or adaptive processes such as advantageous mutations in specific environments
	- Example: bacterial populations are typically structured, consisting of distinct lineages that may be partially or entirely isolated from each other
		- factors contributing to population structuring include geographical isolation, genetic drift, and local adaptation
- Analysis of genetic data aims to identify subpopulations, and if so determining the number of clusters, the strains composing them, and their [[Phylogeny|phylogenic]] relationships, including recombination events
- in source attribution, the understanding of an organisms' evolution is used to make educated guesses about their origins
- Comparing genetic data (frequencies) among different strain populations allows us to establish a link between them, e.g. between strains from human cases and from different sources  
#### Models
estimates migration rate, mutation and recombination parameters and uses those to assign probability of each human case isolate having originated from one of the source populations 
- Asymmetric Island Model (AIM) 
- STRUCTURE model

#### Studies
[@mughini-gras.etal2019]
- Pritchard, J. K., Stephens, M., and Donnelly, P. (2000). Inference of population structure using multilocus genotype data. Genetics 155, 945–959.
- Wilson, D. J., Gabriel, E., Leatherbarrow, A. J. H., Cheesbrough, J., Gee, S., Bolton, E., et al. (2008). Tracing the source of campylobacteriosis. PLoS Gene. 4:e1000203. doi: 10.1371/journal.pgen.1000203
- Sheppard, S. K., Dallas, J. F., Strachan, N. J., MacRae, M., McCarthy, N. D., Wilson, D. J., et al. (2009). Campylobacter genotyping to determine the source of human infection. Clin. Infect. Dis. 48, 1072–1078. doi: 10.1086/597402
- Strachan, N. J. C., Gormley, F. J., Rotariu, O., Ogden, I. D., Miller, G., Dunn, G. M., et al. (2009). Attribution of campylobacter infections in northeast scotland to specific sources by use of multilocus sequence typing. J. .Infect. Dis. 199, 1205–1208. doi: 10.1086/597417
- Mughini Gras, L., Smid, J. H., Wagenaar, J. A., de Boer, A. G., Havelaar, A. H., Friesema, I. H. M., et al. (2012). Risk factors for campylobacteriosis of chicken, ruminant, and environmental origin: a combined case-control and source attribution analysis. PLoS One 7:e42599. doi: 10.1371/journal.pone.0042599
- Mughini-Gras, L., Smid, J., Enserink, R., Franz, E., Schouls, L., Heck, M., et al. (2014c). Tracing the sources of human salmonellosis: a multi-model comparison of phenotyping and genotyping methods. Infect. Genet. Evol. 28, 251–260. doi: 10.1016/j.meegid.2014.10.003
- Miller, P., Marshall, J., French, N., and Jewell, C. (2017). sourceR: classification and source attribution of infectious agents among heterogeneous populations. PLoS Comput. Biol. 13:e1005564. doi: 10.1371/journal.pcbi.1005564

### Novel methods of Source Attribution
#### Source-attribution studies using ML and classification algorithms
- [[Machine Learning]] that analyzes [[Whole Genome Sequencing|WGS]] data
- Models are often trained on the isolates with known sources of the pathogen
- then the final model can be used to predict labels (or sources) for unlabeled data
- For Limitations of applying source attribution to WGS data, see [@cardimfalcao.etal2024]

**Learning Algorithm Classification**
1. Unsupervised learning
	- no label in the data
	- algorithm will group the data into clusters based in their similarities (clustering methods)
	- each cluster can then be associated with a source 
 1. Supervised Learning
	- uses labeled data to learn characteristics and patterns to categorize the data based on these labels (sources)

| Publication            | ML-Model                                                                                   | Serovar                                                                                                                                                                         | Data                                                                                         | Sources                                                                                                                                        | Result                                                                                                                         | Additional Comment                                                                                                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [@zhang.etal2019]\|    | [[Machine Learning#Random Forest (RF)\|Random Forest]]                                     | [[Salmonella#Salmonella Typhimurium\|Salmonella Typhimurium]] from different countries                                                                                          | - genomes from different countries<br>- period: 2007-2013, 2015-2017<br>- outbreak data      | - poultry, <br>- wild birds, <br>- bovine <br>- swine                                                                                          | accuracy rate of 82.9%                                                                                                         | - because ML classifier is restricted to the classes presented in the training data, they classified prediction as precise or imprecise<br>- extra Random Forest classifier with humans as source to compare their results with [@lupolova.etal2017]\| |
| [@lupolova.etal2017]\| | [[Machine Learning#Support Vector Machine (SVM)\|Support Vector Machine]]                  | - [[Salmonella#Salmonella Typhimurium\|Salmonella Typhimurium]] (human, bovine, swine, poultry)<br>- [[Salmonella]] Typhi (human)<br>- [[Salmonella]] Dublin (human and bovine) | -  genomes from different countries<br>- period: 1945 - 2016<br>- features: protein variants | Isolation host: <br>- avian<br>- bovine<br> - human<br> - swine                                                                                | accuracy of 67% - 90%                                                                                                          | - an isolate could be assigned for multiple sources (generalist strain) - 94% was assigned to only one host<br>                                                                                                                                        |
| [@munck.etal2020]      | [[Machine Learning#Logit Boost\|Logit Boost]]                                              | [[Salmonella#Salmonella Typhimurium\|Salmonella Typhimurium]]                                                                                                                   |                                                                                              | - sporadic human<br> cases<br>- human, food and animal isolates from an integrated surveillance system cases<br>- Denmark<br>- period: 2 years | - Broilers<br>- layers<br>- cattle (domestic)<br>- cattle (import)<br>- ducks (import)<br>- pigs (domestic)<br>- pigs (import) | accuracy of 92%                                                                                                                                                                                                                                        |
| [@guillier.etal2020]\| | [[Machine Learning#Multinomial logistic regression (ML)\|Multinomial logistic regression]] | [[Salmonella#Salmonella Typhimurium\|Salmonella Typhimurium]]                                                                                                                   | - period: 2010 - 2015<br>- environmental strains                                             | - pigs<br> - poultry<br> - ruminants                                                                                                           | accuracy of 75%                                                                                                                |                                                                                                                                                                                                                                                        |

**Reviews**
- [@arning.etal2021]: comparison of performances of different ML algorithms for attributing source of [[Pathogens/Campylobacter|campylobacteriosis]] cases 
- [@lupolova.etal2019]: technical review and comparative study of different machine learning models for host prediction and statistical methods for feature selection 
- [[@deng.etal2021]]: emerging ML application in food safety mainly focusing of foodborne pathogens and foodborne diseases

The discrepancies in the results from the study of [@zhang.etal2019] and [@lupolova.etal2019] highlight the importance of dataset design and the influence that clonally related samples sharing a phenotype can have on the patterns identified by machine learning [@wheeler2019]

❓**Regional Applicability:** can this be applied world-wide or are the results also somewhat country specific? Or is the mutation / gene section of for example Salmonella always the same in  poultry?
❓ Seems to focus on zoonotic pathogens (Salmonella) How about non-animal but plant reservoirs like lettuce?
	- apparently also for Campylobacter, is this also only animal sources? and why this one and not the others
#### Weighted Network Analyses
- [@merlotti.etal2020]
- [@wainaina.etal2022]

#### Hierarchical Clustering
- [@bayliss.etal2023]: source attribution model based on hierarchical clustering to rapidly identify and trace salmonellosis geographical source from WGS data

### Comparative exposure assessment
- quantify consumer exposure to pathogens by estimating the average number of pathogens that individuals in a population are exposed to in each source and route per day
- determine the relative importance of the know transmission routes by estimating the human exposure to pathogens via each route
- Integrates exposure estimates with pathogen dose-response relationships and considers the specific vulnerabilities of different consumer subpopulations
  → predict health risks in terms of number of cases attributable to various sources
- aims to identify sources, transmission pathways, and critical points along these pathways that pose the highest risk to the population,

**Examples** 
- There have been studies that apply comparative exposure assessment to attribute sources of exposure for some foodborne pathogens such as [[Salmonella]] and [[Campylobacter]]. For specific resources, see [@cardimfalcao.etal2024]
- Pintar, K. D., Thomas, K. M., Christidis, T., Otten, A., Nesbitt, A., Marshall, B., et al. (2016). A comparative exposure assessment of campylobacter in Ontario, Canada. Risk Anal. 37, 677–715. doi: 10.1111/risa.12653 [@mughini-gras.etal2019]


## 2. Epidemiological Approaches
Human cases of foodborne disease may occur sporadically (individual cases or small clusters) or clustered as part of an outbreak 
[@mughini-gras.etal2019]
### Case Control Studies / Cohort Studies of sporadic cases 
- **Goal**: Identify risk factors for illness, e.g. sources or behaviors
#### Case-Control Study
- used more often for attribution of sporadic foodborne infection than [[#Cohort Study|cohort studies]]
- [c] Subject to several types of bias: classification bias, recall bias, selection bias
	- Selection bias: the group of patients should be representative of all cases occurring in the population & the control group should be at risk of acquiring the disease upon exposure (i.e. originate from a population with the same characteristics as the one where the patients come from)
		- How to circumvent: 
			- match cases and controls by age, gender, place of residence etc. to control for potential confounding effects 
			- select several controls per case to increase statistical power, but also costs 
	*Source: Fullerton, K. E., Scallan, E., Kirk, M. D., Mahon, B. E., Angulo, F. J., de Valk, H., et al. (2012). Case-control studies of sporadic enteric infections: a review and discussion of studies conducted internationally from 1990 to 2009. Foodborne Pathog. Dis. 9, 281–292. doi: 10.1089/fpd.2011.1065*
- [c] can only trace back to the sources of human infections up to the point of exposure (e.g. foods consumed) which may not correspond to the original reservoirs because of cross-contamination or alternative transmission routes [@mughini-gras.etal2019]
	→ **source-assigned case control study**: combine methods based on microbial subtyping and case-control data to reconstruct the underlying transmission pathway from a given reservoir up to the point of exposure / risk factor 
	- first attribute human cases included in a case-control study to sources using the microbial subtyping approach to determine their likely sources and then compare the exposures of the attributed cases with those of the controls to identify source-specific risk factors for infection & infer the underlying transmission way 
- [p] Useful in pinpointing specific sources: For example the link between consumption of 'cantaloupe' melons and [[Listeria]] monocytogenes in the USA was first suggested by a case-control study of sporadic cases [@varma.etal2007]
- [p] particularly useful for attribution of diseases that are sporadic in nature, such as [[Pathogens/Campylobacter|campylobacteriosis]]

**Method**
compare the frequency of exposure to a given (risk) factor in a group of cases to the frequency of exposure in a control group
1. **Data collection on exposure** to putative risk factors usually by retrospective questionnaires or interviews
	- consumption of specific food items, general eating habits, underlying (possibly chronic) health conditions, behavioral or seasonal factors 
2. **Statistical Tools**
	- Measure of association between the disease and risk factors: odds ratio (OR) 
	- Calculate OR: logistic regression modeling 
- When a plausible causal link between exposure and disease exists: estimate the number of cases attributable to each risk factor (i.e. source) in question calculate Population Attributable Fraction (PAF)

**Examples** [@mughini-gras.etal2019]
Systematic reviews and meta-analysis of published case-control studies can provide pooled ORs to identify the main risk factors for foodborne infections and might help increase the number of sources to be considered and overcome geographical and temporal limitations inherent of individual case-control studies
- Domingues, A. R., Pires, S. M., Halasa, T., and Hald, T. (2012). Source attribution of human campylobacteriosis using a meta-analysis of case-control studies of sporadic infections. Epidemiol. Infect. 140, 970–981. doi: 10.1017/ S0950268811002676
- Kintz, E., Brainard, J., Hooper, L., and Hunter, P. (2017). Transmission pathways for sporadic shiga-toxin producing coli, E., infections: a systematic review and meta-analysis. Int. J. Hyg. Environ. Health 220, 57–67. doi: 10.1016/j.ijheh.2016. 10.011

#### Cohort Study 
compare the frequency of case occurrence among those exposed to a given risk factor vs. an unexposed group 

### Outbreak Data Analysis
- **Analysis of data from outbreak investigations:** quantify the relative contribution of different food to outbreak illnesses
- Result: proportion of outbreaks (or outbreak cases) attributable to each source 

- [p] may cover a wide range of food sources and pathogens  
- [c] Outbreaks usually provide a partial picture of all infections occurring in the population [@pires.etal2009]
      data completeness depends on the quality and coverage of the surveillance system
	- outbreaks of severe disease, those caused by rare pathogens and those with a high attack rate have a higher change of being identified, thoroughly investigated and reported
	- outbreaks of mild disease involving a few people and/or caused by less virulent pathogens are more likely to remain unascertained
	- if no investigation happens, the identification for the source of the outbreak relies on anecdotal information of on information supplied by e.g. physicians, patients themselves etc. → weak strength of the evidence linking between outbreak an given source and tends to confirm notoriously high-risk food with possible overestimation of their contributions 
	- → attribution of pathogens that are sporadic in nature (e.g. [[Campylobacter]] or [[Toxoplasma Gondii]]) is poorly estimated outbreak data analysis and [[Case Control Studies|case-control study]] is preferable 

**Examples** [@mughini-gras.etal2019]
- Pires, S. M., and Hald, T. (2010). Assessing the differences in public health impact of salmonella subtypes using a bayesian microbial subtyping approach for source attribution. Foodborne Pathog. Dis. 7, 143–151. doi: 10.1089/fpd.2009.0369
- Batz, M. B., Hoffmann, S., and Morris, J. G. Jr. (2012). Ranking the disease burden of 14 pathogens in food sources in the united States using attribution data from outbreak investigations and expert elicitation. J. Food Prot. 75, 1278–1291. doi: 10.4315/0362-028X.JFP-11-418
- [@painter.etal2013]
## 3. Expert elicitation
- in absence or paucity of available data 
- maybe used to fill data gap, to combine data from different studies and scientific approaches into a single estimate or as an alternative source-attribution method when other methods are not feasible or useful to address a public health question

Choice of Experts: 
Efsa (2014). Guidance on expert knowledge elicitation in food and feed safety risk assessment. EFSA J. 12:278.

### Studies
[@mughini-gras.etal2019]
- Havelaar, A. H., Galindo, A. V., Kurowicka, D., and Cooke, R. M. (2008). Attribution of foodborne pathogens using structured expert elicitation. Foodborne Pathog. Dis. 5, 649–659. doi: 10.1089/fpd.2008.0115
- Butler, A. J., Thomas, M. K., and Pintar, K. D. (2015a). Expert elicitation as a means to attribute 28 enteric pathogens to foodborne, waterborne, animal contact, and person-to-person transmission routes in Canada. Foodborne Pathog. Dis. 12, 335–344. doi: 10.1089/fpd.2014.1856
- Hald, T., Aspinall, W., Devleesschauwer, B., Cooke, R., Corrigan, T., Havelaar, A. H., et al. (2016). World health organization estimates of the relative contributions of food to the burden of disease due to selected foodborne hazards: a structured expert elicitation. PLoS One 11:e0145839. doi: 10.1371/ journal.pone.0145839
## 4. Intervention studies (Natural Experiments)
- natural experiments are observational study designs where the researcher does not control the assignment to treatment or conditions. Instead, these assignments are determined by natural or external factors, allowing for the study of outcomes under real-world conditions.
- Example: Avian Influenza Epidemic: The epidemic prompted massive bird culling and the closure of poultry slaughterhouses, resulting in a 30–50% reduction in campylobacteriosis across various regions. The prolonged reduction in disease cases, even after the recovery of poultry meat sales, underscored the role of the environmental burden of Campylobacter from poultry in human infections.
### Studies
[@mughini-gras.etal2019]
- Vellinga, A., and Van Loock, F. (2002). The dioxin crisis as experiment to determine poultry-related campylobacter enteritis. Emerg. Infect. Dis. 8, 19–22. doi: 10. 3201/eid0801.010129
- van Pelt, W., Mevius, D., Stoelhorst, H. G., Kovats, S., van, A. W., de Giessen, et al. (2004). A large increase of Salmonella infections in 2003 in the netherlands: hot summer or side effect of the avian influenza outbreak? Euro. Surveill. 9, 17–19.
- Sears, A., Baker, M. G., Wilson, N., Marshall, J., Muellner, P., Campbell, D. M., et al. (2011). Marked campylobacteriosis decline after interventions aimed at poultry, New Zealand. Emerg. Infect. Dis. 17, 1007–1015. doi: 10.3201/eid/1706.101272
- Tustin, J., Laberge, K., Michel, P., Reiersen, J., Dadadottir, S., Briem, H., et al. (2011). A national epidemic of campylobacteriosis in iceland, lessons learned. Zoonoses Public Health 58, 440–447. doi: 10.1111/j.1863-2378.2010. 01387.x
- Friesema, I. H., Havelaar, A. H., Westra, P. P., Wagenaar, J. A., and van Pelt, W. (2012). Poultry culling and campylobacteriosis reduction among humans, the netherlands. Emerg. Infect. Dis 18, 466–468. doi: 10.3201/eid1803.11 1024


# Footer
## Related Notes
- [[@deng.etal2021]] & all the publications mentioned there
- [@mughini-gras.etal2018]
## Sources
### Reviews 
- [@cardimfalcao.etal2024]
- [@mughini-gras.etal2019]