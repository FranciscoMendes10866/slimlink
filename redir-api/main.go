package main

import (
	"github.com/FranciscoMendes10866/slimlink/redir-api/router"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/helmet/v2"
)

func main() {
	app := fiber.New()
	app.Use(cors.New())
	app.Use(helmet.New())
	app.Use(logger.New())
	router.SetupRouter(app)

	app.Listen(":8372")
}
