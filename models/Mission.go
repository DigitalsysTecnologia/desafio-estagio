package models

type Mission struct {
	ID               uint
	Name             string
	Description      string
	RecommendedLevel int
	Location         string
	Bounty           string
	Difficulty       int
}