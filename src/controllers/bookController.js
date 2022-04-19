const addBook = async function(req,res){
 let getBookData = req.body;

 if(getBookData.author && getBookData.publisher){
   let checkAuthorID = await Author.findById(getBookData.author);
   let checkPublisherID = await publisher.findById(getBookData.publisher);


   if(checkAuthorID){

    if(checkPublisherID){
     
        let showEntryData = await addBook.create(getBookData);
        req.send({data: showEntryData, status: true});



    }else{
    res.send({msg: "Publisher Id is not valid",status: false});
    }
   }else{
    res.send({msg: "Author ID is not valid", status: false});
   }


 }else{
    res.send({msg: "Author & publisher are the requast fields", status: false});
 }

}

const fetchBooks = async function(req, res){
    const getBooks = await addBook.find().populate('author publisher')
    res.send({data: getBooks, status: true});
}


module.exports.addBook = addBook;



