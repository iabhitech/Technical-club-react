const Teams = () =>{
    return(
        <div className="card-deck mb-2 feature-card">
        <div className="card m-2">
          <div className="text-center mt-4">
            <i className="fa fa-laptop-code fa-3x blue-text" aria-hidden="true"></i>
            <div className="pt-2"><strong>Technical Team</strong></div>
          </div>
          <hr/>
          <div className="card-body small pt-0">
              <div className="d-flex">
                <span>Total Members</span>
                <span className="ml-auto">8</span>
            </div>
          </div>
        </div>
        <div className="card m-2">
          <div className="text-center mt-4">
            <i className="fa fa-chart-area fa-3x teal-text" aria-hidden="true"></i>
            <div className="pt-2"><strong>Documentation Team</strong></div>
          </div>
          <hr/>
          <div className="card-body small pt-0">
              <div className="d-flex">
                <span>Total Members</span>
                <span className="ml-auto">4</span>
            </div>
          </div>
        </div>
        <div className="card m-2">
          <div className="text-center mt-4">
            <i className="fab fa-sketch fa-3x indigo-text" aria-hidden="true"></i>
            <div className="pt-2"><strong>Designing Team</strong></div>
          </div>
          <hr/>
          <div className="card-body small pt-0">
              <div className="d-flex">
                <span>Total Members</span>
                <span className="ml-auto">5</span>
            </div>
          </div>
        </div>
        <div className="card m-2">
          <div className="text-center mt-4">
            <i className="fas fa-tasks fa-3x blue-text" aria-hidden="true"></i>
            <div className="pt-2"><strong>Management Team</strong></div>
          </div>
          <hr/>
          <div className="card-body small pt-0">
              <div className="d-flex">
                <span>Total Members</span>
                <span className="ml-auto">10</span>
            </div>
          </div>
        </div>
       
      </div>
    )
}

export default Teams;