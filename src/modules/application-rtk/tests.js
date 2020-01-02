import expect from "expect.js";
import { application } from "./index";
const { actions, reducer } = application;

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