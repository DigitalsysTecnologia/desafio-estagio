package helper

// controle de erro
func ErrorPanic(err error) {
	if err != nil {
		panic(err)
	}
}
