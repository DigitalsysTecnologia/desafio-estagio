package utils

type ClassEnum int

type Attributes struct {
	Forca        int
	Inteligencia int
	Destreza     int
}

func CalculateAttributeLevels(level int, class string) Attributes {
	var pointsPerLevel = 4
	var weightStrength, weightIntelligence, weightDexterity int

	switch class {
	case "Guerreiro":
		weightStrength = 2
		weightIntelligence = 1
		weightDexterity = 1
	case "Mago":
		weightStrength = 1
		weightIntelligence = 2
		weightDexterity = 1
	case "Assassino":
		weightStrength = 1
		weightIntelligence = 1
		weightDexterity = 2
	case "Arqueiro":
		weightStrength = 1
		weightIntelligence = 1
		weightDexterity = 2
	}

	totalPoints := level * pointsPerLevel

	totalStrength := totalPoints / (weightStrength + weightIntelligence + weightDexterity) * weightStrength
	totalIntelligence := totalPoints / (weightStrength + weightIntelligence + weightDexterity) * weightIntelligence
	totalDexterity := totalPoints / (weightStrength + weightIntelligence + weightDexterity) * weightDexterity

	return Attributes{
		Forca:        totalStrength,
		Inteligencia: totalIntelligence,
		Destreza:     totalDexterity,
	}
}