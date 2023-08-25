
import books from "./schemas/books";
import comments from "./schemas/comments";
import community from "./schemas/community";
import events from "./schemas/events";
import gift from "./schemas/gift";
import messages from "./schemas/messages";
import posts from "./schemas/posts";

export const schema = {
  types: [books, messages, events, posts, comments, community, gift],
}
// export const schemaTypes = [books]