package router

import (
	"github.com/FranciscoMendes10866/slimlink/redir-api/handlers"
	"github.com/gofiber/fiber/v2"
)

// SetupRouter ...
func SetupRouter(app *fiber.App) {
	app.Get("/:slug", handlers.RedirectLink)
}
