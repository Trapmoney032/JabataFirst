import React from "react";

const IndexPage = () => {
  return (
    <div>
      {" "}
      <div class="header">
        <h1 class="h1col">GUCCI MANE TOUR</h1>
        <input />
        <button>Search</button>
        <p>A website created by me.</p>
      </div>
      <table class="table">
        <tr class="tr1">
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr class="tr2">
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr class="tr3">
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
            
        </tr>
      </table>
    </div>
  );
};

export default IndexPage;
