package handlers

// LinkData ...
type LinkData struct {
	ID     string `json:"id,omitempty" bson:"_id,omitempty"`
	URL    string `json:"url" bson:"url"`
	Slug   string `json:"slug" bson:"slug"`
	UserID string `json:"user_id" bson:"user_id"`
}
