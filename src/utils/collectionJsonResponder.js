export default function ( collection, res, next, options = {} ) {
    return collection
        .forge()
        .fetch( options.fetch )
        .then( data => {
            res.json( data.toJSON() );
        } )
        .catch( next );
}