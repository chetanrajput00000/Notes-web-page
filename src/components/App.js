import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function CreateNotes(notes){
  return(
    <Note
    id={notes.id}
    key={notes.id}
    title={notes.title}
    content={notes.content}
  />
  )
}
function App(props) {
  return (
    <div>
      <Header />

 {notes.map(CreateNotes)} 

      {/* <Note
        title={notes[1].title}
        content={notes[1].content}
      />

      <Note
        title="some bveee title"
        content="some aree content"
      /> */}
      <Footer />
    </div>
  );
}

export default App;
