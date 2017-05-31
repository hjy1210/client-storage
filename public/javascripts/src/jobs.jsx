var React = require('react');
var request = require('request');
var Job = require('./Job.jsx');

class Jobs extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
    this.getData=this.getData.bind(this)
  }
  getData(){
    request.get('http://localhost:3000/api/jobs/', (error, response, body)=> {
      var result = JSON.parse(body);
      //console.log(result)
      this.setState({data:result.data.jobs});
    })
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className='list-group'>
        {
          this.state.data.map(job => {
            return (
              <Job
                key={job.job_id}
                id={job.job_id}
                company={job.company}
                position={job.position}
                local={job.local}
                lookingFor={job.lookingFor}
                postedDate={job.postedDate}
                description={job.description}
                category={job.category}
              />
            )
          })
        }
      </div>
    )
  }
}

module.exports = Jobs