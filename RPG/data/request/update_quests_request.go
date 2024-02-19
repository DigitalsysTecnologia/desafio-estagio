package request

//atualizacaa de informacoes
type UpdateQuestsRequest struct {
	Id          int    `validate:"required"`
	Name        string `validate:"required,max=200,min1" json:"name"`
	Description string `validate:"required, max=200,min1" json:"description"`
	Reward      string `validate:"required, max=200,min1" json:"reward"`
}
