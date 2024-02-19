package request

//criacao de quests
type CreateQuestsRequest struct {
	Name        string `validate: "required, min=1,max=200" json:"name"`
	Description string `validate: "required, min=1,max=200" json:"description"`
	Reward      string `validate: "required, min=1,max=200" json:"reward"`
}
