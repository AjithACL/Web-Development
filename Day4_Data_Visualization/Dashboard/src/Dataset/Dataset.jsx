import './Dataset.css'
import BasicTable from "./BasicTable";
const Dataset =()=>{
    return(
      <div>
        <h1 style={{textAlign:'center'}}>Datasets</h1>
        <div className="dashboard-table">

        <BasicTable/>
        </div>
      </div>
    )
}

export default Dataset;