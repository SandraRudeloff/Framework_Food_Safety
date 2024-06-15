---
Type:
  - Relation
Category: []
Linked_to_Framework?: true
---
Historic data on reported foodborne outbreaks
- including demographic details (e.g., age and gender of affected individuals) and 
- characteristics of the outbreak (e.g., number of cases, hospitalization rates, whether the outbreak was multistate, the setting of the exposure, the season, and the serogroup involved)

Method
- multinomial logistic regression model that can differentiate among various potential food sources (like beef, dairy, or vegetables) that are linked with outbreaks. 
	- assigns probabilities to each food source, suggesting which is most likely associated with the outbreak based on the input data

Prediction: The model predicts the probability of each major food source being the culprit for a given outbreak. 


---- 
 - “there are differences in food consumption patterns by age, with the lowest median percent of children and adolescents in vegetable-associated STEC outbreaks and the highest in STEC dairy outbreaks” @white.etal2016
 - the median percentage of female cases in vegetable associated STEC outbreaks was 64%, compared with 50% in beef STEC outbreaks @white.etal2016
