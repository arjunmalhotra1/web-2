package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("Hi!")
	time.AfterFunc(2*time.Second, timeout)
	fmt.Println("welcome to loupe!")
	c := 0
	for i := 0; i <= 10000000000; i++ {
		c = c + 1
	}
	fmt.Println("expensive operation done")
}

func timeout() {
	fmt.Println("Press the button!")
}
