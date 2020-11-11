package handlers

import (
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
)

// RedirectLink ...
func RedirectLink(c *fiber.Ctx) error {
	initDB()
	collection := mg.Db.Collection("links")
	slugParam := c.Params("slug")
	query := bson.D{{Key: "slug", Value: slugParam}}
	data := collection.FindOne(c.Context(), &query)
	if data == nil {
		return c.JSON(fiber.Map{
			"status": 500,
		})
	}
	fetchedSlug := &LinkData{}
	data.Decode(fetchedSlug)
	return c.Redirect(fetchedSlug.URL)
}
