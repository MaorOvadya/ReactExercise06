// import React from "react";

// const CreatePost = ({ user, setPosts }) => {
//   const [content, setContent] = React.useState("");
//   const [image, setImage] = React.useState(null);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const post = { content, image, user };
//     setPosts(prevPosts => [post, ...prevPosts])
//   }
//   return (
//     <div>
//       <h1>Create New Post</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add Post Content"
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//         <button type="submit">Submit Post</button>
//       </form>
//       {/* <p>{content}</p>
//       {image && <img src={URL.createObjectURL(image)} alt="upload" style={{height: 100, width: 200, objectFit: 'cover'}} />} */}
//     </div>
//   );
// };

// export default CreatePost;


/**
 * ====================================================================
 * Clear state out of our input
 * --- controlled component
 * We'll want the input to be controlled by its state
 */

//  import React from "react";

// const CreatePost = ({ user, setPosts }) => {
//   const [content, setContent] = React.useState("");
//   const [image, setImage] = React.useState(null);

//   const imageInputRef = React.useRef()

//   function handleSubmit(e) {
//     e.preventDefault();
//     if(!content && !image) {
//       return alert('Fields must not be empty')
//     }
//     const post = { content, image, user };
//     setPosts(prevPosts => [post, ...prevPosts])
//     setContent('')
//     setImage(null)
//     imageInputRef.current.value = ''
//   }
//   return (
//     <div>
//       <h1>Create New Post</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add Post Content"
//           onChange={(e) => setContent(e.target.value)}
//           value={content}
//         />
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} ref={imageInputRef} />
//         <button type="submit">Submit Post</button>
//       </form>
//       {/* <p>{content}</p>
//       {image && <img src={URL.createObjectURL(image)} alt="upload" style={{height: 100, width: 200, objectFit: 'cover'}} />} */}
//     </div>
//   );
// };

// export default CreatePost;

/**
 * ====================================================================
 *
 */

 import React from "react";

const CreatePost = ({ user, handleAddPost }) => {
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);

  const imageInputRef = React.useRef()

  function handleSubmit(e) {
    e.preventDefault();
    if(!content && !image) {
      return alert('Fields must not be empty')
    }
    const post = { content, image, user };
    handleAddPost(post)
    setContent('')
    setImage(null)
    imageInputRef.current.value = ''
  }


  return (
    <>
      <h1 className=" text-2xl  text-center text-teal-600 capitalize font-bold box-border p-5">Create New Post</h1>
      <form className="bg-gray-200 rounded-lg justify-evenly items-center border-2 flex flex-row  m-5 p-5 " onSubmit={handleSubmit}>
        <input className="rounded-lg text-center h-10 w-96 text-teal-600"
          type="text"
          placeholder="Add Post Content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        {/*
          what is e.target.files
          - e.target.files is an array of files

          e.target.files[0] contains the first file in the array as a File object
          - a File object is a file that has been selected by the user
          - we can use this to display the image in our post

          explain ref={imageInputRef}
          - we want to be able to access the input element
          - we can do this by using a ref
          - we can then access the input element by using imageInputRef.current
          - we can then set the value of the input element to an empty string
        */}
        <input className="rounded-lg w-82 text-teal-600" type="file" onChange={(e) => setImage(e.target.files[0])} ref={imageInputRef} />
        <button className="hover:bg-teal-700 hover:text-white  hover:border-white transition-all border-teal-600 duration-700 font-normal text-ml m-0 px-5 py-0 border-solid border rounded-xl h-10 " type="submit">Submit Post</button>
      </form>
    </>
  );
};

export default CreatePost;
