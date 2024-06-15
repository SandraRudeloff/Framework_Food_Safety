---
Type:
  - Relation
Category:
  - analytical epidemiological studies
aliases:
  - case-control study
  - case-control studies
Linked_to_Framework?: true
---
**Definition**: observational research method where two groups differing in outcome (disease presence vs. absence) are compared to explore a potential causal relationships between suspected factors and those outcomes. 
selecting cases (individuals who have the disease) and controls (individuals without the disease) and comparing their exposures to identify potential risk factors.
**Purpose**:  assesses the association between specific exposures and outcomes, typically in the context of disease occurrence.

- applicability: when the source population (i.e. the population from which cases arose) is large and/or the outcome rare. [@waroux.etal2012]
# Methodology
[@kuhn.ethelberg2021]
1. Selection of Cases and Controls and Matching
	- *Cases*: Individuals diagnosed with the disease or outcome of interest. (sick people)
	- *Controls*: Individuals without the disease, matched to cases in demographics but differing in disease outcome
	- *Method*: Cases and controls are matched on various factors that could affect the outcome, such as age, gender, or other demographic characteristics
2. Retrospective Analysis
	- *Method*: Collect and analyze historical data to determine exposure levels for all persons
	- *Data Sources*: mainly interviews
3. Comparison of Exposure
	- *Goal*: Determine if cases experienced higher rates of exposure to the risk factor compared to controls
	- *Method*: Calculation of odds ratios (ORs) by logistic regression to measure the strength of the association between exposure and disease
		- model the probability that a given outcome (status of being a case or a control) is present, based on various predictor variables (such as exposure to a risk factor)
	- *Interpretation*: An OR greater than 1 suggests a positive association between the exposure and the disease.

# Limitations of using Logistic Regression

- [c] **Methodological limitations of using logistic regression**
[@gu.etal2015]
 - **Mixed and conditional causality:** reflect the complexities in understanding disease causes in epidemiological studies
	- mixed causality: different risk factors can interact and influence each other
	- conditional causality: impact of these factors can vary depending on additional contextual or individual conditions
	- Example mixed causality: In a restaurant outbreak, the interaction between undercooked meat and poor handwashing practices complicates the identification of the primary source of infection
	- Example conditional causality: The risk from consuming raw shellfish significantly increases for elderly individuals due to their generally weaker immune systems compared to younger populations
	- Logistic Regression generally assumes independent and fixed effects of each predictor (if not otherwise specified by interaction terms), failing to account for interactions and conditional effects
- **Nested Exposures and Parallel Proximity of Causality:** different exposures are hierarchical within the same category -> risk associated with a broad category (like chicken consumption) depends on its subcategories (such as cooked at home vs. outside) 
	- Logistic Regression treats variables as independent, ignoring hierarchical relationships and nuanced effects.
-  **Overlapping Exposures:** This concept refers to situations where individuals are simultaneously exposed to multiple risk factors that might be related. This overlap can make it difficult to determine which specific exposure, or combination of exposures, is responsible for causing the disease
	- logistic regression cannot easily model dependencies between overlapping exposures without explicit adjustments.
- **Missing Data:** Non-response to certain questions can lead to biased estimates of relationships between exposures and disease.

# New Methods
 → [@gu.etal2015] new method to compare the exposure. Instead of using logistic regression using a random forest 