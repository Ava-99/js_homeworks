// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================

// Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

// This is the default behavior of events on elements unless you stop the propagation. To prevent event bubbling, you use the stopPropagation method of the event object.

// The event object contains properties that have information about the event that was triggered and the element it was triggered on. This object also contains methods – one of which is stopPropagation().

// The stopPropagation method of an event prevents the event from propagating to the parents and ancestors of the element the event was triggered on.