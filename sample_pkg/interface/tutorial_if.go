package main

import (
	"fmt"
)

//definition Animal behave
type Animal interface {
	info() interface{}
}

//human struct
type Human struct {
	name   string
	age    int
	action string
}

//cat struct
type Cat struct {
	name   string
	age    int
	action string
}

/********<Methods>***********************/
func (human *Human) info() interface{} {
	human.name = "alis"
	human.age = 20
	human.action = "work with bipedal locomotion"
	return *human
}

func (cat *Cat) info() interface{} {
	cat.name = "nyanko"
	cat.age = 8
	cat.action = "work with quadrupedalism"
	return *cat
}

/*******************************************/

func main() {
	human := &Human{}
	cat := &Cat{}
	var human_IF, cat_IF Animal = human, cat
	debug_print(human_IF.info(),
		cat_IF.info(),
		&human,
		&cat)

	debug_print(human.name, human.age, human.action)
	debug_print(cat.name, cat.age, cat.action)

}

//anything objects to debug_print
func debug_print(objects ...interface{}) {
	for _, obj := range objects {
		fmt.Println(obj)
	}
}
