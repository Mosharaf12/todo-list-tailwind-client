import React from "react";
import { FaPlus, IconName } from "react-icons/fa";

const AddNote = () => {
  return (
    <div className="h-[85vh] p-10 flex items-end justify-end">
      {/* The button to open modal */}
      <label
        htmlFor="addNoteModal"
        className="p-3 hover:cursor-pointer hover:bg-accent text-white bg-primary rounded-xl text-4xl"
      >
        <FaPlus></FaPlus>
      </label>
      {/* The button to open modal */}
      {/* <label htmlFor="addNoteModal" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="addNoteModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="addNoteModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
        <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn">Yay!</label>
    </div>
      </div>
    </div>
  );
};

export default AddNote;
