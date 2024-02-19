package response

// resposta das quests
type QuestsResponse struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Reward      string `json:"reward"`
}
