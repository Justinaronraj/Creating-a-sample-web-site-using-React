import React from "react";
import './content.css';
function Table(){
    return(
        <div className="content">
        <div className="Table">
            <table>
                    <tr>
                        <th>S.No</th>
                        <th>Students Name</th>
                        <th>Regiter No</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Arun</td>
                        <td>72072343</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Barath</td>
                        <td>72072300</td>
                        <td>19</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Karthic</td>
                        <td>72072344</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Aron</td>
                        <td>72072443</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Atlas</td>
                        <td>72072003</td>
                        <td>19</td>
                    </tr>
            </table>
        </div>
        <div className="form">
            <form>
                <div className="ele">
                <label>User Name</label>
                <input type="text"></input>
                </div>
                <div className="ele">
                <label>Password</label>
                <input type="password"></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
        </div>
    )
}
export default Table;