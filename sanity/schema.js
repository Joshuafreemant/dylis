
import books from "./schemas/books";
import comments from "./schemas/comments";
import events from "./schemas/events";
import messages from "./schemas/messages";
import posts from "./schemas/posts";

export const schema = {
  types: [books, messages, events, posts, comments],
}
// export const schemaTypes = [books]