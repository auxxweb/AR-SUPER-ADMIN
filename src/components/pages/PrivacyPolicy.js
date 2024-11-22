import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import the default theme CSS
import "./terms.css";

const PrivacyPolicy = ({
  setData,
  data,
  handleCreate,
  handleUpdate,
  loading = false
}) => {
  const [editorContent, setEditorContent] = useState(data);

  return (
    <div className="rich-text-editor">
      <h2>Privacy & Policy Editor</h2>
      {loading ? (
        //         <Loader />
        {}
      ) : (
        <>
          <ReactQuill
            value={editorContent}
            //   onChange={handleChange}
            className="react-quill"
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { header: "3" }],
                ["bold", "italic", "underline"],
                ["code-block"],
                //   [{ indent: "-1" }, { indent: "+1" }],
                [{ color: [] }, { background: [] }],
                [{ script: "sub" }, { script: "super" }]
              ]
            }}
          />

          <div className="sub-btn-div">
            <button className="submit-btn">
              {data ? "Update Terms" : "Create Terms"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PrivacyPolicy;
