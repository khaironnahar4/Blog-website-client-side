import { useLoaderData } from "react-router-dom";

function Feature() {
  const datas = useLoaderData();

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-14 text-red-500">
        Feature
      </h1>
      {/* table */}
      <div className="overflow-x-auto mt-11">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            {/* row  */}
            {
              datas.map((data, idx)=> (
                <tr className="hover:bg-base-200 dark:hover:bg-gray-700" key={data._id}>
                <th>{idx+1}</th>
                <td>{data.title}</td>
                <td>{data.userName}</td>
                <td>{data.category}</td>
              </tr> 
              ))
            }


          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Feature;
