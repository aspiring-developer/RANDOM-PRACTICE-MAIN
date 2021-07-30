import BlogList from './BlogList';
import React, {useState} from 'react';

const Home = () => {

  const [blogs, setBlogs ]= useState([
    { "title": "First Blog", "blogBody": "First blog body... Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aliquid?", "author": "- Dan Thomas", "id": 100 },
    { "title": "Next Blog", "blogBody": "Next blog body... Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aliquid?", "author": "- Chris Clark", "id": 200 },
    { "title": "Third Blog", "blogBody": "Third blog body... Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aliquid?", "author": "- George Tsai", "id": 300 },
  ]);

  // Delete Feature
  function deleteFeatureFunction(targetedId) {
setBlogs(blogs.filter(function(filteredBlogs){
  return filteredBlogs.id !== targetedId;
}))
  }

  return (
    <>
      <section>
        <div className="row my-4 mainSection1Row">
          <div className="col p-4 bg-light text-center">
            <h4 className="text-dark p-3" id="greetingTexts"> Simple blog list </h4>
            {/*<div className="input-group mx-auto">
            <input type="text" className="form-control text-center" />
          </div>*/}
            <BlogList blogProps={blogs} deleteFeatureProps={deleteFeatureFunction}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;