
// Define the signal module.
define(
	[
		"jquery"
	],
	function( $ ){
	
	
		// I provide binding and triggering capabilities for a 
		// single event type in a given context.
		function Signal( context, eventType ){

			// Store the context.
			this.context = context;
			
			// Store the event type.
			this.eventType = eventType;

			// Define the subscribers that are bound to this event.
			// Each subscriber will have a callback and a context
			// associated with it.
			this.subscribers = [];

			// Return this object reference.
			return( this );
			
		}
		
		
		// I am a contect-sensitive factory for signals. I return
		// a new constructor that uses the same context for every
		// instantiation.
		Signal.forContext = function( context ){
		
			// Create a factory bound to the given context.
			var factory = function( eventType ){
				
				// Return context-bound Signal.
				return( 
					new Signal( context, eventType ) 
				);
				
			};
			
			// Return the bound factory.
			return( factory );
			
		};
		
		
		// Define the class methods.
		Signal.prototype = {

			// I bind a subscriber for this event.
			bind: function( callback, context ){

				// Add this subscriber to the subscribers.
				this.subscribers.push({
					callback: callback,
					context: (context || window)
				});
				
				// Return this object reference for method chaining.
				return( this );
			
			},
			
			
			// I trigger the event with the given meta-data.
			trigger: function(){
				
				// Get the trigger arguments so we can pass them onto 
				// the subscrigers.
				var eventArguments = Array.prototype.slice.call( arguments );
				
				// Create the triggered event object.
				var event = {
					type: this.eventType,
					context: this.context,
					date: new Date()
				};
				
				// Prepend the event to the arguments.
				eventArguments.unshift( event );
				
				// Slice off the active subscribers. This allows us 
				// to keep the same subscriber list even if the 
				// callbacks of one subscriber try to unsubscribe the
				// callbacks of anotehr subscriber.
				//
				// NOTE: This prevents a callback from stopping 
				// "immediate propagation," which is probably what we
				// want in an event system.
				var activeSubscribers = this.subscribers.slice();

				// Publish the event to all of the subscribers.
				for (var i = 0 ; i < activeSubscribers.length ; i++){
 					
					// Publish event.
					activeSubscribers[ i ].callback.apply( 
						activeSubscribers[ i ].context,
						eventArguments
					);
					
 				}
				
				// Return this object reference for method chaining.
				return( this );
				
			},
			
			
			// I remove the given subscriber from this event.
			unbind: function( callback ){
				
				// Remove all instances of this callback from the 
				// collection of subscribers.
				this.subscribers = $.map(
					this.subscribers,
					function( subscriber ){

						// Check to see if this callback is one of
						// the ones we need to unbind.
						if (subscriber.callback === callback){
						
							// Return null to unsubscriber.
							return( null );
						
						} else {

							// We are keeping this subscriber.
							return( subscriber );

						}

					}
				);
			
			}
			
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //

		
		// Return the constructor.
		return( Signal );
		

	}
);

