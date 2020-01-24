import expect from "expect.js";
import reducer from "./reducers";
import actions from "./actions";

describe( "application reducer", function() {
    describe( "toggle flag", function() {
        const toggleFlag = actions.toggleFlag();
        const initialState = false;

        const result = reducer( initialState, toggleFlag );

        it( "should toggle flag to true", function( ) {
            expect( result ).to.be( true ) ;
        } );
    } );
} );